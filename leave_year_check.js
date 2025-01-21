
// 1.jei sonka gulo 100 diye bak korar pore baksesh 0 er soman hoina & 4 diye bak korar pore baksesh 0 er soman hoye jai, segulo leap year
// 2.jei sonka gulo 100 diye bak korar pore baksesh 0 er soman hoi,& 400 diye bak korar porew porew baksesh 0 er soman hoi segulaw leap year..

// 1,2 number codition er kuno ektaw jodi true hoi thle seta leap year, othewise seta leapyear na.

function leapYear(year){
    if(year % 100 !== 0  && year % 4===0){
        return true;
    }
    else if(year % 100 ===0 && year % 400 === 0 ){
        return true;
    }
    else false;
}

 let year1= leapYear(1900);
 let year2= leapYear(2000);
 let year3= leapYear(2400);
 let year4= leapYear(5052);
 console.log(year1,year2,year3,year4);//evabe multiple variable eksate console kora jai.

