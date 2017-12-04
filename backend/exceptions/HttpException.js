export default class HttpException extends Error {
  constructor(message, statusCode = 500) {
    super(message)
    this.message = message;
    this.statusCode = statusCode;
  }
}