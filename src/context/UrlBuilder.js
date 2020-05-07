class UrlBuilder {
  API_ID = process.env.REACT_APP_API_ID;
  API_KEY = process.env.REACT_APP_API_KEY;
  RESULT_LIMIT = 10;
  searchQuery;
  filterQuery;
  bookmarkQuery;
  from;
  to;

  buildUrl(bookmark = false) {
    if (bookmark) {
      return `https://api.edamam.com/search?${this.bookmarkQuery}&app_id=${this.API_ID}&app_key=${this.API_KEY}`;
    }

    return `https://api.edamam.com/search?q=${this.searchQuery}&app_id=${this.API_ID}&app_key=${this.API_KEY}&from=${this.from}&to=${this.to}${this.filterQuery}`;
  }

  constructor() {
    this.searchQuery = "";
    this.filterQuery = "";
    this.from = 0;
    this.to = 10;
  }

  newSearch(searchQuery, filterQuery) {
    this.from = 0;
    this.to = 10;
    this.filterQuery = filterQuery;
    this.searchQuery = searchQuery;
    return this.buildUrl();
  }

  loadMore() {
    this.from += this.RESULT_LIMIT;
    this.to += this.RESULT_LIMIT;
    return this.buildUrl();
  }

  getBookmarked(objects) {
    this.bookmarkQuery = objects
      .map((object) => "r=" + object.recipeId)
      .join("&");
    return this.buildUrl(true);
  }
}

export default UrlBuilder;
