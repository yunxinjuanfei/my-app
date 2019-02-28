import $ from 'jquery'

class MUtil {
    request(param){
        return new Promise((resolve,reject)=>{
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                sucess(res){
                    //数据请求成功
                    if(0 ===res.status){
                        typeof resolve === 'function' && resolve(res.data,res.msg);
                    }else if(10 === res.status){
                        //没有登录状态，强制登录
                        this.doLogin();
                    }else{
                        typeof reject === 'function' && reject(res.msg ||res.data);
                    }
                },
                error(err){
                    typeof reject === 'function' && reject(err.statusText);
                }
            });
        });
    }
    //跳转登录
    doLogin(){
        //window.location.pathname url路径部分,端口后边，问号前边
        //例如 redirect="/user/index"
        window.location.href = '/login?redirect='+encodeURIComponent(window.location.pathname);
    }
    //获取URL参数
    getUrlParam(name){
        // xxx.com?param=123&param1=456 用正则把它取出来
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp("(^|&)"+ name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        // console.log(result)
        return result ? decodeURIComponent(result[2]) : null;
        //result : ['param=123','','123','&']
    }
    //错误提示
    errorTips(errMsg){
        alert(errMsg || '好像哪里不对了~')
    }
}

export default MUtil