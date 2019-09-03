import {createElement, unRender} from './utils';

export class FilmsTopRated {
  constructor() {
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate().trim());
    }

    return this._element;
  }

  removeElement(element) {
    this._element = null;
    unRender(element);
  }


  getTemplate() {
    return `<h2 class="films-list__title">Top rated</h2>`;
  }
}
