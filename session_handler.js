var cookieParser = require('cookie-parser');

var session = require('express-session');

//подключение модуля coonnect-mssql
var mysql = require('mysql');


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "пароль_от_сервера"
});
// тестирование подключения
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
 // закрытие подключения
 connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});

module.exports = {
  createStore: function() {
    var config = {
      user: 'test', //пользователь базы данных
      password: '12345', //пароль пользователя
      server: 'localhost', //хост
      database: 'testdb', //имя баз.д
      port:1433,  //порт, на котором запущен sql server
      pool: {
        max:10, //максимально допустимое количество соединений пула
        min:0, //миннимальное допустимое количество соединений пула
        idleTimeoutMillis: 30000 //время ожидания перед завершением неиспользуемого соединения

      }
    }

  }
}
