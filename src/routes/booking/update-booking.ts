import { RequestHandler } from 'express';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Booking } from '../../models/Booking';

export const updateBooking: RequestHandler = async (req, res, next) => {
  try {
    req.body.updatedAt = new Date();
    await Booking.findOneAndUpdate(
      { _id: req.body.bookingId },
      req.body,
    ).exec();
    const result: any = await Booking.findOne({
      _id: req.body.bookingId,
    })
      .populate('userId')
      .populate('serviceId')
      .exec();
    return res.status(200).send({
      success: true,
      result,
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
  }
};
