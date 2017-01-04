import * as chai from 'chai';
import * as supertest from 'supertest';
import { app } from '../../server';
import { logger } from '../../utils/logger';
const expect = chai.expect;

describe('class API', () => {
  describe('PUT /api/class', () => {
    it('should return "update class"', (done) => {
      supertest(app)
        .put('/api/class')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('update class');
            done();
          }
        });
    });
  });
});
