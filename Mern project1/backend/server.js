// imports
import express from 'express';
import connectDB from './db.js';
import cors from 'cors';
import router from './router.js';

const app = express();

// port
const port = 3000 ;

// middlewares
app.use(cors()) ;
app.use(express.json())

// requests/routes:
app.get('/api/message', (req,res) => {
   res.json({ message: 'Hello from backend' });
});

// router here with all the routes:
app.use("/api/products", router);

// connection and port live.
app.listen(port, () => {
    connectDB();
    console.log(`Example app listening at http://localhost:${port}`);
});

// MVC Pattren(Model-View-Controller) very scalable. you can increase the functions in the controller easily. If there is some error go to the specific file and function and fix it from there
// We use routes file to store all requests(get,post,put,delete). We then use the route in our entry point. Our entry point is the point where all routes are accessible.
// the backend link is mostly used for backend testing.

// we use backend apis in the frontend to fetch data 
// .env use yet to learn.
// model is used to make database documents and entries. schema and model.
