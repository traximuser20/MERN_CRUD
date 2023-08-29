import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const ConnectionDB = async(userName, password) => {
    const url = `mongodb+srv://${userName}:${password}@cluster0.rwaamy3.mongodb.net/?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
        // mongoose.connection.on('connected', () => {
        //     console.log('MongoDB connected');
        // });
    }
    catch (error) {
        console.log(error);
    }
}
export default ConnectionDB;