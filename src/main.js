import {createTemplateSearch} from "./components/search.js";
import {createTemplateUserProfile} from "./components/user-profile.js";
import {createTemplateNavigation} from "./components/navigation";
import {createTemplateSort} from "./components/sort";
import {createTemplateFilmsBoard} from "./components/films.js";
import {createTemplateFilmsList} from "./components/films-list.js";
import {createTemplateFilmsExtra} from "./components/films-extra.js";
import {createTemplateFilmsMostCommented} from "./components/films-most-commented.js";
import {createTemplateFilmsTopRated} from "./components/films-top-rated.js";
import {createTemplateButtonShowMore} from "./components/button-show-more.js";
import {createTemplateCardFilm} from "./components/card.js";
import {createTemplatePopup} from "./components/popup.js";
import {createTemplateStatistic} from "./components/statistic.js";
import {getCard} from './data/data-card.js';

// const CARD_COUNT = 5;
// const CARD_COUNT_EXTRA = 2;
const CardsCount = {
  CARDS_ACTIVE: 5,
  CARD_COUNT_EXTRA: 2,
  ADD_BY_CLICK: 8,
  All: 23,
};
const header = `.header`;
const main = `.main`;
const filmsBoard = `.films`;
const filmsList = `.films-list__container`;
const filmsTopRatedTitle = `.films-list--extra:nth-child(2)`;
const filmsMostCommentedTitle = `.films-list--extra:nth-child(3)`;
const filmsTopRated = `.films-list--extra:nth-child(2) .films-list__container`;
const filmsMostCommented = `.films-list--extra:nth-child(3) .films-list__container`;
const popup = `body`;
const mainNavigation = `.main-navigation`;

const tasks = new Array(CardsCount.All).fill(``).map(getCard);


const elements = [
  {
    container: header,
    template: createTemplateSearch,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: header,
    template: createTemplateUserProfile,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: main,
    template: createTemplateNavigation,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: main,
    template: createTemplateSort,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: main,
    template: createTemplateFilmsBoard,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: filmsBoard,
    template: createTemplateFilmsList,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: filmsBoard,
    template: createTemplateFilmsExtra,
    place: `beforeEnd`,
    amount: 2
  },

  {
    container: filmsTopRatedTitle,
    template: createTemplateFilmsTopRated,
    place: `afterBegin`,
    amount: 1
  },

  {
    container: filmsMostCommentedTitle,
    template: createTemplateFilmsMostCommented,
    place: `afterBegin`,
    amount: 1
  },

  {
    container: filmsBoard,
    template: createTemplateButtonShowMore,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: filmsList,
    template: createTemplateCardFilm,
    place: `beforeEnd`,
    amount: CardsCount.CARDS_ACTIVE
  },

  {
    container: filmsTopRated,
    template: createTemplateCardFilm,
    place: `beforeEnd`,
    amount: CardsCount.CARD_COUNT_EXTRA
  },

  {
    container: filmsMostCommented,
    template: createTemplateCardFilm,
    place: `beforeEnd`,
    amount: CardsCount.CARD_COUNT_EXTRA
  },

  {
    container: popup,
    template: createTemplatePopup,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: mainNavigation,
    template: createTemplateStatistic,
    place: `afterEnd`,
    amount: 1
  }

];

const renderAllComponents = () => {
  elements.forEach((it) => {
    const currentContainer = document.querySelector(it.container);
    for (let i = 0; i < it.amount; i++) {
      currentContainer.insertAdjacentHTML(it.place, it.template(getCard()));
    }
  });
};
renderAllComponents();

document.querySelector(`.film-details`).classList.add(`visually-hidden`);
document.querySelector(`.statistic`).classList.add(`visually-hidden`);

