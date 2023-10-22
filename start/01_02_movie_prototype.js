// Write your code here
function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function () {
  return (
    this.title +
    ", a " +
    this.genre +
    " film directed by " +
    this.director +
    " was released in " +
    this.releaseYear +
    ". It received a rating of " +
    this.rating +
    "."
  );
};

const theHangover = new Movie(
  "The Hangover",
  "Todd Phillips",
  "Comedy",
  2009,
  85
);
const backToTheFuture = new Movie(
  "Back to the Future",
  "Robert Zemeckis",
  "Science Fiction",
  1985,
  95
);
const dbzBoG = new Movie(
  "Dragon Ball Z: Battle of Gods",
  "Masahiro Hosoda",
  "Action Comedy",
  2013,
  90
);

console.log(theHangover.getOverview());
console.log(backToTheFuture.getOverview());
console.log(dbzBoG.getOverview());
