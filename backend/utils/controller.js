export const error = (res, httpException) => {
  return res.status(httpException.statusCode).json(message)
};

export const response = (res, data) => {
  return res.status(200).json(data)
};