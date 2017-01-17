/**
 * Created by ligh on 2016/11/19.
 */
"use strict";

const request = require('request');
const qs = require('querystring');
const WXSDKConfig = require('./WXSDKConfig');

/**
 * WXSDKAPI prototype.
 */
const WXSDKAPI = exports = module.exports = {};

/**
 * 根据用户授权后获取的code 请求openId
 * @param code
 */
WXSDKAPI.requestWXOpenID = function (code) {


    // 请求参数
    let params =
    {
        appid: WXSDKConfig.AppId,
        secret: WXSDKConfig.AppSecret,
        code: code,
        grant_type: WXSDKConfig.Grant_Type
    };

    // 请求选项
    let options =
    {
        method: 'get',
        url: WXSDKConfig.URL.Access_Token + qs.stringify(params)
    };

    return new Promise(function (resolve, reject)
    {
        // 发起请求
        request(options, function (err, res, body)
        {

            if (res)
            {
                resolve(res.body);

            } else
            {
                reject(err);
            }
        })

    });

};

/**
 * 查询微信用户信息
 * @param query {access_token,openid}
 */
WXSDKAPI.requestUserInfo = function (query) {

    query = JSON.parse(query);

    // 请求参数
    let params =
    {
        access_token: query['access_token'],
        openid: query['openid'],
        lang: 'zh_CN'
    };


    // 请求选项
    let options =
    {
        method: 'get',
        url: WXSDKConfig.URL.User_Info+qs.stringify(params)
    };

    return new Promise(function (resolve, reject)
    {
        // 发起请求
        request(options, function (err, res, body)
        {
            if (res)
            {
                resolve(res.body);

            } else
            {
                reject(err);
            }
        })

    });

};


