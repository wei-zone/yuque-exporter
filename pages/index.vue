<!--
 * @Name: home.vue
 * @Author: forguo
 * @Date: 2023/3/14 13:59
 * @Description: home
-->
<template>
    <div v-loading="tableLoading" class="page home-page">
        <div class="page-control">
            <el-form label-width="auto" :label-position="'left'">
                <el-form-item label="知识库：" style="margin-bottom: 0">
                    <el-select v-model="namespace" placeholder="请选择" filterable @change="getDocs">
                        <el-option
                            v-for="item in reposData"
                            :key="item.namespace"
                            :label="item.name"
                            :value="item.namespace"
                        />
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button
                type="primary"
                :disabled="!multipleSelection.length"
                :loading="tableLoading"
                @click="handleExport"
            >
                批量导出
            </el-button>
        </div>
        <el-table
            v-show="!tableLoading"
            stripe
            :data="tableData"
            style="flex: 1; width: 100%; height: 100%"
            empty-text="暂无数据"
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55" />
            <el-table-column prop="title" label="标题" align="center" show-overflow-tooltip></el-table-column>
            <el-table-column label="创建时间" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center; justify-content: center">
                        <el-icon><timer /></el-icon>
                        <span style="margin-left: 10px">
                            {{ dayjs(scope.row.created_at).format('YYYY-MM-DD HH:mm:ss') }}
                        </span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="更新时间" align="center">
                <template #default="scope">
                    <div style="display: flex; align-items: center; justify-content: center">
                        <el-icon><timer /></el-icon>
                        <span style="margin-left: 10px">
                            {{ dayjs(scope.row.updated_at).format('YYYY-MM-DD HH:mm:ss') }}
                        </span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="120">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="handleExport(scope.$index, scope.row)">
                        导出
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { Timer } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import dayjs from 'dayjs'
import { onBeforeMount, ref } from 'vue'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import request from '~/plugin/request.app'

// 知识库
interface Repo {
    id: number
    slug: string
    name: string
    namespace: string
    address: string
}

// 文档
interface Doc {
    id: number
    slug: string
    date: string
    name: string
    address: string
    created_at: string
    updated_at: string
}

// 当前知识库路径
const namespace = ref<String>('')
const reposData = ref<Repo[]>([])
const tableData = ref<Doc[]>([])
const tableLoading = ref<Boolean>(true)
// 选中文档库
const multipleSelection = ref<string[]>([])

// 选中
const handleSelectionChange = (val: Doc[]) => {
    multipleSelection.value = val.map(item => item.slug)
    console.log(multipleSelection.value)
}

// 获取知识库列表
const reposList = async () => {
    try {
        tableLoading.value = true
        const { data } = await request('/repos')
        reposData.value = data
        namespace.value = data[0].namespace
        await docList(data[0].namespace)
    } catch (e: any) {
        tableLoading.value = false
    }
}

// 获取知识库文档
const getDocs = async (e: string) => {
    namespace.value = e
    await docList(e)
}

// 获取文档列表
const docList = async (namespace: string) => {
    try {
        tableLoading.value = true
        const { data } = await request(`/docs?namespace=${namespace}`)
        tableData.value = data
        tableLoading.value = false
    } catch (e: any) {
        tableLoading.value = false
    }
}

// 批量导出
const handleExport = async (index: number, row: Doc) => {
    try {
        tableLoading.value = true
        console.log(index, row)
        const docs = multipleSelection.value.map(slug => {
            return request(`/export?slug=${slug}&namespace=${namespace.value}`)
        })
        const res = await Promise.all(docs)
        fileZip(res)
    } catch (e) {
        tableLoading.value = false
    }
}

// 压缩文件并导出
const fileZip = (list: any[]) => {
    const zip = new JSZip()
    // 知识库名称
    let name = ''
    list.forEach(item => {
        const { body, title, book } = item.data
        zip.file(`${title}.md`, body)
        if (!name) name = book.name
    })
    zip.generateAsync({ type: 'blob' })
        .then(function (content) {
            // see FileSaver.js
            saveAs(content, name)
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
    reposList()
})
</script>
<style scoped lang="scss">
.home-page {
    display: flex;
    flex-direction: column;
}
.page-control {
    padding: 0 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
