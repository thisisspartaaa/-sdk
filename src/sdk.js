/**
 * Created by root on 2018/2/18.
 */

const axios = require('axios')
const urls = require('../config/urls')
let conf = require('../config/conf')


module.exports = {
  login: () => {
    return axios.get(urls.UserInterface,{params:{
      action:'login',
      username:conf.username,
      password:conf.password
    }})
      .then(handleResponse)
  },
  getaccountinfo: (token,format) => {
    return axios.get(urls.UserInterface,{
      params: {
        action:'getaccountinfo',
        token,
        format,
      }})
      .then(handleResponse)
  }
  ,
  getmobile: ({token,format,itemid,isp,province,city,mobile,excludeno}) => {
    return axios.get(urls.UserInterface,{
      params: {
        action:'getmobile',
        token,
        format,
        itemid,
        isp,
        province,
        city,
        mobile,
        excludeno
      }})
      .then(handleResponse)
  }
  ,
  getsms: ({token,format,itemid,mobile,release}) => {
    return axios.get(urls.UserInterface,{
      params: {
        action:'getmobile',
        token,
        format,
        itemid,
        mobile,
        release
      }})
      .then(handleResponse)
  }
  ,
  addignore: ({token,format,itemid,mobile}) => {
    return axios.get(urls.UserInterface,{
      params: {
        action:'addignore',
        token,
        format,
        itemid,
        mobile
      }})
      .then(handleResponse)
  }
}





let handleResponse = (response)=>{
  return new Promise((resolve, reject) => {
    let res = response.data.split('|') && response.data.split('|')
    if (res && res[0] === 'success') {
      try{
        return resolve({state: res[0], res:JSON.parse(res[1])})
      }catch (err){
        return resolve({state: res[0], res:res[1]})
      }
    }
    return reject(response.data)
  });
}