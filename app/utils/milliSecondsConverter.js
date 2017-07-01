export const timeConversion = expireAt => {
  const expire = new Date(expireAt).getTime();
  const millisec = expire - new Date().getTime();
  const seconds = (millisec / 1000).toFixed(1);
  const minutes = (millisec / (1000 * 60)).toFixed(1);
  const hours = (millisec / (1000 * 60 * 60)).toFixed(1);
  const days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

  if (seconds < 60) {
    return seconds + " SEC";
  } else if (minutes < 60) {
    return minutes + " MIN";
  } else if (hours < 24) {
    return hours + " HRS";
  } else {
    return days + " DAYS";
  }
};