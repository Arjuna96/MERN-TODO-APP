module.exports.config = {
  uri: 'mongodb://localhost:27017/todos',
  options: {
    dbName: 'todo-app',
    useNewUrlParser: true, //used new parser since current URL string parser is deprecated
    useUnifiedTopology: true, //new server discover used since current Server Discovery and Monitoring engine is deprecated
  },
};
