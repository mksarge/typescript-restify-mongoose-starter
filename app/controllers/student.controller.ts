import * as restify from 'restify';
import * as mongoose from 'mongoose';
import { Student, IStudentDocument } from '../models/student.model';
import { logger } from '../../utils/logger';

/**
 * Search for a student by username, and append it to req.params if successful.
 * @returns {IStudentDocument}
 */
function load(req: restify.Request, res: restify.Response, next: restify.Next) {
  Student.findByUsername(req.params.username)
    .then((student: IStudentDocument) => {
      req.params.student = student;
      return next();
    })
    .catch((err: any) => next(err));
}

/**
 * Get a student.
 * @returns {IStudentDocument}
 */
function get(req: restify.Request, res: restify.Response, next: restify.Next) {
  res.json(200, req.params.student);
  return next();
}

/**
 * Create a new student from a username, and return it.
 * @property {string} req.params.username - the GitHub username of the student
 * @returns {IStudentDocument}
 */
function create(req: restify.Request, res: restify.Response, next: restify.Next) {
  const student: IStudentDocument = new Student({
    username: req.params.username,
  });

  return student
    .save()
    .then((savedStudent: IStudentDocument) => {
      res.json(200, savedStudent);
      return next();
    })
    .catch((err: any) => next(err));
}

/**
 * Update an existing student, and return it.
 * @property {string} req.params.original - the original username
 * @property {string} req.params.new - the new username
 * @returns {IStudentDocument}
 */
function update(req: restify.Request, res: restify.Response, next: restify.Next) {
  const student = req.params.student;
  student.username = req.params.newUsername;

  return student
    .save()
    .then((updatedStudent: IStudentDocument) => {
      res.json(200, updatedStudent);
      return next();
    })
    .catch((err: any) => next(err));
}

/**
 * Delete a student, and return it. (??)
 * @returns {IStudentDocument}
 */
function remove(req: restify.Request, res: restify.Response, next: restify.Next) {
  const student = req.params.student;

  return student
    .remove()
    .then((deletedStudent: IStudentDocument) => {
      res.json(200, deletedStudent);
      return next();
    })
    .catch((err: any) => next(err));
}

export { get, create, update, remove, load };
