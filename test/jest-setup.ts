import supertest from 'supertest';

import { SetupServer } from '@src/server';

beforeAll(() => {
  const mServer = new SetupServer();
  mServer.init();

  global.testRequest = supertest(mServer.getApp());
});
