//Bibliotecas
const request = require('supertest');
const {expect} = require('chai');

//Testes
describe('Transfer Controller', () => {
    describe('POST /api/transfers', () => {

        let transferStub;

        afterEach(() => {
            // Restaura o método original após cada teste
            if (transferStub) transferStub.restore();
        });


        it('Quando informo remetente e destinatario inexistente recebo 400', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/api/transfers')
                .send({
                    from: "Julcilea",
                    to: "Renata",
                    amount: null
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body.message).to.equal('Os campos from, to e amount são obrigatórios.');
        });
    });
});
