/*
 * 工具函数集 utils
 * @Author: magical
 * @Date: 2017-11-14 15:32:24
 */

import cookie from './cookie/cookie';  //处理cookie

class Utils {
    /**
     * 数组去重
     * @param arr
     * @returns {any[]}
     */
    distinct = (arr) => {
        // return Array.from(new Set(arr));
        return [...new Set(arr)];
    };

    /**
     * 去空格
     * @param str
     */
    delSpace = (str) => {
        return str.replace(/\s/g,'');
    };

    /**
     * 判断用户是否完善信息，然后根据用户类型跳转不同页面
     * @param userType
     * @param userName
     * @returns {string}
     */
    getRedirectPath = ({userType, userName}) => {
        let url = (userType === 'boss')? '/boss' : '/genius';
        if(!userName){
            url += 'info';
        }
        return url
    };

    /**
     * 排序组合
     * @param userId
     * @param targetId
     * @returns {string}
     */
    getChatId = (userId, targetId) => {
        return [userId, targetId].sort().join('_')
    };

    /**
     * 设置cookie
     */
    steCookie = cookie.setCookie;

    /**
     * 获取cookie
     */
    getCookie = cookie.getCookie;

    /**
     * 删除cookie
     */
    delCookie = cookie.delCookie;



}

export default new Utils();