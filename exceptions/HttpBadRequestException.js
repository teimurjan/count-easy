import HttpException from './HttpException';

export default class HttpBadRequestException extends HttpException {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}
