console.log('its pizza time')

/*
Coding time!
Here are a few pieces of advice about these exercises:

Keep on choosing your variable names wisely, and respect indentation when creating code blocks associated to if, else and switch statements.

Try to find alternative solutions. For example, one using an if and another using a switch.

Test your programs thoroughly, without fear of finding mistakes. It's a very important skill.

Following day
Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
*/
let week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
function nextDay(day){
        day = day.toLowerCase().trim()
        if (day === 'saturday' ) { 
            return 'sunday' }
        else if(day === week[0]) {
            return week[1]
        
        }else if(day === week[1]) {
            return week[2]
        
        } else {
        return 'not a day of the week'
        }
    
    
}

console.log( nextDay('saturday') );
console.log( nextDay('sunday') );
console.log( nextDay('      monday'))

console.log( week[2] )

function nextDaySwitch(day){
    switch (day) {
        case 'tuesday':
         console.log('wednesday is here');
          
            break;
        case 'thursday':
            console.log('friday');
            break;
        default :
            console.log('not really a day says switch')
            break;
    }
}

console.log( `${nextDaySwitch('tuesday')} swtich says` )

/*

Number comparison
Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

*/

function compareNums(n1, n2){
    if ( n1 > n2){
        return `${n1} is bigger than ${n2}`
    } else if (n1 < n2){
        return `${n2} is bigger than ${n1}`
    } else if (n1 == n2){
        return `${n1} (n1) and ${n2} (n2) are equivalent`
    } else {
        return 'whatever yo'
    }
}

console.log( compareNums( 30, 40) )
console.log( compareNums( Math.random(), Math.random() ) )

/*

Final values
Take a look at the following program.
*/

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

/*

Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

Initial values	nb1 final value	nb2 final value	nb3 final value
nb1=nb2=nb3=4			// expected nb1 0, nb2 4, nb3 12
nb1=4,nb2=3,nb3=2		// expected	n1 4 n2 3 n3 2
nb1=2,nb2=4,nb3=0       // expected	n1 3 n2 4 n3 0
Check your predictions by executing the program.
 
Number of days in a month
Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

*/

function daysInAMonth(monthNum){
    if (monthNum == 9 || monthNum == 4 || monthNum == 6 || monthNum == 11){
        return `thirty days hath the ${monthNum}'th month`
    }else if ( monthNum == 2){
        return `what a short month!`
    }else{
        return 'thirty-one'
    }
}

console.log(daysInAMonth(2));
console.log(daysInAMonth(3));
console.log(daysInAMonth(4));
console.log(daysInAMonth(5));

/*


Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:
*/




function oneMoreSecond(h, m, s){
    
    let hr = h
    let mr = m
    let sr = s + 1
    
    if (sr > 59){
        sr = 0
        mr = mr + 1
    }
    if (mr > 59){
        mr = 0
        hr = h + 1
    }
    if (hr >= 24){
        hr = 0
        mr = 0
        sr = 0
    }
    let result = `${hr}hours, ${mr}minutes, and ${sr}seconds`
    console.log(result)

}

oneMoreSecond(14, 17, 54)
oneMoreSecond(6, 59, 59)
oneMoreSecond(6, 3, 59)
oneMoreSecond(23, 59, 59)
oneMoreSecond(0, 0, 59)



/*
//tests
14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (midnight)




*/
