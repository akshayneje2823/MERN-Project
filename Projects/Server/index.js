const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/post')
const CategoryRoute = require('./routes/categories');
const multer = require('multer');
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


  // Image uploading
  const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
      cb(null,"images")
    },
    filename : (req,file,cb) => {
      cb(null,"hello.jpg")
      // cb(null,req.body.name)
    },
  });
  const upload = multer({storage : storage});
  app.post('/api/upload',upload.single('file'),(req,res) => {
    res.status(200).json("File has been uploaded")
  })

// All Routes
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", CategoryRoute)


app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log("Backend is running.")
})

