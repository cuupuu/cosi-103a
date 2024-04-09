const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index'); // adjust the path as needed

chai.should();
chai.use(chaiHttp);

describe('Smoke Test', () => {
  it('should return 200 for the /api/recipes endpoint', (done) => {
    chai.request(server)
      .get('/api/recipes')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});