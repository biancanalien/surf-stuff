import supertest from 'supertest';

describe('Beach forecast functional tests', () => {
  it('return a forecast with a few times', async () => {
    const { body, status } = await supertest(app).get('/forecast');
    expect(status).toBe(200);
    expect(body).toBe({});
  });
});
