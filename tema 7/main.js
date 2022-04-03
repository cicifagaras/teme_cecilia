console.log("main.js loaded....");

/**
 * Exercise 1
 * O functie "getDigits" care primeste un sir 
 * de caractere si returneaza cifrele din sirul respectiv
 */

function getDigits(string) {
    result = string.match(/\d+/g).toString();
    if (result.length > 1) {
        result = result.replace(/,/g, "");
    }
    return result;
}


/**
 * Exercise 2
 * O functie "getLetters" care primeste un sir 
 * de caractere si returneaza doar literele din sirul respectiv
 */

function getLetters(string) {
    result = string.match(/[a-zA-Z]/g).toString();
    if (result.length > 1) {
        result = result.replace(/,/g, "");
    }
    return result;
}


/**
 * Exercise 3
 * O functie "getFirst5Letters" care primeste un sir 
 * de caractere si returneaza primele 5 litere(daca exista)
 */

function getFirst5Letters(string) {
    string = getLetters(string);
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += string[i];
    }
    return result;
}


/**
 * Exercise 4
 * O functie "concatenate" care primeste o lista de siruri 
 * de caractere si returneaza sirurile concatenate
 */

function concatenate(array) {
    let result = array.toString();
    result = result.replace(/,/g, "");
    return result;
}


/**
 * Exercise 5
 * O functie "getAllDigits" care primeste o lista de siruri 
 * de caractere si returneaza cifrele din toate sirurile
 */

function getAllDigits(array) {
    let result = array.toString();
    return getDigits(result);
}


/**
 * Exercise 6
 * O functie "invertAllStrings" care primeste o lista de siruri 
 * de caractere si returneaza lista de siruri de caractere inversate
 */

function invertAllStrings(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let firstResult = "";
        let newArray = array[i].toString();

        for (let k = newArray.length - 1; k >= 0; k--) {
            firstResult += newArray[k];
        }
        result[i] = firstResult;
    }
    return result;
}


/**
 * Exercise 7
 * Calculeaza factorialul unui numar ("factorial")
 */

function factorial(number) {
    let array = [];
    let result = 1;
    array[0] = number;
    for (let i = 1; i < number; i++) {
        array[i] = number - i;
    }

    for (let k = 0; k < array.length; k++) {
        result *= array[k];
    }
    return result;
}


/**
 * Exersice 8
 * Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
 */

function cmmdc(a, b) {
    let commonDivisor = 0;
    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            commonDivisor = i;
        }
    }
    return commonDivisor;
}


/**
 * Exercise 9
 * Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")
 */

function cmmmc(a, b) {
    let divizorComun = cmmdc(a, b);
    let result = (a * b) / divizorComun;
    return result;
}


/**
 * Exercise 10
 * Returneaza un array care sa contina toti divizorii unui numar 
 * (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")
 */

function divizori(number) {
    let resultArray = [];

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            resultArray.push(i);
        }
    }
    return resultArray;
}


/**
 * Exercise 11
 * O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
 */

function palindrom(number) {
    let leng = number.toString().length;
    let stringNr = number.toString();
    if (leng === 2 && stringNr[0] !== stringNr[1]) {
        return false;
    } else {
        for (let i = 0; i < leng / 2; i++) {
            if (stringNr[i] !== stringNr[leng - 1 - i]) {
                return false;
            }
        }
    }
    return true;
}


/**
 * Exercise 12
 * O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")
 */

function sort(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultArray.push(array[i])
        }
    }
    return resultArray;
}


/**
 * Exercise 13
 * O functie care primeste ca parametru un array de numere. Aceasta sorteaza 
 * ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
 */

function sortAscDesc(array) {
    let finalArray = [];
    let parArray = [];
    let imparArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            parArray.push(array[i]);
        } else {
            imparArray.push(array[i]);
        }
    }

    parArray.sort(function (a, b) {
        return a - b;
    });
    imparArray.sort(function (a, b) {
        return b - a;
    });

    finalArray = parArray.concat(imparArray);
    return finalArray;
}


/**
 * Exercise 14
 * O functie care primeste 2 parametri(un array si un numar). 
 * Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
 */

function binarySearch(arr, nr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === nr) {
            return true;
        } else if (arr[middle] < nr) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return false
}


/**
 * Exercise 15
 * O functie care implementeaza binary search pentru a verifica daca un numar 
 * se regaseste intr-un array. Dupa ce se termina executia functiei trebuie 
 * sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")
 */

function countBinarySearch(arr, nr) {
    let start = 0;
    let end = arr.length - 1;
    let i = 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === nr) {
            return i;
        } else if (arr[middle] === arr[end] && arr[middle] !== nr) {
            return i;
        } else if (arr[middle] < nr) {
            start = middle + 1;
            i++;
        } else {
            end = middle - 1;
            i++;
        }
    }
    return i;
}