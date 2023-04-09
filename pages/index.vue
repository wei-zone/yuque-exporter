<!--
 * @Name: home.vue
 * @Author: forguo
 * @Date: 2023/3/14 13:59
 * @Description: home
-->
<template>
    <div v-loading="tableLoading" class="page home-page">
        <el-container style="height: 100%">
            <el-aside width="240px" class="repo-tree">
                <el-tree
                    ref="repoTreeRef"
                    style="width: 100%"
                    :data="reposTreeData"
                    default-expand-all
                    :current-node-key="namespace || ''"
                    node-key="value"
                    highlight-current
                    @node-click="getReposDetail"
                />
            </el-aside>
            <el-container>
                <el-main style="display: flex; flex-direction: column">
                    <div class="doc-control">
                        <el-link type="primary" style="text-align: center; margin-left: 24px" @click="handleExportTree">
                            导出目录
                            <el-icon class="el-icon--right"><Download /></el-icon>
                        </el-link>
                        <el-link type="success" style="text-align: center; margin-left: 24px" @click="handleExportDocs">
                            导出文档
                            <el-icon class="el-icon--right"><Download /></el-icon>
                        </el-link>
                        <el-divider />
                    </div>
                    <el-scrollbar class="doc-tree">
                        <el-tree
                            ref="docTreeRef"
                            :data="docTreeData"
                            default-expand-all
                            node-key="url"
                            :props="defaultProps"
                        >
                            <template #default="{ data }">
                                <div class="doc-tree-node">
                                    <span>{{ data.title }}</span>
                                    <i class="doc-tree-line"></i>
                                    <el-link
                                        v-if="data.type === 'DOC'"
                                        type="primary"
                                        @click="handleExportSingle(data.url)"
                                    >
                                        导出
                                    </el-link>
                                </div>
                            </template>
                        </el-tree>
                    </el-scrollbar>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { Download } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import dayjs from 'dayjs'
import { onBeforeMount, ref } from 'vue'
import JSZip from 'jszip'
import pkg from 'file-saver'
import consola from 'consola'
import { AxiosResponse } from 'axios'
import request from '~/plugin/request.app'
const saveAs: any = pkg.saveAs

// 知识库
interface Repo {
    label: string
    value: string
    namespace?: string
    name?: string
    children?: Repo[]
}

// 文档
interface Doc {
    id?: number
    url: string
    slug?: string
    date?: string
    title?: string
    name?: string
    address?: string
    created_at?: string
    updated_at?: string
    children?: Doc[]
}

// 当前知识库路径
const namespace = ref<string>('')
// 知识库名称
const repoName = ref<string>('')
// 知识库树
const reposTreeData = ref<Repo[]>([])
// 知识库文档树
const docTreeData = ref<Doc[]>([])
const tableLoading = ref<boolean>(true)
// 知识库ref
const repoTreeRef = ref()
// 知识库文档ref
const docTreeRef = ref()
// tree props
const defaultProps = { label: 'title', children: 'items' }

// 获取知识库列表
const getReposList = async () => {
    try {
        tableLoading.value = true
        const { data } = await request('/repos')
        reposTreeData.value = [
            {
                label: '知识库',
                value: '',
                children: data.map((item: Repo) => ({
                    value: item.namespace,
                    label: item.name
                }))
            }
        ]
        repoTreeRef.value?.setCheckedKeys([data[0].namespace], true)
        // 默认知识库
        const value = data[0]?.namespace || ''
        const label = data[0]?.name
        await getReposDetail({ value, label })
    } catch (e: any) {
        tableLoading.value = false
    }
}

// 获取知识库详情
const getReposDetail = async ({ value, label }: { value: string; label: string }) => {
    if (value) {
        try {
            tableLoading.value = true
            namespace.value = value || ''
            repoName.value = label

            const { data } = await request(`/repos?namespace=${value}`)
            const { docTree } = data
            docTreeData.value = docTree
            tableLoading.value = false
        } catch (e: any) {
            tableLoading.value = false
        }
    }
}

// 导出目录
const handleExportTree = () => {
    const blob = new Blob([JSON.stringify(docTreeData.value, null, 4)], {
        type: 'application/json'
    })
    saveAs(blob, `${repoName.value}.${dayjs().format('YYYY.MM.DD')}.json`)
    ElMessage.success('导出成功~')
}

// 导出知识库文档
const handleExportDocs = async () => {
    if (!namespace.value) {
        return false
    }
    tableLoading.value = true
    const res = await request(`/export?namespace=${namespace.value}`, {
        responseType: 'blob'
    })
    downLoadFile(res)
    tableLoading.value = false
    ElMessage.success('导出成功~')
}
/**
 * @description: 文件下载
 */
const downLoadFile = (res: AxiosResponse) => {
    const filename = getFilenameFromResponse(res)
    const url = window.URL.createObjectURL(new Blob([res.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link) // 下载完成移除元素
    window.URL.revokeObjectURL(url) // 释放掉blob对象
}

// 获取文件名
function getFilenameFromResponse(res: AxiosResponse): string {
    const contentDisposition = res.headers['content-disposition']
    if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="(.*?)"/)
        if (filenameMatch && filenameMatch.length > 1) {
            return decodeURIComponent(filenameMatch[1])
        }
    }
    return 'download'
}
// 单个导出
const handleExportSingle = (url: string) => {
    handleExport([url])
}

// 导出
const handleExport = async (docs: string[]) => {
    try {
        tableLoading.value = true
        const requests = docs.map((url: string) => {
            return request(`/docs?url=${url}&namespace=${namespace.value}`)
        })
        const res = await Promise.all(requests)
        fileZip(res)
    } catch (e) {
        tableLoading.value = false
    }
}

// 压缩文件并导出
const fileZip = (list: any[]) => {
    const zip = new JSZip()
    list.forEach(item => {
        const { body, title } = item.data
        zip.file(`${title}.md`, body)
    })
    zip.generateAsync({ type: 'blob' })
        .then(function (content) {
            // see FileSaver.js
            saveAs(content, `${repoName.value}.${dayjs().format('YYYY.MM.DD')}.zip`)
            ElMessage.success('导出成功')
            tableLoading.value = false
        })
        .catch(e => {
            console.log('export.e', e)
            ElMessage.warning('导出失败，请重试！')
            tableLoading.value = false
        })
}

onBeforeMount(() => {
    const token = window.localStorage.getItem('yuque_token')
    consola.info('index', token)
    token && getReposList()
})
</script>
<style lang="scss">
.home-page {
    display: flex;
    flex-direction: column;
    .repo-tree {
        box-sizing: border-box;
        padding-bottom: 240px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        border-right: 1px solid #efefef;
    }
    .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
        background-color: #eff0f0;
    }
    .el-tree-node,
    .el-tree-node__label {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .el-tree-node__content {
        height: 32px;
    }
    .doc-tree {
        flex: 1;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
        padding: 0 24px;
    }
    .doc-tree-node {
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .doc-tree-line {
        flex: 1;
        margin: 0 16px;
        border-top: 1px dashed #d8dad9;
    }
}
</style>
