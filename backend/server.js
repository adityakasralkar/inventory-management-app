import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';


dotenv.config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 2000;

//Basic Server Running
app.get('/' , (req , res ) => {
    res.json({
        message: "Server is Running",
    });
});


//DATABASE CONNECTION WITH SERVER STARTING--⬇️
    // Connect to DB and Start Server

    // 1st Method
        app.listen(PORT , () => {
        mongoose.connect(process.env.MONGO_URL)
        .then(()=> {
            console.log(`Server is Running..!! PORT: ${PORT}`);
                console.log(`Database Connection Successful...!!`);
        })
        .catch((error) => {
            console.log("Server is Running  , But Database Connection Failed..");
            console.log(error);
        });
    });

    //2nd Method
    // mongoose
    //     .connect(process.env.MONGO_URL)
    //     .then(() => {
    //         app.listen(PORT , () => {
    //             console.log(`Server is Running..!! PORT: ${PORT}`);
    //             console.log(`Database Connection Successful...!!`);
    //         });        
    //     })
    //     .catch((error) => {
    //         console.log("Server is Running  , But Database Connection Failed..");
    //         console.log(error);
    //     });
    