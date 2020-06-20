import { RequestHandler } from 'express';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Booking } from '../../models/Booking';

export const createBooking: RequestHandler = async (req, res, next) => {
  try {
    req.body.createdAt = new Date();
    req.body.status = 'PENDING';
    const newBooking = new Booking(req.body);
    const result: any = await newBooking.save();
    return res.status(200).send({
      success: true,
      result,
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
  }
};
