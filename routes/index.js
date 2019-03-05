const Router = require('koa-router')

const router = new Router()

router.get('/', ctx => {
  ctx.body = {message: 'Hello!'}
})

module.exports = router
