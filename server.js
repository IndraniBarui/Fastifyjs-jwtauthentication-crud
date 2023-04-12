const fastify = require("fastify")({logger:true})
const bodyParser= require('body-parser');
const { getIn } = require('./controllers/Login');


const PORT = 3000;

require("./connection/config")
fastify.register(require('fastify-xml-body-parser'))
fastify.register(require('./routes/userRoute').userRouter);
fastify.register(require('./routes/productRoutes').productRoute)
fastify.register(require('./routes/categoryRoutes').categoryRoute)
fastify.decorate('getIn', getIn)

fastify.listen({ port: PORT }, err => {
    if (err) throw err
    console.log(`server is running on port ${PORT}`)
  })