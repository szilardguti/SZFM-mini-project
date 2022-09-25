process.env.MODE_ENV = 'test'

const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let db = require('../services/db')
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('API call tests', () => {

    after('after', () => {
        db.simpleDisconnect()
    });

    describe('/GET results', () => {
        it('it should GET easy results', (done) => {
            chai.request(server)
                .get('/scores?difficulty=easy')
                .end((err, res) => {
                    res.should.have.status(200)

                    const actualResult = res.body;
                    actualResult.should.be.a('array');
                    actualResult.forEach(element => {
                        expect(element.difficulty).to.be.equal('easy');
                    });

                done();
                });
        });

        it('it should GET medium results', (done) => {
            chai.request(server)
                .get('/scores?difficulty=medium')
                .end((err, res) => {
                    res.should.have.status(200)

                    const actualResult = res.body;
                    actualResult.should.be.a('array');
                    actualResult.forEach(element => {
                        expect(element.difficulty).to.be.equal('medium');
                    });

                done();
                });
        });

        it('it should GET hard results', (done) => {
            chai.request(server)
                .get('/scores?difficulty=hard')
                .end((err, res) => {

                    res.should.have.status(200)

                    const actualResult = res.body;
                    actualResult.should.be.a('array');
                    actualResult.forEach(element => {
                        expect(element.difficulty).to.be.equal('hard');
                    });

                done();
                });
        });

        it('it should GET empty results for non-existing type', (done) => {
            chai.request(server)
                .get('/scores?difficulty=non')
                .end((err, res) => {
                    res.should.have.status(200)

                    const actualResult = res.body;
                    actualResult.should.be.a('array');
                    expect(actualResult).to.have.length(0);
                done();
                });
        });
    });

    describe('/POST results', () => {
        it('it should POST a valid result', (done) => {
            chai.request(server)
                .post('/postToScoreboard')
                .set('content-type','application/json')
                .send({
                    userId: 3,
                    scoreUserName: "TESZT ELEK",
                    points: 1,
                    completionTime: "420:59:59",
                    difficulty : "easy"
                })
                .end((err, res) => {
                    res.should.have.status(200)
                    expect(res.body.affectedRows).to.be.equal(1);
                done();
                });
        });
    })
});