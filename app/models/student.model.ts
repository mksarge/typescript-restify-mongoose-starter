import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Document interface
interface IStudentDocument extends mongoose.Document {
  username: string;
  createdAt: Date;
}

// Model interface
interface IStudentModel extends mongoose.Model<IStudentDocument> {
  findByUsername(username: string): any;
}

const StudentSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Statics
StudentSchema.statics = {
  /**
  * Get a student by his/her username.
  * @param {string} username - The GitHub username of the student.
  * @returns {Promise<any>} Returns a Promise of the student.
  */
  findByUsername: function (username: string): Promise<IStudentDocument> {
    return this
      .find({ username: username })
      .exec()
      .then((student: Array<IStudentModel>) => {
        if (student && student.length) {
          return student[0];
        }
        return Promise.reject('errrrr');
      });
  }
};

const Student: IStudentModel = <IStudentModel>mongoose.model('Student', StudentSchema);

export { Student, IStudentDocument };
