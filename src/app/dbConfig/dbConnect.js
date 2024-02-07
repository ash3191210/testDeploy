import mongoose from "mongoose";
const connection = {};
  
const DB_URI = process.env.DB;
  
const connectDb = async () => {
    if (connection.isConnected) {
      console.log("IT IS CONNECTED !!!!")
      return;
    }
    try {
      const dbConnection = await mongoose.connect(DB_URI);
      console.log("DB CONNECTED SUCCESSFULLY !!!!!!");
      connection.isConnected = dbConnection.connections[0].readyState;
    } catch (err) {
      console.error(`error connecting to db ${err.message || err}`);
    }
  };
  
  export { connectDb };
  