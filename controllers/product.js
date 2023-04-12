const Product = require("../modal/product");
const User = require("../modal/userModal");

exports.createProduct = async (req, reply) => {
  try {
    let body = req.body;
    body.owner = req._id;
    const result = await Product.create(body);
    if (result) {
      reply.status(201).send({
        success: true,
        msg: "product itmes create successfully",
        data: result,
      });
      let userbody = {
        notification : result._id.toString()
      }
      console.log(req._id);
      console.log(result._id.toString());
      const user = await User.updateOne({ _id: req._id }, { $set: userbody });
      console.log(user);

    } else {
      reply.status(400).send({
        success: false,
        msg: "some problem",
      });
    }
  } catch (error) {
    console.log(error);
    reply.status(500).send("error" + error.messgae);
  }
};

exports.findbyname = async (req, reply) => {
  const { name, price, createdAt } = req.query;
  // let d = new Date().toISOString(createdAt)
  let query;

  if (name && price && createdAt) {
    query = { name: name, price: price, createdAt: createdAt };
  } else if (name) {
    query = { name: name };
  } else if (price) {
    query = { price: price };
  }
  if (createdAt) {
    query = { createdAt: createdAt };
  }
  const filteredProducts = await Product.find(query);
  return filteredProducts;
};

exports.delete = async (req, reply) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const results = await Product.deleteOne({ _id: id });
    if (results.deletedCount === 0) {
      reply.code(404).send({ message: `User ${id} not found` });
    } else {
      reply.send({ message: `User ${id} deleted` });
    }
  } catch (error) {
    reply.send("error" + error.message);
  }
};

exports.update = async (req, reply) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const items = await Product.updateOne({ _id: id }, { $set: body });
    if (items) {
      reply.send({
        success: true,
        Product: items,
      });
    } else {
      reply.send({
        success: false,
        msg: "some problem",
      });
    }
  } catch (error) {
    reply.send("error" + error.message);
  }
};
