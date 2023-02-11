import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {  demoVideoUrl, demoVideoTitle, 
demoChannelUrl, demoChannelTitle } from '../utils/constants';

//demoThumbnailUrl,

const VideoCard = ( { video : { id : {videoId}, snippet } } ) => {
  return (
    <Card sx={{ width : { xs : '100%', sm : '358px', md : '320px' }, borderRadius : '5px',
      boxShadow: '0 0 0 1px #666'}}>
      <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
          <CardMedia
            image = {snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: {
              xs : '100%', sm : '358px', md: '320px'
            }, height: 180 }}
          /> 
      </Link>
      <CardContent sx={ { background : 'rgb(48,40,40)', height : '106px' } }>
        <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
            <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
              { snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}...
            </Typography>
        </Link>

        <Link to={ snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl }>
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
              { snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{color : 'gray', fontSize : 12, ml : '5px'}} />
            </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard