/* tslint:disable:variable-name */
import { model as mongooseModel, Schema } from 'mongoose';

export const description = 'Stores details of Services info';

export const definitions = {
  createdAt: { type: Date },
  updatedAt: { type: Date },
  serviceName: { type: String },
  serviceType: { type: String },
  description: { type: String },
  amount: { type: Number },
};

const serviceSchema: Schema = new Schema(definitions);

export const Service = mongooseModel('Service', serviceSchema);
