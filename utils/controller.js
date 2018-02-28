export const error = (res, httpException) => res
  .status(httpException.statusCode || 500)
  .json({ error: httpException.message });

export const response = (res, data) => res.status(200).json(data);
