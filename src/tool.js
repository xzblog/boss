/*
 * 工具方法 tool
 * @Author: magical
 * @Date: 2017-11-14 15:32:24
 */

class Tool {

    /**
     * 字符串去空格
     * @param str
     */
    delSpace = (str) => {
        return str.replace(/\s/g,'');
    };

    /**
     * 判断用户是否完善信息，然后根据用户类型跳转不同页面
     * @param userType
     * @param avatar
     * @returns {string}
     */
    getRedirectPath = ({userType, avatar}) => {
        let url = (userType === 'boss')? 'boss' : 'genius';
        if(!avatar){
            url += 'info';
        }
        return url
    }


}

export default new Tool();