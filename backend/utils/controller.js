export const error = (res, httpException) => {
  return res.status(httpException.statusCode || 500).json(httpException.message)
};

export const response = (res, data) => {
  return res.status(200).json(data)
};

export const handleResponse = (res, promise) =>  {
  return promise
    .then(data => response(res, data))
    .catch(err => error(res, err))
};