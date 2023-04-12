const fastify = require("fastify");
const controller = require('../controllers/Register')
const controllerss=require('../controllers/Login')
const controlle = require("../controllers/update")
const userMidlleware= require("../middleware/usermiddleware")
const loginMiddleware = require("../middleware/loginMiddleware")
const authMiddleware = require("../middleware/Auth");

exports.userRouter = (fastify, opts, done) => {
    fastify.post('/user/register', {preHandler: ([userMidlleware]) }, controller.register)
    fastify.post("/user/login", controllerss.signIn);
    fastify.put("/user/update",controlle.update);
    done()
  }