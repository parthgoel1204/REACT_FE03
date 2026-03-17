import { sum } from "../src/components/sum";

test("Sum function should calculate the sum of 2 numbers",()=> {
    const result = sum(3,4);
    // ASSERTION
    expect(result).toBe(7); 
})