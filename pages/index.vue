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
                @click="handleExportMultiple"
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
                    <el-button type="primary" size="small" @click="handleExportSingle(scope.row.slug)">导出</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { Timer } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import dayjs from 'dayjs'
import { onBeforeMount, Ref, ref } from 'vue'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import consola from 'consola'
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
const namespace: Ref<String> = ref('')
const reposData: Ref<Repo[]> = ref([])
const tableData: Ref<Doc[]> = ref([])
const tableLoading: Ref<Boolean> = ref(true)
// 选中文档库
const multipleSelection = ref<string[]>([])

// 选中
const handleSelectionChange = (val: Doc[]) => {
    multipleSelection.value = val.map(item => item.slug)
}

// 获取知识库列表
const getReposList = async () => {
    try {
        tableLoading.value = true
        const { data } = await request('/repos')
        reposData.value = data
        await getDocList(data[0].namespace)
    } catch (e: any) {
        tableLoading.value = false
    }
}

// 获取文档列表
const getDocList = async (value: string) => {
    namespace.value = value
    try {
        tableLoading.value = true
        const { data } = await request(`/docs?namespace=${value}`)
        tableData.value = data
        tableLoading.value = false
    } catch (e: any) {
        tableLoading.value = false
    }
}

const handleExportSingle = slug => {
    handleExport([slug])
}

const handleExportMultiple = () => {
    handleExport(multipleSelection.value)
}

// 批量导出
const handleExport = async docs => {
    try {
        tableLoading.value = true
        const requests = docs.map(slug => {
            return request(`/export?slug=${slug}&namespace=${namespace.value}`)
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
    const token = window.localStorage.getItem('yuque_token')
    consola.info('index', token)
    token && getReposList()
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
