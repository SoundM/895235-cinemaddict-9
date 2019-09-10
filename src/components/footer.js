import {AbstractComponent} from './abstract-component';

export class Footer extends AbstractComponent {
  constructor({all}) {
    super();
    this._all = all;
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
