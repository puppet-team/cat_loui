import * as api from '../assets/request'
import conf from '@/comfig/index'

var basePath = conf.baseUrl

/**
 * 查询
 * @param listQuery
 * @returns {Promise<unknown>}
 */
export function getQuery(listQuery) {
    return api.post(basePath + 'carLogistics/list', listQuery)
}

/**
 * 新增或编辑
 * @param form
 * @returns {Promise | Promise<unknown>}
 */
export function addressAdd(form) {
    return api.post(basePath + 'carCommonAddressController/save', form)
}

/**
 * 获取地址
 * @param listQuery
 * @returns {Promise<unknown>}
 */
export function getAddress(listQuery) {
    return api.post(basePath + 'carCommonAddressController/list', listQuery)
}

/**
 * 根据id获取用户地址
 * @param listQuery
 * @returns {Promise<unknown>}
 */
export function getAddressBy(listQuery) {
    return api.post(basePath + 'carCommonAddressController/find', listQuery);
}



