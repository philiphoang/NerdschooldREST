const TvShow = require('./TvShow');
const createId = require('./idUtil');


class TvShowService {
  constructor() {
    this.tvShows = [
      new TvShow(createId(), 'Mr.Robot', 'Drama'),
      new TvShow(createId(), 'Black Mirror', 'Drama'),
    ];
  }

  getAll() {
    return this.tvShows;
  }

  getById(id) {
    return this.tvShows.find(show => show.id == id);
  }

  createTvShow(name, genre) {
    const id = createId();
    const tvShow = new TvShow(id, name, genre)
    this.tvShows.push(tvShow);
    return tvShow;
  }

  deleteTvShow(id) {
    this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== id);
  }
}

module.exports = new TvShowService();
