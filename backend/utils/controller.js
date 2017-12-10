export const error = (res, httpException) => {
  return res.status(httpException.statusCode || 500).json({error: httpException.message})
};

export const response = (res, data) => {
  return res.status(200).json(data)
};