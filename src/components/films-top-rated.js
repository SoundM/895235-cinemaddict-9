import {AbstractComponent} from './abstract-component';

export class FilmsTopRated extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<h2 class="films-list__title">Top rated</h2>`;
  }
}
