
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import First from '../images/first.jpg'
import Second from '../images/second.jpg'
import Third from '../images/third.jpg'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
import BathroomIcon from '@mui/icons-material/Bathroom';
import AirIcon from '@mui/icons-material/Air';
import HouseIcon from '@mui/icons-material/House';
import DeckIcon from '@mui/icons-material/Deck';





function About(){
return(
    <div>
        
        <h3>BOUTIQUE APARTMENT </h3>
        <p> We are Andrea and Maa'ayan an Italian / Israeli couple who have decided to transform our beloved Italian apartment into a B & b. Hosting people from all over the world, trying to make them feel better than at home.
Our apartment is equipped with all comforts:</p>
<ul className='list_item_about_page'>
  <li><AcUnitIcon/> Air conditioning</li>
  <li><LocalParkingIcon/> Private parking</li>
  <li><ConnectedTvIcon/> Smart Tv 50inches</li>
  <li><NetworkWifiIcon/> Wi-fi</li>
  <li><KitchenIcon/> Fridge</li>
  <li><LocalLaundryServiceIcon/> Dishwasher</li>
  <li><SurroundSoundIcon/> Whole house Audio System</li>
  <li><BathroomIcon/> Shower Hydrotherapy</li>
  <li><AirIcon/> Air authomatic recirculation </li>
  <li><HouseIcon/> Underfloor heating</li>
  <li><DeckIcon/> Modern automatic Patio</li>
</ul> 

<hr/>

<Carousel fade>
      <Carousel.Item>
        <img
          
          className="d-block w-100"
          src= {First}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {Second}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {Third}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
   



</div>


)


}

export default About