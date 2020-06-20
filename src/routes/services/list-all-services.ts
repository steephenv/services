import { RequestHandler } from 'express';
import { Promise as BluePromise } from 'bluebird';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Service } from '../../models/Service';

export const listServices: RequestHandler = async (req, res, next) => {
  try {
    const resultP: any = Service.find({})
      .limit(req.body.limit)
      .skip(req.body.skip)
      .exec();
    const totalCountP: any = Service.count({}).exec();
    const [result, totalCount]: any = await BluePromise.all([
      resultP,
      totalCountP,
    ]);
    return res.status(200).send({
      success: true,
      count: totalCount,
      result,
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
  }
};
