import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PhishingIcon from '@mui/icons-material/Phishing';
import NordicWalkingIcon from '@mui/icons-material/NordicWalking';

export default function Attractions() {
  return (
    <List sx={{ width: '100%', maxWidth: 360,  }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FastfoodIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ristorante Street-food Pizza 1km "  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DryCleaningIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lavanderia 150mt dal nostro appartamento Servizio lavasecco"  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FreeBreakfastIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Caffeteria-Bar 50mt dal nostro apartamento colazione-Sandwich-Aperitivo "  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DirectionsBikeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Rent Bike 50mt dal nostro apartamento Noleggio bicilette (Muscolari ed elettriche)"  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalGroceryStoreIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Supermarket 200mt dal nostro appartamento"  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <NordicWalkingIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="13 differenti passeggiate con diversi livelli di difficolta nei dintorni "  />
      </ListItem>
      <ListItem>
      <ListItemAvatar>
          <Avatar>
            <NewspaperIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Giornalaio 150mt dal nostro appartamento stampa email e copisteria "  />
      </ListItem>
      <ListItem>
      <ListItemAvatar>
          <Avatar>
            <PhishingIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Laghetto artificiale a 500mt dal nostro appartamento "  />
      </ListItem>
    </List>
  );
}


