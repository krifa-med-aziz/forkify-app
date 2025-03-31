import View from './Views.js';
import PreviewView from './previewView.js';

class ResultViews extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';

  generateMarkupNumPages() {
    const markup = `
          <div class="page_number ">
            <span>6 Pages</span>
          </div>`;
    this._parentElement.appendChild(markup);
  }
  _generateMarkup() {
    return this._data
      .map(result => PreviewView.render(result, false))
      .join(' ');
  }
}

export default new ResultViews();
