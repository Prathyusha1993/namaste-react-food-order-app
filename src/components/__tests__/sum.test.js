import { sum } from "../Sum";

test("sum function should calculate the sum of two functions", () => {
    const result = sum(3,4);

    //assertion
    expect(result).toBe(7); 
});