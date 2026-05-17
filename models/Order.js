const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true
  },

  products: [
    {
      productId: String,
      name: String,
      price: Number,
      qty: Number
    }
  ],

  totalAmount: Number,

  address: String,

  status: {
    type: String,
    default: "placed"
  }

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);


// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   userId: String,
//   products: [
//     {
//       productId: String,
//       name: String,
//       price: Number,
//       qty: Number
//     }
//   ],
//   totalAmount: Number,
//   status: {
//     type: String,
//     default: "placed"
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("Order", orderSchema);