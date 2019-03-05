const Router = require('koa-router')

const router = new Router({prefix: '/api'})

router.get('/', ctx => {
  ctx.body = {message: 'Welcome to the api!'}
})

module.exports = router
