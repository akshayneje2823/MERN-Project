const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const app = express();

dotenv.config({ path: './config/.env' });
// dotenv.config();

app.use(express.json())
// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// All Routes
app.use("/api/auth",authRoute)
app.use("/api/auth",userRoute)

// app.get('/',(req,res)=>{
//   res.send("Hello")
//   let name =req.params.name
//   console.log(name)
// })

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log("Backend is running.")
})



// blog-app
// jQdoJIlvxRUG1QtI