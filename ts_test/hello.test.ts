import {hi} from "./hello";

describe("general tests if tests pass the tests :)" , ()=>{
    test("general test", ()=>{
        expect(true).toBe(true)
    })

    test("simple test", ()=>{
        expect(hi).toContain("Hello Tests!")
    })


})

