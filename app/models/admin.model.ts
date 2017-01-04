import * as mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  prof: {
    type: Boolean,
    default: false,
    required: false,
  },
  lastname: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  teams: {
    type: Array,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

// Methods
adminSchema.method({
});

// Statics
adminSchema.static({
});

const Admin = mongoose.model('Admin', adminSchema);

export { Admin };

/*
mobileNumber: {
    type: String,
    match: [/^[1-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.'],
    required: true
},
*/
