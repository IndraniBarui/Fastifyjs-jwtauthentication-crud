const categorySchema = require("../modal/category");
exports.productValidation = async (req, reply, next) => {
  const { name, title, price, owner, category_type } = req.body;
  if (!name || !title || !price || !category_type) {
    return reply.send({
      success: false,
      msg: "please fill the field",
    });
  }

  const categoryExists = await categorySchema.find({ name: category_type });
  console.log(categoryExists);

  if (categoryExists.length <= 0) {
    return reply.send({
      success: false,
      msg: "The specified category does not exist",
    });
  }
  next();
};

// module.exports = productValidation;
