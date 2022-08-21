import {getArea, getPerimeter} from "./Day1-ArithmeticOperators";

describe("Day1-ArithmeticOperators", () => {

    it("check if arithmetic getArea calculations are correct", () => {
        expect(getArea(2, 2)).toEqual(4)
    })

    it("check if arithmetic getPerimeters calculations are correct", () => {
        expect(getPerimeter(3, 4.5)).toEqual(4)
    })

})