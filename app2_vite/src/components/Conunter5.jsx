import React from "react";

function Conunter5() {
    // Add a two sum function here
    const twoSum = (arr, target) => {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; i < arr.length; j++) {
                if (arr[i] + arr[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    };

    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const target = 5;
    console.log(twoSum(arr, target));
  return <div>Conunter5</div>;
}

export default Conunter5;
