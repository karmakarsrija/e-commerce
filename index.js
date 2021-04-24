// This is the  server side where we shall write the route to recieve the shopping cart data from client . Also here we will save data to database

const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(8880,()=> console.log('Listening at port 8880'));
app.use(express.static('public'));
app.use(express.json({limit: '10000mb'}));

const database = new Datastore('Server_database.db');
database.loadDatabase();
//console.log("This is Client Server")

app.post('/api',(request,response) => {
console.log('Recieved a new shopping package !');    

const timestamp = Date.now();


//console.log("This is Client Server")
const data = request.body;
//data2 =  data.json;
console.log(request.body);

database.insert(data);


response.json({
    status : 'success',
    timestamp : data.timestamp,
    Items_present : data.Items_present,
    Total_Cost : data.Total_Cost
    })
});





















