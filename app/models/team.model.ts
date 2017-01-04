import * as mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  teamID: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Methods
teamSchema.method({
});

// Statics
teamSchema.static({
});

const Team = mongoose.model('Team', teamSchema);

export { Team };
