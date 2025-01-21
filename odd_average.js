


function oddaver_sum(numbers){

    let odds = [ ];

    for(const number of numbers){
        if( number % 2 === 1){
          odds.push(number);  
        }
    }
// odds er bejor sonkar array er jogfol nirnoi:
    let sum = 0;
  let leng= odds.length;

    for (const odd of odds){
        sum = sum+odd;
        }
      
  let avrg = sum/odds.length ;

  return avrg;

}

let array1 = [2,3,2,34,4,3,3,8,10,443,6];

let avrg = oddaver_sum(array1);
console.log('array1 er odd sonkar avareage holo = ', avrg);


// node odd_average.js