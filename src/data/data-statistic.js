import {getRandomItemFrom, getRandomNumber, getRandomNumberInRange} from './utils';

const genres = [`Horror`, `Comedy`, `Western`, `Romance`, `Cartoon`, `Action`, `Documentary`, `Sci-Fighter`];
const watched = getRandomNumber(50);
const hours = watched * getRandomNumberInRange(2, 8);

export const getStatistic = () => ({
  watched,
  hours,
  minute: getRandomNumber(59),
  topGenre: getRandomItemFrom(genres),
});
