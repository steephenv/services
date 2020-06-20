import { get as getConfig } from 'config';
import * as express from 'express';

// swagger
import { swaggerSpec } from './swagger';

import { utils } from './utils';
import { user } from './user';
import { service } from './services';
import { booking } from './booking';

// import { attachTokenData } from './access-control/attach-token-data';
import { isLoggedIn } from './utils/isLoggedIn';

// create router
export const apis = express.Router();

apis.use('/utils', isLoggedIn, utils);
apis.use('/user', user);
apis.use('/service', service);
apis.use('/booking', booking);
// load docs if requested
if (getConfig('app.docs')) {
  // tslint:disable-next-line:no-var-requires
  // const swaggerSpec = require('./swagger');
  // deliver swagger spec
  console.log('> docs enabled'); // tslint:disable-line:no-console
  apis.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}
