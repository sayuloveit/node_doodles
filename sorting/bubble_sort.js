/**
 * Created by vic on 12/27/16.
 */

function bubbleSort(numArray) {
    "use strict";

    const arrayLength = numArray.length;
    let unsorted;

    do {

        unsorted = false;
        for (let i = 0; i < arrayLength; i++) {
           if (numArray[i] > numArray[i + 1]) {
               let tmp = numArray[i];
               numArray[i] = numArray[i + 1];
               numArray[i + 1] = tmp;
               unsorted = true;
           }
        }
        console.log(numArray);

    } while(unsorted);

}

bubbleSort([3,10,6,7,2,8,9,5,1]);