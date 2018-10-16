const express = require('express');
const TvShow = require('./TvShow');
const tvShowService = require('./tvShowService');
const tvShowRouter = express.Router();
const tvShows = tvShowService.getAll();

tvShowRouter.get('/', (req, res) => {
  res.json(tvShows);
});

//Get by Id
tvShowRouter.route('/:tvShowId')
.get((req, res) => {
  const id = req.params.tvShowId;
  const tvShow = tvShowService.getById(id);
  console.log(tvShow);
  res.json(tvShow);
})
.delete((req, res) => { //Delete
  const id = req.params.tvShowId;
  tvShowService.deleteTvShow(id);
  res.send(tvShowService.getAll());
})
//Post
tvShowRouter.post('/', (req, res) => {
  const name = req.body.name;
  const genre = req.body.genre;
  const newTvShow = tvShowService.createTvShow(name, genre);
  console.log(newTvShow);
  res.send(newTvShow)
});

module.exports = tvShowRouter;
