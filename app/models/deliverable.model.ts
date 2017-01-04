import * as mongoose from 'mongoose';

const deliverableSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  open: {
    type: Date,
    required: true,
  },
  due: {
    type: Date,
    required: true,
  },
  gradeRelease: {
    type: Boolean,
    required: true,
  },
  isTeam: {
    type: Boolean,
    required: true,
  },
  upload: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Methods
deliverableSchema.method({
});

// Statics
deliverableSchema.static({
});

const Deliverable = mongoose.model('Student', deliverableSchema);

export { Deliverable };
