const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')

const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const Router = require('koa-router')
let user = require('./appApi/user.js')

// 引入connect
const { connect, initSchemas } = require('./database/init.js')

// 立即执行函数
;(async () => {
  await connect()
  initSchemas()
  /*  const User = mongoose.model('User')
  let oneUser = new User({ userName: 'jspang', password: '123456' })
  oneUser.save().then(() => {
    console.log('插入成功')
  })

  let users = await User.findOne({}).exec()

  console.log('------------------')
  console.log(users)
  console.log('------------------') */
})()

app.use(bodyParser())
app.use(cors())

let router = new Router()
router.use('/user', user.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000')
})
