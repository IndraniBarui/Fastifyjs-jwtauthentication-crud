const product = require("../modal/product");
exports.checkOwnerShip = async (req, reply, next) => {
// chrck
  if (req.role !== "admin") {
    return reply
      .code(403)
      .send({ message: "You are not authorized to delete this item" });
  }
  const Product = await product.find({ _id: req.params.id });

  if (Product[0].owner !== req._id) {
    return reply
      .code(403)
      .send({ message: "Only owner should access" });
  }
 
  
};

exports.checkforupdate=async (req, reply, next) => {
    // chrck
      if (req.role !== "admin") {
        return reply
          .code(403)
          .send({ message: "You are not authorized to update this item" });
      }
      const Product = await product.find({ _id: req.params.id });
    
      if (Product[0].owner !== req._id) {
        return reply
          .code(403)
          .send({ message: "Only owner should access" });
      }
     
    };