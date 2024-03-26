
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const Affiliation = require('../models/affiliation');



chai.use(chaiHttp);


describe('Test', () => {


it('should POST a valid product', (done) => {
        
    let affiliation = {
        name: "Test Affiliation",
    }
    chai.request(server)
    .post('/affiliation/add')
    .send(affiliation)
    .end((err, res) => {
        res.should.have.status(201);
        done();
    });

});

});