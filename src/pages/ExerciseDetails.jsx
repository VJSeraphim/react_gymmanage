import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
        
            const exerciseDetaildata = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetaildata)

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideoData)
        }

        fetchExercisesData()
    }, [id])
    
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises />
        </Box>
    )
}

export default ExerciseDetails