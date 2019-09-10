import {AbstractComponent} from './abstract-component';

export class FilmsBoard extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<section class="films"></section>`;
  }
}
