import {FilmsList} from "../components/films-list";
import {FilmsExtra} from "../components/films-extra";
import {FilmsTopRated} from "../components/films-top-rated";
import {FilmsMostCommented} from "../components/films-most-commented";
import {ButtonShowMore} from "../components/button-show-more";
import {Card} from "../components/card";
import {Popup} from "../components/popup";
import {Position, render, unRender} from "../components/utils";
import {SearchNoResult} from "../components/search-no-result";
import {CardsCount} from "../data/data-card";

const popupContainer = document.querySelector(`body`);
let cardBalance = CardsCount.All - CardsCount.CARDS_ACTIVE;
let cardCount = CardsCount.CARDS_ACTIVE;

export class PageControllerFilms {
  constructor(container, cards, sort) {
    this._container = container;
    this._cards = cards;
    this._sort = sort;
    this._filmsList = new FilmsList();
    this._buttonShowMore = new ButtonShowMore();
    this._filmsListExtraTopRaiting = new FilmsExtra();
    this._filmsTopRated = new FilmsTopRated();
    this._filmsListExtraMostComments = new FilmsExtra();
    this._filmsMostCommented = new FilmsMostCommented();
  }

  init() {
    render(this._container, this._filmsList.getElement(), Position.BEFORE_END);
    const filmsMainContainerElement = this._container.querySelector(`.films-list .films-list__container`);
    render(filmsMainContainerElement, this._buttonShowMore.getElement(), Position.AFTER_END);
    render(this._container, this._filmsListExtraTopRaiting.getElement(), Position.BEFORE_END);
    render(this._container, this._filmsListExtraMostComments.getElement(), Position.BEFORE_END);
    const filmsTopRatedElement = this._container.querySelector(`.films-list--extra:nth-child(2) .films-list__container`);
    const filmsMostCommentedElement = this._container.querySelector(`.films-list--extra:nth-child(3) .films-list__container`);
    render(filmsTopRatedElement, this._filmsTopRated.getElement(), Position.BEFORE_BEGIN);
    render(filmsMostCommentedElement, this._filmsMostCommented.getElement(), Position.BEFORE_BEGIN);
    const buttonLoadMoreElement = document.querySelector(`.films-list__show-more`);

    if (CardsCount.All === 0) {
      Array.from(document.querySelector(`.main`).children).forEach((it) => {
        unRender(it);
      });
      render(document.querySelector(`.main`), new SearchNoResult().getElement(), Position.AFTER_BEGIN);
    }
    this._cards.slice(0, CardsCount.CARDS_ACTIVE).forEach((film) => this._renderCards(filmsMainContainerElement, film, Position.BEFORE_END));
    document.querySelector(`.statistic`).classList.add(`visually-hidden`);
    document.querySelector(`.statistic`).remove();

    const sortedByRating = this._cards.slice(0, CardsCount.All).sort((a, b) => b.rating - a.rating);
    sortedByRating.slice(0, CardsCount.CARD_COUNT_EXTRA).forEach((film) => this._renderCards(filmsTopRatedElement, film, Position.BEFORE_END));
    const sortedByComments = this._cards.slice(0, CardsCount.All).sort((a, b) => b.comments - a.comments);
    sortedByComments.slice(0, CardsCount.CARD_COUNT_EXTRA).forEach((film) => this._renderCards(filmsMostCommentedElement, film, Position.BEFORE_END));


    buttonLoadMoreElement.addEventListener(`click`, () => {
      if (cardBalance > CardsCount.ADD_BY_CLICK) {
        cardBalance -= CardsCount.ADD_BY_CLICK;
        cardCount += CardsCount.ADD_BY_CLICK;
        return this._cards.slice(0, CardsCount.ADD_BY_CLICK).forEach((film) => this._renderCards(filmsMainContainerElement, film, Position.BEFORE_END));
      }
      cardCount = CardsCount.All;
      buttonLoadMoreElement.style.display = `none`;
      return this._cards.slice(0, cardBalance).forEach((film) => this._renderCards(filmsMainContainerElement, film, Position.BEFORE_END));
    });

    this._sort.getElement()
      .addEventListener(`click`, (evt) => this._onSortFilterClick(evt));
  }


  _renderCards(container, taskMock, position) {
    const cardFilm = new Card(taskMock);
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

    cardFilm.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => {
      render(popupContainer, popup.getElement(), Position.BEFORE_END);
      popup.getElement().classList.remove(`visually-hidden`);
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    popup.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, closePopup);

    popup.getElement().querySelector(`.film-details__comment-input`).addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

    popup.getElement().querySelector(`.film-details__comment-input`).addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    render(container, cardFilm.getElement(), position);
  }

  _onSortFilterClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `A`) {
      return;
    }

    document.querySelectorAll(`.sort__button`).forEach((el) => {
      el.classList.remove(`sort__button--active`);
    });

    evt.target.classList.add(`sort__button--active`);

    const filmsMainContainerElement = this._container.querySelector(`.films-list .films-list__container`);
    filmsMainContainerElement.innerHTML = ``;

    switch (evt.target.dataset.sortType) {
      case `by-date`:
        const sortedByDateUp = this._cards.slice(0, cardCount).sort((a, b) => a.year - b.year);
        sortedByDateUp.forEach((taskMock) => this._renderCards(filmsMainContainerElement, taskMock, Position.BEFORE_END));
        break;
      case `by-rating`:
        const sortedByRating = this._cards.slice(0, cardCount).sort((a, b) => b.rating - a.rating);
        sortedByRating.forEach((taskMock) => this._renderCards(filmsMainContainerElement, taskMock, Position.BEFORE_END));
        break;
      case `default`:
        this._cards.slice(0, cardCount).forEach((taskMock) => this._renderCards(filmsMainContainerElement, taskMock, Position.BEFORE_END));
        break;
    }
  }
}
