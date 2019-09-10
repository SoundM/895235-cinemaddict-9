import {Search} from "./components/search.js";
import {UserProfile} from "./components/user-profile.js";
import {Navigation} from "./components/navigation";
import {render} from './components/utils.js';
import {Statistic} from "./components/statistic.js";
import {Footer} from "./components/footer";
import {cards} from './data/data-card.js';
import {getStatistic} from './data/data-statistic.js';
import {getFilters} from './data/data-filter.js';
import {PageController} from "./controllers/main-element";
const header = `.header`;
const main = `.main`;
const mainNavigation = `.main-navigation`;
const mainElement = document.querySelector(`.main`);

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

const pageController = new PageController(mainElement, cards);
pageController.init();

