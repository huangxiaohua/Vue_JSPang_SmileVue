const BASEURL = '/'
const LOCALURL = 'http://localhost:3000/'
const URL = {
  getShoppingMallInfo: BASEURL + 'getShoppingMallValue',
  getGoodsInfo: BASEURL + 'getGoodsInfo',
  registerUser: LOCALURL + 'user/register', // 用户注册接口
  login: LOCALURL + 'user/login',  // 用户登录接口
  getDetailGoodsInfo : LOCALURL + 'goods/getDetailGoodsInfo'
}

module.exports = URL
