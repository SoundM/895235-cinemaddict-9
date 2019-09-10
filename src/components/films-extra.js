import {AbstractComponent} from './abstract-component';

export class FilmsExtra extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `<section class="films-list--extra">
      <div class="films-list__container"></div>
      </section>`;
  }
}
