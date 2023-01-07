# proficient-backend-dev-needed
1. take the url as query parameter of the API
2. using the axios get the html content of the API
3. now find the most commonly used 100 letters from it

#### npm Packages Used
1. express for creating the server and API
2. axios for getting the html content
3. striptags to remove the html tages and get the words
4. nodemon as dev dendependency

## Algorithm
1. used the object (or you can use hasmap also)
2. loop through the words to find the occurances
3. make the object of object as array objects
4. priorities the array with value
5. finally return first 100 common words

### commands Used
 1. npm init --yes
 2. npm i express axois jest striptags --save
 3. nodmon app.js
 4. node app.js

# Output Success Case
1. Endpoint : http://localhost:8080/parseHtml?url=https://www.npmjs.com/package/axios
2. Here see, url is giving as query parameter, and provideded url is  "https://www.npmjs.com/package/axios"
3. output is as below 
 <img width="960" alt="image" src="https://user-images.githubusercontent.com/92211837/211148269-a447dba8-b707-47b7-a4d1-7b97b68054d7.png">
 
 
# Output failure Case
1. Endpoint : http://localhost:8080/parseHtml?url=ramesh
2. Here see, url is giving as query parameter, and provideded url is  "reamesh"
3. output is as below 
<img width="538" alt="image" src="https://user-images.githubusercontent.com/92211837/211148484-64890b4b-d534-4f45-afb8-0012ae353335.png">

#### Unit Test Case Result
<img width="481" alt="image" src="https://user-images.githubusercontent.com/92211837/211149563-29c0e5a9-95ab-4d0f-8905-8f2d326fac20.png">

