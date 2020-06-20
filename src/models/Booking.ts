/* tslint:disable:variable-name */
import { model as mongooseModel, Schema } from 'mongoose';

export const description = 'Stores details of Services info';

export const definitions = {
  createdAt: { type: Date },
  updatedAt: { type: Date },
  bookingDate: { type: Date },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service' },
  status: {
    type: String,
    enum: ['ACTIVE', 'PENDING', 'PAYMENT'],
    default: 'PENDING',
  },
};

const Bookingchema: Schema = new Schema(definitions);

export const Booking = mongooseModel('Booking', Bookingchema);
