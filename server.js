var currencyConverter = require ('./routes/currencyConverter');
const bodyParser = require('body-parser');
var request = require('request');


var express = require('express'),
  app = express();
const port = process.env.PORT || 5000
app.listen(port);
app.use(bodyParser.json());

app.use('/', currencyConverter);
console.log('RESTful API server started on port : ' + port);


// Sending Register Request to Service Registry
var data = {
  "Service_Name" : "USD to LKR Service",
  "Service_Call_Name" :  "usdtolkr",
  "Configs" : {
    "location"  : "https://usdtolkrservice.herokuapp.com/",
    "port" : port,
    "type" : "REST",
    "method" : "POST",
    "parameters" : {
      "parameter_01" : "number"
    }
  }
}

request.post({
  url: "https://usdtolkrservice.herokuapp.com/",
  headers: {
     "Content-Type": "application/json"
  },
  body: data,
  json:true
}, function(error, response, body){
console.log(error);
console.log(JSON.stringify(response));
console.log(body);
});
