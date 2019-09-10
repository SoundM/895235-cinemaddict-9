import {AbstractComponent} from './abstract-component';

export class FilmsMostCommented extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<h2 class="films-list__title">Most commented</h2>`;
  }
}
