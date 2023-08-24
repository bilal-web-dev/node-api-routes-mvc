import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "api",
    })
    .then(() => console.log("Database is connected"))
    .catch((err) => console.log(err));
};
