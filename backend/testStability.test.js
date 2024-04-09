jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'), // use actual for all non-hook parts
  createRoot: () => ({ render: jest.fn() }), // override createRoot
}));

const request = require('supertest');
const server = require('../frontend/src/index'); // adjust the path as needed

import { render, screen } from '@testing-library/react';
import App from '../frontend/src/App'; // adjust the path as needed

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

});
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../index'); // adjust the path as needed

// chai.should();
// chai.use(chaiHttp);

// describe('Smoke Test', () => {
//   it('should return 200 for the /api/recipes endpoint', (done) => {
//     chai.request(server)
//       .get('/api/recipes')
//       .end((err, res) => {
//         res.should.have.status(200);
//         done();
//       });
//   });
// });