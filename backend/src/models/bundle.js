const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

schema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "BundleID",
});

// uncomment these to see if virtual populating is working or not.
// uncommenting these and populating on routes , you will see records getting populated

schema.set("toObject", { virtuals: true });
schema.set("toJSON", { virtuals: true });

// statics are for operation on Model directly

const Bundle = mongoose.model("Bundle", schema);

module.exports = Bundle;
