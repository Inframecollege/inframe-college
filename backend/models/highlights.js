import mongoose from 'mongoose';


const highlightSchema = new mongoose.Schema({
    title: {
    type: String,
    required: [true, 'title is required'],
    trim: true,
  },
  count: {
    type: String,
    required: [true, 'count  is required'],
    trim: true,
    minLength: 2, 
    maxLength: 100,
  },
  desc: {
    type: String,
    required: [true, 'desc is required'],
    trim: true,
    minLength: 2, 
    maxLength: 100,
  },
  image: {
    type: String,
    required: [true, 'image is required'],
    trim: true,
  },
  
}, { timestamps: true });

const Highlight = mongoose.model('Highlight', highlightSchema);


export default Highlight;   