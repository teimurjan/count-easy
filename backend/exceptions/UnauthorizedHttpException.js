import HttpException from './HttpException';

export default class UnauthorizedHttpException extends HttpException {
  constructor(message = 'Unauthorized') {
    super(message, 401)
  }
}