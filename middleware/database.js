import mongoose from "mongoose";
import nextConnect from "next-connect";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const client = mongoose.connection;

async function database(req, res, next) {
  req.db = client;
  return next();
}

const middleware = nextConnect();
middleware.use(database);
export default middleware;
