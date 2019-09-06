import {createElement, unRender} from './utils';

export class ButtonShowMore {
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
    return `<button class="films-list__show-more">Show more</button>`;
  }
}
