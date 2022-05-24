const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser=require('body-parser')
const cors = require('cors')
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.json());

// const PORT = process.env.PORT || 2000

mongoose.connect('mongodb://localhost:27017/todolist')

// mongoose.connect(process.env.DB_CONN)
// .then(()=> console.log('Database connected'))
// .catch(err => console.log(err))

app.use(cors({origin:'*'}))
const Todo=require('./models/todolists');


// ROutes
const TodoItemRoute = require('./routes/todoitems');

app.use('/', TodoItemRoute);



//PORT: 4000
app.listen(5000, ()=> console.log("Server connected") );