const express = require('express');
const morgan = require("morgan");
const router = require("./routes/routes");

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public/stylesheets"));
app.use(express.urlencoded({ extended: false }));


app.use('/', router)


 const PORT = 4001;

 app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
