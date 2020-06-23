"use strict"; 

const numberOfFilms = +prompt("Скільки фільмів ви подивилися?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt("Один з останніх вільмів",""),
      b = prompt("Яка його оцінка",""),
      c = prompt("Один з останніх вільмів",""),
      d = prompt("Яка його оцінка","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
