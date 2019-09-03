import {createElement, unRender} from './utils';

export class FilmsExtra {
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
    return `<section class="films-list--extra">
      <div class="films-list__container"></div>
      </section>`;
  }
}
