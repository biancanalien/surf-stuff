describe('Beach forecast functional tests', () => {
  it('return a forecast with a few times', async () => {
    const { body, status } = await global.testRequest.get('/forecast');
    expect(status).toBe(200);
    expect(body).toEqual({});
  });
});
