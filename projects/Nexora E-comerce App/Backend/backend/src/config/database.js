const mongoose = require("mongoose");

//! handle events and errors
async function connectDB() {
  try {
    //? get mongoDB from .env
    const mongoURI = process.env.mongoURI;
    if (!mongoURI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    //connect to mongoDB
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    //? handle connection events
    mongoose.connection.on(
      ("error",
      (err) => {
        console.error("MongoDB connection error:", err);
      }),
    );
    mongoose.connection.on("disconnected", () => {
      console.error("MongoDB disconnected");
     
    });
    //?gracefull shut down
    process.on("SIGINT",async () => {
      await mongoose.connection.close()
      console.log(" MongoDB connection closed through app termination");
       process.exit(0);
    })
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); //exit with failure
  }
}
module.exports=connectDB
