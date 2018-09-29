const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5baf72ed03d8debc5d6afed5';

// if(!ObjectID.isValid(id)) {
//     console.log(`ID not valid`);
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(`Todos: ${todos}`)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(`Todo: ${todo}`)
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log(`Id not found`);
//     }
//     console.log(`Todo by ID: ${todo}`)
// }).catch((e) => {console.log(e)});

//Query the Users collection using User.findByID
var id = '5bae9498184aa8ab4fae2823';

//Handle missing user
User.findById(id).then((user) => {
    if(!user) {
        return console.log(`User not found`);
    }
    console.log(`User: ${user}`);
}).catch((e) => console.log(e));

//Handle found user

//Handle errors