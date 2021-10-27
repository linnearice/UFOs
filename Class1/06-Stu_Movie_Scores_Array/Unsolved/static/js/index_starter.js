// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

var goodMovieScores = goodMovieScores.filter((number) => number > 7);
var okMoviesScores = okMovieScores.filter((number) => number >=5 && number <=7); 
var badMovieScores = badMovieScores.filter((number) => number < 5);

// Calculate average movie score
function calculateAverage(array) {
  var total = 0;
  var count = 0;

  array.forEach(function(item, index) {
      total += item;
      count++;
  });

  return total / count;
}
console.log(calculateAverage(movieScores));
