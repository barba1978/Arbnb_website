import React, { useEffect,useState } from 'react'
import axios from "axios";


function Quotes(){

    const[quotes,setQuotes]=useState("")

useEffect(()=>{
   

const options = {
  method: 'POST',
  url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '0223492b7fmshbf03ba85a64606fp1911cajsned36af3d2a40',
    'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
  },
  data: '{"key1":"value","key2":"value"}'
};

axios.request(options)
.then(function (response) {
    setQuotes(response.data)
	console.log(response.data);
})
.catch(function (error) {
	console.error(error);
});
},[])

    return(
<>
<h3>Motivational quotes:</h3>

{typeof quotes != "undefined" ?
<div>
<p>{quotes}</p>
</div>  :("")}
</>    )
}


export default Quotes