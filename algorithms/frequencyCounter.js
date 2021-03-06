// Initial attempt

const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr[i] ** 2)
        if (index === -1) {
            return false;
        }
        arr2.splice(index,1);
    }
    return true;
}

// Updated attempt

const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let counter1 = {};
    let counter2 = {};

    for(let val of arr1){
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for(let val of arr2){
        counter2[val] = (counter2[val] || 0) + 1;
    }
    for(let key in counter1){
        if(!(key ** 2 in counter2)) {
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]) {
            return false;
        }
    }
    return true;
}

// Anagram

const anagram = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let counter1 = {};
    let counter2 = {};

    for(let val of arr1){
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for(let val of arr2){
        counter2[val] = (counter2[val] || 0) + 1;
    }
    for(let key in counter1){
        if(counter1[key] !== counter2[key]) {
            return false;
        }
    }
    return true;
}