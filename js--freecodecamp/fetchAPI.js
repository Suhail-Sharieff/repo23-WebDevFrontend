//fetch API is used to fetch resouces .it uses request and response object. the fetch() is used to fetch data.API:apllication programming interface.
//syntax:
/*
let promise =fetch(url,[options])

*/



//ex:
// ..lets fetch the api function which retr=urns us some jokes:

/*
Get random jokes. You can also get jokes according to type (e.g., programming jokes only).

Sample API URL:

https://official-joke-api.appspot.com/random_joke
*/


//first store the url from which u need to fetch in sokme constant
const url="https://official-joke-api.appspot.com/random_joke"
//now lets fetch using async await since it returns a promise:,we need the task only to complete after this promise is resolved,ie joke is received:
const getJokeFetch=async()=>{
    console.log("getting jokes raw form...");
    let response1=await fetch(url)
    console.log(response1.text);
    
}
//getJokeFetch()//returns in JSON format




//some imp terms:]


/*(1)AJAX:asynchronous js and xml
//before and all the data returned was in the format of xml 


(2)JSON:js object notation
//here the response so returned is in the form of object rather than xml
json() is used to convert the promise returned by fetch into object

*/

//fetch():returns raw promise ie entire object
//json():returns only usable object data

const getJokeJson=async ()=>{
    console.log("getting jokes raw form...");
    let response2=await fetch(url)
    console.log(response2);
    let usefulData=response2.json()
    console.log("useful data:");
    console.log(usefulData);
}
getJokeJson()