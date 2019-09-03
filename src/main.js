import {Search} from "./components/search.js";
import {UserProfile} from "./components/user-profile.js";
import {Navigation} from "./components/navigation";
import {Sort} from "./components/sort";
import {FilmsBoard} from "./components/films.js";
import {FilmsList} from "./components/films-list.js";
import {FilmsExtra} from "./components/films-extra.js";
import {FilmsMostCommented} from "./components/films-most-commented.js";
import {FilmsTopRated} from "./components/films-top-rated.js";
import {ButtonShowMore} from "./components/button-show-more.js";
import {render, Position, unRender} from './components/utils.js';
import {CardFilm} from "./components/card.js";
import {Popup} from "./components/popup.js";
import {Statistic} from "./components/statistic.js";
import {Footer} from "./components/footer";
import {getCard} from './data/data-card.js';
import {getStatistic} from './data/data-statistic.js';
import {getFilters} from './data/data-filter.js';

export const CardsCount = {
  CARDS_ACTIVE: 5,
  CARD_COUNT_EXTRA: 2,
  ADD_BY_CLICK: 5,
  All: 17,
};
let cardBalance = CardsCount.All - CardsCount.CARDS_ACTIVE;
const header = `.header`;
const main = `.main`;
const filmsBoard = `.films`;
const filmsList = `.films-list .films-list__container`;
const filmsTopRatedTitle = `.films-list--extra:nth-child(2)`;
const filmsMostCommentedTitle = `.films-list--extra:nth-child(3)`;
const mainNavigation = `.main-navigation`;

const cards = new Array(CardsCount.All).fill(``).map(() => getCard());

const elements = [
  {
    container: header,
    element: new Search(),
    place: `beforeEnd`,
  },

  {
    container: header,
    element: new UserProfile(),
    place: `beforeEnd`,
  },

  {
    container: main,
    element: new Navigation(getFilters(cards)),
    place: `beforeEnd`,
  },

  {
    container: main,
    element: new Sort(),
    place: `beforeEnd`,
  },

  {
    container: main,
    element: new FilmsBoard(),
    place: `beforeEnd`,
  },

  {
    container: filmsBoard,
    element: new FilmsList(),
    place: `beforeEnd`,
  },

  {
    container: filmsList,
    element: new ButtonShowMore(),
    place: `beforeEnd`,
  },

  {
    container: filmsBoard,
    element: new FilmsExtra(),
    place: `beforeEnd`,
  },

  {
    container: filmsBoard,
    element: new FilmsExtra(),
    place: `beforeEnd`,
  },

  {
    container: filmsTopRatedTitle,
    element: new FilmsTopRated(),
    place: `afterBegin`,
  },

  {
    container: filmsMostCommentedTitle,
    element: new FilmsMostCommented(),
    place: `afterBegin`,
  },


  {
    container: main,
    element: new Footer(getFilters(cards)),
    place: `afterEnd`,
  },

  {
    container: mainNavigation,
    element: new Statistic(getStatistic()),
    place: `afterEnd`,
  },
];

const renderAllComponents = () => {
  elements.forEach((it) => {
    const currentContainer = document.querySelector(it.container);
    render(currentContainer, it.element.getElement(), it.place);
  });
};
renderAllComponents();


const buttonLoadMore = document.querySelector(`.films-list__show-more`);
const popupContainer = document.querySelector(`body`);
const filmsTopRated = document.querySelector(`.films-list--extra:nth-child(2) .films-list__container`);
const filmsMostCommented = document.querySelector(`.films-list--extra:nth-child(3) .films-list__container`);

const renderCards = (container, taskMock, position) => {
  const card = new CardFilm(taskMock);
  const popup = new Popup(taskMock);

  const closePopup = () => {
    unRender(popup.getElement());
    popup.getElement().classList.add(`visually-hidden`);
    document.removeEventListener(`keydown`, onEscKeyDown);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      closePopup();
    }
  };

  card.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => {
    render(popupContainer, popup.getElement(), Position.BEFORE_END);
    popup.getElement().classList.remove(`visually-hidden`);
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  popup.getElement()
    .querySelector(`.film-details__close-btn`)
    .addEventListener(`click`, closePopup);

  render(container, card.getElement(), position);
};


const showFilms = (films) => {
  films.slice(0, CardsCount.CARDS_ACTIVE).forEach((film) => renderCards(buttonLoadMore, film, Position.BEFORE_BEGIN));
};

showFilms(cards);

new Array(CardsCount.CARD_COUNT_EXTRA).fill(``).forEach(() => renderCards(filmsTopRated, getCard(), Position.BEFORE_END));
new Array(CardsCount.CARD_COUNT_EXTRA).fill(``).forEach(() => renderCards(filmsMostCommented, getCard(), Position.BEFORE_END));

buttonLoadMore.addEventListener(`click`, () => {
  if (cardBalance > CardsCount.ADD_BY_CLICK) {
    cardBalance -= CardsCount.ADD_BY_CLICK;
    return cards.slice(0, CardsCount.ADD_BY_CLICK).forEach((film) => renderCards(buttonLoadMore, film, Position.BEFORE_BEGIN));
  }
  buttonLoadMore.style.display = `none`;
  return cards.slice(0, cardBalance).forEach((film) => renderCards(buttonLoadMore, film));
});

// document.querySelector(`.statistic`).classList.add(`visually-hidden`);
