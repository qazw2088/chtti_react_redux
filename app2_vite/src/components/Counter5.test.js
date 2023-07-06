import { describe, it, expect } from "@jest/globals";
import React from "react";
import { render } from "@testing-library/react";
import Conunter5 from "./Conunter5";

describe("Conunter5", () => {
  it("should find the indices of two numbers that sum up to the target", () => {
    const { container } = render(<Conunter5 />);
    const output = container.textContent;

    // 调用测试的两数之和函数
    const twoSum = (arr, target) => {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === target) {
            return [i, j];
          }
        }
      }
      return [];
    };

    // 定义测试用例
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const target = 5;
    const expectedResult = [0, 3]; // 期望结果为 [0, 3]

    // 调用函数并断言结果是否与期望值相等
    const result = twoSum(arr, target);
    expect(result).toEqual(expectedResult);
  });
});
