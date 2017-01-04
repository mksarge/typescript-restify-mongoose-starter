import * as chai from 'chai';
import * as supertest from 'supertest';
import { app } from '../../server';
import { logger } from '../../utils/logger';
const expect = chai.expect;

describe('grade API', () => {
  describe('GET /api/grade', () => {
    it('should return "get grades"', (done) => {
      supertest(app)
        .get('/api/grade')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('get grades');
            done();
          }
        });
    });
  });

  describe('PUT /api/grade', () => {
    it('should return "update grades"', (done) => {
      supertest(app)
        .put('/api/grade')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('update grades');
            done();
          }
        });
    });
  });
});
