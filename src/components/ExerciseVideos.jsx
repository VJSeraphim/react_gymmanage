import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ name, exerciseVideos}) => {
  return (
    <Box sx={{
      marginTop: {
          lg: '200px', xs: '20px'
        }
      }}
      p="20px"
    >
      <Typography variant="h4" mb="33px">
        Watch <span style={{ color : '#ff2625', textTransform: "capitalize"}} >
          {name}
        </span>
        exercise Videos Here
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignITems="center"
        flexWrap="wrap"
        sx={{
          flexDirection: {lg: 'row'},
          gap: { lg: '110px', xs: '0'}
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, i) => (
          <a
            key={i}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            rel="noreferrer"
            target="blank"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos