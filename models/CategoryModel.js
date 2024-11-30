const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "category required"],
      unique: [true, "category must be unique"],
      minlength: [3, "Too short category name"],
      maxlength: [32, "too long category name"],
    },
    // A and B => shoping.com/a-and-b
    slug: {
      type: String,
      lowercase: true,
    },
    image: String,
  },
  { timestamps: true }
);

const setImageURL = (doc) => {
  if (doc.image) {
    const imageUrl = `${process.env.BASE_URL}/Categories/${doc.image}`;
    doc.image = imageUrl;
  }
};

// findOne, findAll, Update
CategorySchema.post("init", (doc) => {
  setImageURL(doc);
});

// create
CategorySchema.post("save", (doc) => {
  setImageURL(doc);
});

const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = CategoryModel;
