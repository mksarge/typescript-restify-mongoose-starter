import * as chai from 'chai';
import * as supertest from 'supertest';
import { app } from '../../server';
import { logger } from '../../utils/logger';
const expect = chai.expect;

describe('ping API', () => {
  describe('GET /api/ping', () => {
    it('should return "pong"', (done) => {
      supertest(app)
        .get('/api/ping')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('pong');
            done();
          }
        });
    });
  });
});
