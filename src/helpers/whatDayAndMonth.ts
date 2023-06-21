export const whatDayAndMonth = (seconds: number) => {
  const date = new Date(seconds * 1000);
  const day = date.getUTCDate();
  const month =  date.getUTCMonth()
  return {day: day, month: month};
};