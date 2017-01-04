import * as supertest from 'supertest';
import { expect } from 'chai';
import { app } from '../../server';
import { logger } from '../../utils/logger';
// import { Team } from '../../app/models/team.model';

describe('team API', () => {
  describe('GET /api/team', () => {
    it('should return "get team"', (done) => {
      supertest(app)
        .get('/api/team')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('get team');
            done();
          }
        });
    });
  });

  describe('POST /api/team', () => {
    it('should return "create team"', (done) => {
      supertest(app)
        .post('/api/team')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('create team');
            done();
          }
        });
    });
  });

  describe('DEL /api/team', () => {
    it('should return "remove team"', (done) => {
      supertest(app)
        .del('/api/team')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('remove team');
            done();
          }
        });
    });
  });

  describe('GET /api/team', () => {
    it('should return "get team"', (done) => {
      supertest(app)
        .get('/api/team')
        .end((err: any, res: supertest.Response) => {
          if (err) {
            done(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body).to.equal('get team');
            done();
          }
        });
    });
  });
});
