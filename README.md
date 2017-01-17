# WXSDK
使用NodeJS获取微信用户信息


#使用教程:

clone项目至本地，进入项目根目录 分别执行以下命令

`1. npm install`

`2. npm start`

打开浏览器访问如下链接

`http://127.0.0.1:3000/wx/userInfo?code=1233`

提示：code是微信授权后获取的code 你需要在真实环境下测试该项目

代码示例：

 
 	const wxAPI = require('../api/wxSDK/WXSDKAPI');

    wxAPI.requestWXOpenID(code).then(wxAPI.requestUserInfo).then(function (userInfo)
    {
      res.send('userInfo:'+JSON.stringify(userInfo));

     }).catch(function (error) {

    res.send('failed'+JSON.stringify(userInfo));
    });
