import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box
      id="exercises"
      sx={{mt: {lg: '110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography>
        Results
      </Typography>
      <Stack direction="row" sx={{ gap: {lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
        {exercises.map((exercise, i) => (
          <p>
            exercise.name
          </p>
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises