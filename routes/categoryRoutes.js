

const category = require("../controllers/Category")
const token = require("../middleware/loginMiddleware")
const owner = require("../middleware/ownerValidation")


exports.categoryRoute = (fastify, opts, done) => {
    fastify.post('/admin/category/post',{preHandler:([token.getIn,owner.checkOwnerShip])}, category.catCreate)
    fastify.get('/admin/category/get', {preHandler:([token.getIn,owner.checkOwnerShip])},category.catGet)
    fastify.delete('/admin/category/delete/:id',{preHandler:([token.getIn,owner.checkOwnerShip])}, category.catDelete)
    fastify.put('/admin/category/update/:id',{preHandler:([token.getIn,owner.checkOwnerShip])}, category.catUpdate)
    done()
  }