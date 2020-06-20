import * as express from 'express';
import { isLoggedIn } from '../utils/isLoggedIn';

import { createServiceRules } from './validators/create-service-rule';
import { getServiceRules } from './validators/get-service-rule';
import { updateServiceRules } from './validators/update-service-rule';
import { deleteServiceRules } from './validators/delete-service-rule';
import { listServiceRules } from './validators/list-all-services-rule';

import { createService } from './create-service';
import { getService } from './get-service';
import { updateServices } from './update-services';
import { deleteService } from './delete-service';
import { listServices } from './list-all-services';

export const service = express.Router();

service.post('/create-service', createServiceRules, createService);
service.post('/get-service', getServiceRules, getService);
service.post('/list-services', listServiceRules, listServices);
service.post('/update-service', updateServiceRules, updateServices);
service.post('/delete-service', deleteServiceRules, deleteService);
