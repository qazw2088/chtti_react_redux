import React from "react"; // 引入React庫

function Conunter5() { // 定義Conunter5組件
    // 定義一個求兩數之和的函數
    const twoSum = (arr, target) => {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; i < arr.length; j++) { // 這裡應該是j < arr.length
                if (arr[i] + arr[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    };

    const arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 定義一個數組
    const target = 5; // 定義目標值
    console.log(twoSum(arr, target)); // 輸出兩數之和等於目標值的數組下標
  return <div>Conunter5</div>; // 返回一個div元素
}

export default Conunter5; // 導出Conunter5組件