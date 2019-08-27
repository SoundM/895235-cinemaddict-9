const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
};
const getRandomSeveral = (title) => {
  let j;
  let temp;
  for (let i = title.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = title[j];
    title[j] = title[i];
    title[i] = temp;
  }
  return title.slice(0, getRandomNumberInRange(1, 3));
};
const getRandomRating = (count) => {
  return parseFloat((Math.random() * count).toFixed(1));
};

const getRandomItemFrom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
const getRandomBoolean = () => {
  return Boolean(Math.round(Math.random()) * 0.5);
};

const getRandomNumber = (count) => {
  return Math.floor(Math.random() * count);
};
const getRandomDescription = (string) => {
  const str = string.split(`.`);
  str.pop();
  return str[getRandomNumber(str.length)];
};
const getRandomDuration = () => {
  const hourRandom = Math.round(1 - 0.5 + Math.random() * (2 - 1 + 1));
  const minuteRandom = Math.round(10 - 0.5 + Math.random() * (59 - 10 + 1));
  return `${hourRandom}h ${minuteRandom}m`;
};
const getRandomRealise = () => {
  const randomDay = new Date(getRandomNumberInRange(1900, 2019), getRandomNumberInRange(0, 11), getRandomNumberInRange(1, 31)
  ).toLocaleDateString(`en-GB`, {
    day: `numeric`,
    month: `short`,
    year: `numeric`
  }).split(` `).join(` `);
  return randomDay;
};

export {getRandomRating, getRandomBoolean, getRandomItemFrom, getRandomNumberInRange, getRandomSeveral, getRandomDescription, getRandomNumber, getRandomDuration, getRandomRealise};
