import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './mediaCard.css'

export default function MediaCard() {
  return (
    <Card sx={{ width: 500 }}
         // className='Card'
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="500"
        image="https://i3-img.p7s1.io/pis/ezone/3611qgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXar255psZunNxEf6nIbS_ptHLX5IFtTKiVdkmIxzXpYobtJ3eJld165bbijFhNAAo-RDH6HoP8Mp5JRSzf_u9EaPTaJf9Bktoo0bTfrGSk5XChRBHLe2HH3ylpGth5KVUVM5R1C5xPizpBGWObnpRH4yvN9EqFecdG-nnqY6KO-0zp9HW9UxIbYcDv7dOpU8J_SeacvT2gMgPnA65mUOCDj62OM2dQ2WxWhLb5vXPJK9KHBAyJFM8tglBwPOVDoA-ofzi0ZhZwv0t4iYgDkVenSaerhOa8Kz73wquX0tNqMiDw/profile:mag-996x562"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Simon
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
