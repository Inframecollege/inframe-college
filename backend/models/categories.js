import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  href: {
    type: String,
    required: true,
    trim: true
  }
});

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  links: [linkSchema], // Array of links
  category: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  }
});

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    items: [itemSchema] // Array of items
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;