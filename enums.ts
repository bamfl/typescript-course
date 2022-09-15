// 200 - Success
// 400 - Client Error
// 500 - Server Error

enum StatusCode {
  SUCCESS = 200,
  CLIENT_ERROR = 400,
  SERVER_ERROR = 500
}

enum StatusMessage {
  SUCCESS = 'Success',
  CLIENT_ERROR = 'Client Error',
  SERVER_ERROR = 'Server Error'
}

enum Roles {
  ADMIN,
  USER
}

const resp = {
  message: 'Success',
  statusCode: 200
}

if (resp.statusCode === StatusCode.SUCCESS) {
  console.log('Успех!')
}

if (resp.message === StatusMessage.SUCCESS) {
  console.log('Успех!')
}


function action(status: StatusCode) {
  // Do something
}

action(StatusCode.SUCCESS);