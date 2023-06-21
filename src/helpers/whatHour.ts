export const whatHour = (seconds: number) => {
  const date = new Date(seconds * 1000);
  return date.getUTCHours();
};