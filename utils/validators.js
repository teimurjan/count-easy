import HttpBadRequestException from '../exceptions/HttpBadRequestException'

export const checkForRequiredFields = (data, fields) => {
  const absentValues = []
  fields.forEach(field => {
    if (!data[field]) {
      absentValues.push(field)
    }
  });
  if (!!absentValues.length) {
    throw new HttpBadRequestException(`You didn\'t return these fields:\n ${absentValues.join(', ')}`)
  }
};