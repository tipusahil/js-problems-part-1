/***
 * Remove duplicate items from an array
 */


// ekta array te eki data ekadikbar thakle just ekta kore rakte hobe, jodi eki data onkbaro thake bad pore jabe,ortat eki rkm data shudo 1ta thakte parbe.
function noDuplicate(array1){
console.log(array1)
    let arr_withoutDuplicate = [];
  
    for( const item of array1){
        if(arr_withoutDuplicate.includes(item) === false ){
// jodi arr_withoutDuplicate ei array te jodi array1 theke ekta ekta kore item hisebe newa data ta thake taile true dekabe. tkn ====false er sate match hobena tkn if er code block e ar dukbena, ar jodi includes hisebe jodi na thake taile false dekabe. ar false hole seta if er ===false ei condition er sat match hoye jabe. tkn if er code block er vitore duke arr_withoutDuplicate ei array te item er data ta push kroe dibe. evabei muloto duplicate gulo bad diye unique gulo push kora hoi.then then array ta return kore dewa hoi function er baire,jekane theke call kora hoyece okane return kroe dewa hoi.

            arr_withoutDuplicate.push(item);
        }
    }
    return arr_withoutDuplicate;
}

let arr_inDuplicate = ['GABLU','pablu','tablu','ABULO','minto','pablu','tablu','ABULO'];

let arr_withoutDuplicate = noDuplicate(arr_inDuplicate);//return pabe j value te duplicate kuno item thakbena, tai without variable name dewa hoyece.

console.log('ei array te kuno duplicate name/item nai =  ',arr_withoutDuplicate);