//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const {expect} = require('chai');


//Aplicação
const app = require('../../app');
const transferService = require('../../service/transferService');


//Testes
describe('Transfer Controller', () => {
    describe('POST /api/transfers', () => {

        let transferStub;

        afterEach(() => {
            // Restaura o método original após cada teste
            if (transferStub) transferStub.restore();
        });


        it('Quando informo remetente e destinatario inexistente recebo 400', async () => {
            const resposta = await request(app)
                .post('/api/transfers')
                .send({
                    from: "Julcilea",
                    to: "Renata",
                    amount: null
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body.message).to.equal('Os campos from, to e amount são obrigatórios.');
        });

        it('Mockando transferService: deve retornar 400 com mensagem do Swagger', async () => {
            // Mocka o método transfer para simular o retorno desejado
            transferStub = sinon.stub(transferService, 'transfer').callsFake((req, res) => {
                return res.status(400).json({ message: 'Os campos from, to e amount são obrigatórios.' });
            });

            const resposta = await request(app)
                .post('/api/transfers')
                .send({
                    from: "qualquer",
                    to: "",
                    amount: 100
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body.message).to.equal('Os campos from, to e amount são obrigatórios.');
        });
    });
});
