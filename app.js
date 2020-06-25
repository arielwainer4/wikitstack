const express = require('express');
const morgan = require("morgan");
const router = require("./routes/routes");
const { db } = require('./models');
const models = require('./models');
const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public/stylesheets"));
app.use(express.urlencoded({ extended: false }));




app.use('/', router)

const init = async() => {
  try {
await models.db.sync()


 const PORT = 4001;

 app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
} catch(err) {console.log(err)}
}

init()