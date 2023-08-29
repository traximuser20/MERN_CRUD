import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

const CardSkeleton = () => {
  return (
    <div>
        <Card variant="outlined" sx={{ width: 343, display: 'flex', gap: 2, mt: 2 }}>
      <AspectRatio ratio="21/9">
        <Skeleton variant="overlay">
          <img
            alt=""
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          />
        </Skeleton>
      </AspectRatio>
      <Typography>
        <Skeleton>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries.
        </Skeleton>
      </Typography>
    </Card>
    </div>
  )
}

export default CardSkeleton