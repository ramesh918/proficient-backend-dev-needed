const express = require("express")
const app = express()
const axios = require("axios")
const stripTags = require("striptags")
const {priorityAlgo} = require("./priorityQueueAlgo")
app.get("/parseHtml", async(req, res)=>{

    try{
          
        const {url} = req.query
        const htmlDataInUrl = await axios(url)
        const rawContent = stripTags(htmlDataInUrl.data)
        const afterRemovingNewLines = rawContent.split("\n").join(" ")
        const arrayOfWords = afterRemovingNewLines.split(" ")
        const removeWhitSpaces = arrayOfWords.filter((a)=> a !== "")
        const wordsAndNumberOfOccurances = priorityAlgo(removeWhitSpaces)
        res.send(wordsAndNumberOfOccurances).status(200)
    }
    catch(err){

        console.log(err)
        res.send({
            messgage: "unable to parse the page",
            error: err
        }).status(500)
    }

} )
app.listen(8080, ()=>{
    console.log("Server Listening on the Port: 8080")
})