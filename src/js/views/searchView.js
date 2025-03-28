class SearchView {
  _parentelement = document.querySelector('.search');

  getQuery() {
    const query = this._parentelement.querySelector('.search__field').value;
    console.log(query);
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentelement.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentelement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
