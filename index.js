'use strict';
const fs = require('fs');

//This is the default json object
const newCustomer = { 
    name: 'Robin',
    age: 26, 
    gender: 'Male', 
    id: 1208,
    address: "Brain Station 23 Ltd"
};
 
const data = JSON.stringify(newCustomer, null, 2);

//This is the writeFile block
fs.writeFile('newCustomer.json', data, (err) => {
    if (err) throw err;
});

//This is the readFile block
fs.readFile('customer.json', (err, data) => {
    if (err) throw err;
    let customer = JSON.parse(data);
    console.log('This is read file');
    console.log(customer);
});

//This is the updateFile block
fs.readFile('customer.json', (err, data) => {
    if (err) throw err;
    let customer = JSON.parse(data);
    customer.age +=1;
    console.log('This is update file');
    console.log(customer);

    fs.writeFile('customer.json', JSON.stringify(customer), (err) =>{
        if (err) throw err;
    })
});


