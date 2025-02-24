import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        const connect=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${connect.connection.host} `);
    } catch (error) {
        console.log("Mongo db connection error",error);
        process.exit(1);
    }
}
export default dbConnect;