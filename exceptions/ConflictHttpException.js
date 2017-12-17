import HttpException from './HttpException';

export default class ConflictHttpException extends HttpException {
  constructor(message = 'Conflict') {
    super(message, 409)
  }
}