const Koa = require('koa')
const app = new Koa()
// const mongoose = require('mongoose')

const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const Router = require('koa-router')

// 引入connect
const { connect, initSchemas } = require('./database/init.js')

const config = {
  user: 'sa',
  password: 'Good1234',
  server: 'XIAOHUA-DESKTOP\\SQL2017DEV', // You can use 'localhost\\instance' to connect to named instance
  database: 'DncZeus'
}

const sql = require('mssql')

;(async function () {
  try {
    let pool = await sql.connect(config)
    let result1 = await pool
      .request()
      .input(
        'input_parameter',
        sql.NVarChar,
        'D7F32600-64C3-484D-A933-2D4A62BDA0BC'
      )
      .query('select * from DncUser ') // where Guid = @input_parameter

    console.dir(result1)

    // Stored procedure

    /*     let result2 = await pool
      .request()
      .input('input_parameter', sql.Int, value)
      .output('output_parameter', sql.VarChar(50))
      .execute('procedure_name')

    console.dir(result2) */
  } catch (err) {
    // ... error checks
    console.log(err)
  }
})()

sql.on('error', err => {
  console.log(err)
  // ... error handler
})

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
let user = require('./appApi/user.js')
router.use('/user', user.routes())
let goods = require('./appApi/goods.js')
router.use('/goods', goods.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000')
})
