/**
 * Created by root on 2018/2/18.
 */
const ym = require('../../src/sdk');


module.exports = {
  login: () => {
    return ym.login().then((r) => {
      process.env.YM_TOKEN = r.res;
      return r
    })
  },
  getaccountinfo: ym.getaccountinfo
  , getmobile: ym.getmobile
  , getsms: ym.getsms
  , addignore: ym.addignore
}