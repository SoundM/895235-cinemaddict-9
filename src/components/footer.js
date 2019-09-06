import {createElement, unRender} from './utils';

export class Footer {
  constructor({all}) {
    this._element = null;
    this._all = all;
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
    return `<footer class="footer">
  <section class="footer__logo logo logo--smaller">Cinemaddict</section>
  <section class="footer__statistics">
  <p>${this._all} movies inside</p>
</section>
</footer>`;
  }
}
