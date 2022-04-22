// 2/24
// let admin;
// let name;
// name = 'john';
// admin = name

// alert (admin)

// function showMessage(from = 'defaultFirstFrom', text = 'defaultTextSecond'){
//     from = 'leading' + from + 'trailing'
//     alert(from + ': ' + text )
// }

// let from = prompt('What is your first name?', 'enternow')
// let text = prompt('lastnameis?', 'enteragain')

// showMessage(from, text)

// showMessage(admin, name)

// showMessage('doesThisDefineFrom', 'iBetThisDefinesText');
// showMessage('feeling', 'awesome')
// showMessage()
// showMessage('alice')

// 2/26

// Make a counter that prints what turn the carousel is on for ten turns. 
// let carousel = 1
// while (carousel <= 10){
//     console.log(`Carousel turn # ${carousel}`)
//     carousel++
// }

// now make it work with a user entry for the number of turns

// 



// document.querySelector('#check').addEventListener('click', checkNow)

// // function checkNow(){
// //     let userEntry = document.querySelector('#numberOfCarouselTurns').value
// // for (let i = userEntry; i <= (+userEntry + 9); i++) {
// //     if (i % 2 === 0) {
// //       console.log(`${i} is even`);
// //     }
// //     else if (i % 2 === 1){
// //         console.log(`${i} is odd`)
// //     }
// //   }
// // }

// document.querySelector('#check').addEventListener('click', checkFull)

// function checkFull(){
//     let userEntry = document.querySelector('#numberOfCarouselTurns').value
// for (let i = userEntry; i <= (+userEntry + 9); i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} is even`);
//     }
//     else if (i % 2 === 1){
//         console.log(`${i} is odd`)
//     }
//   }
// }

/*
function fizzBuzz(num){
  for(let i = 1; i <= num; i++){
    if (i % 15 === 0){
      console.log('buzz')
    } else if (i % 5 === 0) {console.log('fizz')
  } else if (i % 3 === 0) console.log('fizzbuzz')
  else console.log(i)}
}

fizzBuzz(10)
*/

// const fizzyPop = (num) => {console.log(for (let p = 1; p <= num; p++){return p})}

// fizzypop (10)

//enter how many rows you want in the triangle
//make a loop that prints # in numbers equal to the 

// eloquent Javascript CHapter 2 exercises
/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

/* my solution below: 3/17/2021

function makeTriangle(height){
  let width = ""
    for (let i=0; i<height; i++){
    console.log(width + "#" )
    width = width + "#"
   }
   

  }

makeTriangle(10)
*/

// do the fizbuzz (Spaced Repetition!!) 3/17/2021

// print all numbers from 1 to 100
// if the number is devisble by 3, pritn fizz
// if divisible by 5 print buzz
// if divisible by 3 and 5 print fizzbuzz

/*

function fizzBuzz(){
  for (let i=1; i<=100; i++){
    if (i % 3 == 0 && i % 5 == 0){
      console.log('fizzbuzz');
    }
    else if (i % 3 == 0){
      console.log('fizz')
    }else if (i % 5 == 0) {
      console.log('buzz')
     }else{console.log(i)}
     
  }
}

fizzBuzz()

*/

// ChessBoard

/*

function makeChessBoard (height, width){
  //iterate the below pattern height times
  let chessBoard = ""
  for (let i=0; i<height; i++){ 
    let chessRow = ""
    if (i % 2 == 0){
      for (let i = 0; i < width; i++){
          chessRow = chessRow + "#_"
      }
        
    }else{
//creates the #_#_ pattern with param width
      for (let i = 0; i < width; i++){
          chessRow = chessRow + "_#"
      
      }
    }
    chessRow = chessRow + "\n"
    chessBoard = chessBoard + chessRow
  }
  console.log(chessBoard);
}

makeChessBoard(7, 3)

*/

// const example = fucntion (){

// }

// const example = x => console.log(X)

let pokemon = ['bulbasaur', 'squirtle', 'charmander']

pokemon.forEach( function(){console.log(x)})
pokemon.forEach( (x,i,a)=>console.log(a) )

let nums = [10, 20, 30]