export default class ApiService {
  constructor() {
    this.query = '';
    this.page = 1;
    this.totalFound = 0;
    this.key = '22940858-92f18eb28c187ec286dac5649';
  }
  fetchCards() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`;
    return fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          new Error(`No data for the query'${this.query}'`),
        );
      })
  }

  reset() {
    this.page = 1;
    this.totalFound = 0;
  }
  set request(newRequest) {
    this.query = newRequest;
  }
}
