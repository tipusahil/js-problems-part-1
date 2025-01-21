// ekta array te eki number ekadikbar thakle just ekta kore rakte hobe, jodi eki number onkbaro thake bad pore jabe,ortat eki rkm data shudo 1ta thakte parbe.

function noDuplicate(arrayN) {
    console.log(arrayN)

    // unique array jekane shudo duplicate number er shudo ekta kore push hbe.eki rkm thakle seta push hbena.

    let unique_numbers_arr = [];

    for (const num of arrayN) {
        if (unique_numbers_arr.includes(num) === false){
            // ........false.................=== false.. hoi thle code block e dukbe.
            // ........true.................=== false..match na hole dukbena.

            unique_numbers_arr.push(num);
// unique array te jodi  arrayN theke newa data/num ta na thake taile false dibe. & seta if er (===false) ei false er ste match kabe. tkn ortat oi name/num unique array te kuno data/num nei tai oi num ta unique array te push kora jabe.jodi unique array num er data ta thake tkn code block e dukbena ,push o korbena.

        }
    }
    return unique_numbers_arr;
}

let duplicate_numbers_arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let duplicate_names_arr = ['tipu','sahil','saho','tipu','sahil','saho'];

let unique_numbers_arr = noDuplicate(duplicate_numbers_arr);
let unique_names_arr = noDuplicate(duplicate_names_arr);

console.log('ei array te kuno duplicate numbers/value pawa jabena = ', unique_numbers_arr);

console.log('ei array te kuno duplicate numbers/value pawa jabena = ', unique_names_arr);
// node no_duplicate_num.js
