// config/database.js
// Connexion à MongoDB (Mongoose) et configuration du client InfluxDB

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { InfluxDB } from '@influxdata/influxdb-client';

dotenv.config();

// ---- MongoDB ----
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';

mongoose
  .connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(' MongoDB connection error:', err));

// ---- InfluxDB ----
const influxUrl = process.env.INFLUX_URL || 'http://localhost:8086';
const influxToken = process.env.INFLUX_TOKEN || 'dev-token';
const influxOrg = process.env.INFLUX_ORG || 'dev-org';
const influxBucket = process.env.INFLUX_BUCKET || 'dev-bucket';

const influxDB = new InfluxDB({
  url: influxUrl,
  token: influxToken,
});

export const influxWriteApi = influxDB.getWriteApi(influxOrg, influxBucket);

export default mongoose;
