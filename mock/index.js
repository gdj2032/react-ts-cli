const delay = require("mocker-api/utils/delay");
const data = {
  'GET /mock/user/userInfo': {
    "id": 1,
    "username": "admin",
    "password": "123456",
  },
  'POST /mock/user/login': {
    "id": 1,
    "username": "admin",
  },
}

module.exports = delay(data, 250);
