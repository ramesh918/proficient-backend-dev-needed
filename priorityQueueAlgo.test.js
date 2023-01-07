const {priorityAlgo} = require("./priorityQueueAlgo")


/**
 *  1. input is array strings
 *  2. give output as array
 */
describe("Checking the function of priority Queue", ()=>{
  
    test("Sending the Input, Check the Occurances", ()=>{
        const inputArray = ["ramesh", "ramesh", "ramesh", "mahesh"]
        const result = priorityAlgo(inputArray)
        const object = result[0]
        expect(object.ramesh).toEqual(3)
    })
      

})