import View from './Views.js';
import PreviewView from './previewView.js';

class ResultViews extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';

  _generateMarkup() {
    return this._data
      .map(result => PreviewView.render(result, false))
      .join(' ');
  }
}

export default new ResultViews();
