export const getMessage = (category, amountPaid) => {
  if (category.name === "Electricity") {
    let usage = amountPaid / 0.77;
    if (usage > 700) {
      usage = amountPaid / 2.16;
    }
    return `Your approximate electricity usage for the month is ${Math.round(
      usage
    )} kWh.`;
  }

  if (category.name === "Gas") {
    return `Your approximate gas usage for the month is ${Math.round(
      amountPaid / 14.41136
    )} m3.`;
  }

  if (category.name === "Central Heating") {
    return `Your approximate heating usage for the month is ${Math.round(
      amountPaid / 64.38
    )} m3.`;
  }

  if (category.name === "Tazalyk") {
    return `You are paying for ${Math.round(
      amountPaid / 22.5
    )} people. The calculation may differ if you have a retiree(s) in your home.`;
  }

  return "Could not get the approximate usage for this category";
};
