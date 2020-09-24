//Web Model
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;




var userSchema = new Schema({
    dealer_id: { 
        type: String, required: true ,
        unique: false, //unique: true only one value can have the same email address  
    },
    email: { 
        type: String,  
        required: false, 
        //unique: true, //unique: true only one value can have the same email address
        //match regex RFC 2822, still match 99.99% of used emails. 
        //If we pass something that is not an email, we get an error.
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
        }, 
    password: { type: String, required: true},
    city: { type: String, required: false },
    address: { type: String, required: false },
    account_type: { type: String, required: true }, 
    company_name: { type: String, required: true },
    telephone: { type: String, required: false },
    contact_name: { type: String, required: false },
    contact_lastname: { type: String, required: false },
    salesman: { type: String, required: false },
    //delete
    inventory_products: {
        type: Array, required: true
    },
    route: {type: String, required: true} //Este parametro se podria modificar y usarlo como
    //referencia para una tabla de ruta e informacion de salesman para cada ruta, entre otras cosas.

    //later change for associate products and orders related to that user account
});

userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });


module.exports = mongoose.model('User', userSchema);