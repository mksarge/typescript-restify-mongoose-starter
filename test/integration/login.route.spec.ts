import * as chai from 'chai';
import * as supertest from 'supertest';
import { app } from '../../server';
import { logger } from '../../utils/logger';
const expect = chai.expect;

describe('login API', () => {
  describe('PUT /api/login', () => {
    it('should return "login"', (done) => {
      supertest(app)
        .put('/api/login')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('login');
            done();
          }
        });
    });
  });
});

describe('logout API', () => {
  describe('PUT /api/logout', () => {
    it('should return "logout"', (done) => {
      supertest(app)
        .put('/api/logout')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('logout');
            done();
          }
        });
    });
  });
});
