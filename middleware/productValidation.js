const productValidation = async (req, reply, next) => {
  const { name, title, price, owner } = req.body;
  if (!name || !title || !price ) {
    reply.send({
      success: false,
      msg: "please fill the field",
    });
  }
  next()
};

module.exports=productValidation;
