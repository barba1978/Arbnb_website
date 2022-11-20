import React from 'react'
import Map from './Map.js'
import background from '../images/first.jpg'
import second from '../images/second.jpg'
import third from '../images/third.jpg'
import Weather from './Weather.js'
import Quotes from './Quotes.js'







function Home(){


return(
<div>
<h3>BOUTIQUE APARTMENT </h3>

<hr/>

<div  className='backGround--home'  style={{ backgroundImage: `url(${background})` }}>
<p   className='backGround--home--content'> Al confine con Bergamo e l'inizio della Valle Brembana il nostro appartamento e pronto ad accogliervi con tutti i comfort deisderabili.
  Perfetto per una famiglia con 1-2 bambini (o giovane coppia ) che vuole fare escursioni giornaliere tra le valli Bergamasche oppure gite fuori porta giornaliere in citta o laghi limitrofi: Como 40min, Milano 40min, Lago di Como 1hr, Verona 1hr20 </p>
  
</div>


<hr/>


<div>
  <br/>

  <Weather/>
  <br/>
  <hr/>



</div>

<Quotes />


</div>



)


}

export default Home