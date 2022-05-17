const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

const countUniqueValues = (arr) => {

    let i = 0;
    let j = 1;

    while (j < arr.length - 1) {
        if (arr[i] === arr[j]) {
            arr.splice(j,1);
        } else if (arr[i] !== arr[j]) {
            i++;
            j++;
        }
    }
    return arr.length;

}