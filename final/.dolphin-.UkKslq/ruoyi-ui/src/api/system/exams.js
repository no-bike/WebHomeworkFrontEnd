import request from '@/utils/request'

// 查询考试表列表
export function listExams(query) {
  return request({
    url: '/system/exams/list',
    method: 'get',
    params: query
  })
}

// 查询考试表详细
export function getExams(id) {
  return request({
    url: '/system/exams/' + id,
    method: 'get'
  })
}

// 新增考试表
export function addExams(data) {
  return request({
    url: '/system/exams',
    method: 'post',
    data: data
  })
}

// 修改考试表
export function updateExams(data) {
  return request({
    url: '/system/exams',
    method: 'put',
    data: data
  })
}

// 删除考试表
export function delExams(id) {
  return request({
    url: '/system/exams/' + id,
    method: 'delete'
  })
}
