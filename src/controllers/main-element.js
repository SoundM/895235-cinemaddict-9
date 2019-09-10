import {Sort} from "../components/sort";
import {FilmsBoard} from "../components/films";
import {Position, render} from "../components/utils";
import {PageControllerFilms} from "./films-element";

export class PageController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    this._sort = new Sort();
    this._filmsBoard = new FilmsBoard();
  }

  init() {
    render(this._container, this._sort.getElement(), Position.BEFORE_END);
    render(this._container, this._filmsBoard.getElement(), Position.BEFORE_END);

    const filmsElement = this._container.querySelector(`.films`);
    const pageControllerFilmsList = new PageControllerFilms(filmsElement, this._cards, this._sort);
    pageControllerFilmsList.init();
  }
}
