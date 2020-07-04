/*
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict"; 
 
let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Скільки фільмів ви подивилися?","");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів ви подивилися?","");
    }

}

//start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
   






function rememberMyFilms(){
    
    for (let i = 0; i < 2; i++){
        const a = prompt("Один з послідніх переглянутих фільмів?",""),
              b = prompt("Його оцінка","");
    
              if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                        personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
    }

}

//rememberMyFilms();

function detectedPersonalLevel(){

    if (personalMovieDB.count < 10) {
                alert("Перегдянуто мало фільмів");
            }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                alert("Ви класний глядач");
            }else if (personalMovieDB.count >= 30) {
                alert("Ви кіноман");
            }else {
                alert("Помилка");
            }

}

//detectedPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++ ){
            
            personalMovieDB.genres[i-1] = prompt('Ваш улюблений жанр під номером ${i}');
    }
}

writeYourGenres();