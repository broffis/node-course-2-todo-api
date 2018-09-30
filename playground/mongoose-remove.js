const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5bb0fd4951014239a6f4f801'}).then((todo) => {

// });

Todo.findByIdAndRemove('5bb0fd4951014239a6f4f801').then((todo) => {
    console.log(todo);
});