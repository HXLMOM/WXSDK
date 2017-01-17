/**
 * Created by ligh on 2016/11/19.
 */

/**
 * WXSDKConfig prototype.
 */
const WXSDKConfig = exports = module.exports = {};

// 地址
WXSDKConfig.URL =
{

    // access_token 获取地址
    Access_Token: "https://api.weixin.qq.com/sns/oauth2/access_token?",

    // 用户信息
    User_Info: "https://api.weixin.qq.com/sns/userinfo?"

};

// appid
WXSDKConfig.AppId = "wxefafb6bb4bce54b7";
// secret
WXSDKConfig.AppSecret = "90dbf09470254e4d63c7422edb6bdb90";
//
WXSDKConfig.Grant_Type = "authorization_code";

