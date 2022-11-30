import React from 'react'
import background from '../images/first.jpg'
import Weather from './Weather.js'
import Quotes from './Quotes.js'
import Chatbox from './Chatbox.js'
import Map from './Map.js'







function Home(){


return(
<div>
<h2>BOUTIQUE APARTMENT </h2>

<hr/>

<div  className='backGround--home'  style={{ backgroundImage: `url(${background})`, backgroundSize:"auto" }}>

  
</div>
<br/>
<p   className='backGround--home--content'> Al confine con Bergamo e l'inizio della Valle Brembana il nostro appartamento e pronto ad accogliervi con tutti i comfort deisderabili.
  Perfetto per una famiglia con 1-2 bambini (o giovane coppia ) che vuole fare escursioni giornaliere tra le valli Bergamasche oppure gite fuori porta giornaliere in citta o laghi limitrofi: Como 40min, Milano 40min, Lago di Como 1hr, Verona 1hr20 </p>

<hr/>


<div>
  




</div>

<div className='lower--body--home'>
  
  <br/>
  <Weather/>
  <Map/>
  <br/>
  
  </div>


<div>
  <hr/>
<br/>
<Quotes />


</div>
<br/>
<Chatbox/>



</div>



)


}

export default Home