const priorityQueue = {}
const priorityAlgo = (array)=>{

   for(let word of array)
   {
      if(priorityQueue[word] === undefined)
      {
         priorityQueue[word] = 1
      }
      else
      {
        priorityQueue[word] += 1
      }
   }

   const arrayOfObj = Object.entries(priorityQueue).map((e) => ( { [e[0]]: e[1] } ));
   arrayOfObj.sort((a,b)=>{
       let obj1 = Object.values(a)
       let obj2 = Object.values(b)
       return obj2[0]-obj1[0]
   })
   return arrayOfObj.slice(0, 100)
}
module.exports = {
    priorityAlgo
}