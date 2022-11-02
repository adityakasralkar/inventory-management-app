import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';


dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json())
;
//Routes
app.get('/' , (req , res ) => {
  res.send("HomePage");
});


const PORT = process.env.PORT || 2000;
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
    