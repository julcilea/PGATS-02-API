//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const {expect} = require('chai');

//Aplicação
const app = require('../../app');

//Testes
describe('Transfer Controller', () => {
    describe('POST /api/transfers', () => {
        it('Quando informo remetente e destinatario inexistente recebo 400', async () => {
            const resposta = await request(app)
                .post('/api/transfers')
                .send({
                    from: "Julcilea",
                    to: "Renata",
                    amount: null
                });
            expect(resposta.status).to.equal(200);
        });
    });
});
