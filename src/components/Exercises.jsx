import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const paginate = (e, val) => {
    setCurrentPage(val)

    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

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
          <ExerciseCard 
            key={i}
            exercise={exercise}
          />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination 
              color="standard"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={(e) => paginate(e, val)}
              size="large"
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises