const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();

app.use(bodyParser.json());
app.use(cors());

const mongoose = require('mongoose');
const connection = "mongodb://vhomesgroup:vhomes2019@cluster0-shard-00-00.rmikc.mongodb.net:27017,cluster0-shard-00-01.rmikc.mongodb.net:27017,cluster0-shard-00-02.rmikc.mongodb.net:27017/VHomes?ssl=true&replicaSet=atlas-1wcpgc-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(connection,{
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(
    () => console.log("Database Connected Successfully")
  )
  .catch(
    err => console.log(err)
  );

// API
const users = require('./routes/users');
app.use('/users', users);

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
