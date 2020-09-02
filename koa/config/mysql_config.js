// 数据库连接配置

const Client = require("mysql-pro");
const client = new Client({
  mysql: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'test'  // 数据库名
  }
});

module.exports = client;
