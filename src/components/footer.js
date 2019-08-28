export const createTemplateFooter = (getFilters) => `
<footer class="footer">
  <section class="footer__logo logo logo--smaller">Cinemaddict</section>
  <section class="footer__statistics">
  <p>${getFilters.allFilmsNumber} movies inside</p>
</section>
</footer>`;
