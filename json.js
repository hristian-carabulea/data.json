// Before running the code update the content of the data.json with the content from data_original.json.

const { json } = require("express/lib/response");
const fs = require("fs");

const dataBuffer = fs.readFileSync("data.json"); // load data from data.json
//console.log(dataBuffer); // display the read data in dataBuffer

const dataJSON = dataBuffer.toString(); //convert data to string format
const data = JSON.parse(dataJSON); //parse the data and create values or objects described by the strings
// console.log(data.name); // display the read name
// console.log(data.age); // display the read age

data.name = "Hari"; //update the name
data.age = "17"; // update the age
// console.log(data.name); // display the updated name
// console.log(data.age); // display the updated age

const dataJSONnew =JSON.stringify(data); // stringify method converts a JavaScript object or value to a JSON string
fs.writeFileSync("data.json", dataJSONnew); // update the file with the new data