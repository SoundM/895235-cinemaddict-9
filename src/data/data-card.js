import {
  getRandomRating,
  getRandomBoolean,
  getRandomItemFrom,
  getRandomSeveral,
  getRandomDescription,
  getRandomNumber,
  getRandomDuration,
  getRandomRealise,
  getRandomNumberInRange,
} from './utils';

const dataFilms = {
  titles: [`Forrest Gump`, `Inception`, `The Lion King`, `Ice Age`, `Knockin' on Heaven's Door`, `A Beautiful Mind`, `Catch Me If You Can`, `The Matrix`, `The Pianist`, `The Lord of the Rings: The Fellowship of the Ring`, `WALL·E`, `One Flew Over the Cuckoo's Nest`, `The Pursuit of Happyness`, `The Butterfly Effect`, `Gone with the Wind`, `Ocean's Eleven`],
  posters: [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`],
  description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  genres: [`Horror`, `Comedy`, `Western`, `Romance`, `Cartoon`, `Action`, `Documentary`],
  directors: [`Robert Lee Zemeckis`, `Roberto Benigni`, `Philippe Rege`, `Roger Allers`, `Roman Polanski`, `Alexander Jacoby`, `Peter Jackson`],
  writers: [`Donald Richie`, `Lawrence Hauben`, `Hannah Patterson`, `Ronald Harwood`, `Fran Walsh`, `Steven Soderbergh`],
  actors: [`Adrien Brody`, `Jack Nicholson`, `Russell Crowe`, `David Lynch`, `Keanu Charles Reeves`, `Elijah Wood`, `Spencer Moon`, `Martin Scorsese`],
  country: [`USA`, `Italy`, `France`, `England`, `Spain`, `Poland`],
  avatar: [`angry.png`, `puke.png`, `sleeping.png`, `smile.png`, `trophy.png`],
  age: [`+3`, `12`, `16`, `18`],
  comments: [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`],
};

const getComments = (count) => {
  return new Array(count).fill(``).map(() => {
    return {
      avatar: getRandomItemFrom(dataFilms.avatar),
      name: getRandomItemFrom(dataFilms.writers),
      text: getRandomItemFrom(dataFilms.comments),
      date: getRandomNumber(100),
    };
  });
};

export const getCard = () => ({
  title: getRandomItemFrom(dataFilms.titles),
  poster: getRandomItemFrom(dataFilms.posters),
  description: getRandomDescription(dataFilms.description),
  rating: getRandomRating(4, 10),
  year: getRandomNumberInRange(1900, 2019),
  duration: getRandomDuration(),
  genre: getRandomItemFrom(dataFilms.genres),
  comments: getRandomNumber(50),
  isWatchlist: getRandomBoolean(),
  isWatched: getRandomBoolean(),
  isFavorite: getRandomBoolean(),
  original: getRandomItemFrom(dataFilms.titles),
  director: getRandomItemFrom(dataFilms.directors),
  writers: new Set(getRandomSeveral(dataFilms.writers, 1, 3)),
  actors: new Set(getRandomSeveral(dataFilms.actors, 3, 5)),
  release: getRandomRealise(),
  country: getRandomItemFrom(dataFilms.country),
  genres: new Set(getRandomSeveral(dataFilms.genres, 1, 2)),
  commentsPopup: getComments(5),
  age: getRandomItemFrom(dataFilms.age),
});
