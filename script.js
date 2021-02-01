const romanNums = {
    "M" :1000,
    "CM":900,
    "D" :500,
    "CD":400,
    "C" :100,
    "XC":90,
    "L" :50,
    "XL":40,
    "X" :10,
    "IX":9,
    "V" :5,
    "IV":4,
    "I" :1,
};

const RomanNumerals = {
    fromRoman(str){
        let regExp = new RegExp(Object.keys(romanNums).join('|'),'gi');
        str = str.match(regExp);
        return str.reduce((a,b) => {
            return a + romanNums[b];
        }, 0);
    },
    toRoman(num){
        let str = '';
        Object.entries(romanNums).forEach(current => {
            while(num >= current[1]){
                num -= current[1];
                str += current[0];
            }
        });
        return str;
    }
}

const form  = document.querySelector('.form');
const input = form.querySelector('input');
const result = form.querySelector('.rom_number');
const reg = new RegExp(Object.keys(romanNums).join('|'), 'gi');
form.onsubmit = function (e){
    e.preventDefault();

    if (reg.test(input.value)){
        result.innerHTML = RomanNumerals.fromRoman(input.value);
    } else if (/[0-9]+/.test(input.value)) {
        if (input.value < 4000){
            result.innerHTML = RomanNumerals.toRoman(input.value * 1);
        } else {
            alert("интервал от 0 до 3999")
        }
    }
}
