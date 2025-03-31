import View from './Views.js';
import icons from 'url:../../img/icons.svg'; //parcel 2

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  generateMarkupNumPages(numPages) {
    const parent = document.querySelector('.page--number');
    parent.parentNode.removeChild(parent);
    const markup = `
          <div class="page--number">
            <span class="page">${numPages} Pages</span>
          </div>`;
    this._parentElement.insertAdjacentHTML('beforebegin', markup);
  }

  _generateMarkupRight(currPage) {
    return `
          <button data-goto='${
            currPage + 1
          }' class="btn--inline pagination__btn--next">
              <span>Page ${currPage + 1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
          </button>
        `;
  }
  _generateMarkupLeft(currPage) {
    return `
          <button data-goto='${
            currPage - 1
          }' class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${currPage - 1}</span>
          </button>
        `;
  }
  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // this.generateMarkupNumPages(numPages);
    // Page 1 and there are others pages
    if (currPage === 1 && numPages > 1) {
      return this._generateMarkupRight(currPage);
    }
    // Last page
    if (currPage === numPages && numPages > 1) {
      return this._generateMarkupLeft(currPage);
    }
    // Other page
    if (currPage < numPages) {
      return this._generateMarkupLeft(currPage).concat(
        this._generateMarkupRight(currPage)
      );
    }
    // Page 1 and there are no others pages
    return ``;
  }
}
export default new paginationView();
