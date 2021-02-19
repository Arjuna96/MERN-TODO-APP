# MERN-TODO-APP

MERN Stack TODO App

# MERN-TODO-APP Backend

To start the backend navigate to the backend folder and run,

To install the packages :

### `npm i`

To start the backend :

### `npm start`

Backend will start in port 5000, You need to start mongo as well.

# MERN-TODO-APP Client

To start the client, navigate to the client folder and run,

To install the packages :

### `npm i`

To start the client :

### `npm start`

client will start in port 3000 unless it is already used.

# MERN-TODO-APP Backend APIs

#### Create New Account

##### /register

Params :
username,password

#### Login

##### /login

Params :
username,password

#### Add New Todo

##### /add/todo

Params :
todo ,description,isDone,username

#### Edit Todo

##### /edit/todo

Params :
id,todo ,description

#### Get only active todos

##### /get/todo-active

Params :
username,isDone

#### Get All todos

##### /get/todo

Params :
username

#### Mark Todo as Completed

##### /edit/compllete

Params :
id,isDone

#### Delete Todo

##### /remove/todo:id

Params :
id,isDone
