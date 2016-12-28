'use strict';

function initPath(obj, keys, value, prevKey) {
    if (keys.length === 1) {
        obj[keys[0]] = value;
    } else {
        let currentKey = keys.shift();

        if (typeof currentKey === 'string') {


            if (typeof keys[0] === 'number') {
                let arrayIndx = keys.shift();

                if (typeof obj[currentKey] === 'undefined') {
                    obj[currentKey] = new Array(arrayIndx + 1).fill(1).map((res) => {return new Object()});
                }
                // push more objects into the array if array index is higher
                else if (obj[currentKey].length < (arrayIndx + 1)) {
                    let lenToAdd = arrayIndx - obj[currentKey].length + 1;

                    for (let i = 0; i < lenToAdd; i++) {
                        obj[currentKey].push(new Object());
                    }
                }

                obj[currentKey][arrayIndx] = initPath(obj[currentKey][arrayIndx], keys, value, currentKey);
            } else {
                obj[currentKey] = initPath(typeof obj[currentKey] === 'undefined' ? {} : obj[currentKey], keys, value, currentKey);
            }
        }

    }

    return obj;
}

let test = initPath({}, ['key1', 3, 'key2'], 5);
let test2 = initPath(test, ['key1', 1, 'key2'], 4);
// console.log(JSON.stringify(test2, null, 2));

let test3 = initPath(test2, ['key1', 0, 'key2'], 1);
console.log(JSON.stringify(test3, null, 2));
console.log(test3.key1);





