import HttpBadRequestException from '../exceptions/HttpBadRequestException'

export default (data, fields) => {
  const absentValues = [];
  fields.forEach((field) => {
    if (!data[field]) {
      absentValues.push(field);
    }
  });
  if (absentValues.length > 0) {
    throw new HttpBadRequestException(`You didn't return these fields:\n ${absentValues.join(', ')}`);
  }
}