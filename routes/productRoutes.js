
const controller = require("../controllers/product")
// const prduct = require("../controllers/product")
const mid = require("../middleware/productValidation")
const token = require("../middleware/loginMiddleware")
const owner = require("../middleware/ownerValidation")
exports.productRoute = (fastify, opts, done) => {
    fastify.post('/admin/product', {preHandler: ([mid.productValidation],[token.getIn,token.checkRole]) }, controller.createProduct)
    fastify.get('/admin/productbyname', controller.findbyname)
    fastify.delete('/admin/delete/:id',{preHandler:([token.getIn,owner.checkOwnerShip])}, controller.delete)
    fastify.put('/admin/update/:id',{preHandler:([token.getIn,owner.checkforupdate])}, controller.update)
    done()
  }