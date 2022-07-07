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
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])

    const { id } = useParams()
    
    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
        
            const exerciseDetaildata = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetaildata)

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetaildata.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideoData.contents)
        
            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetaildata.target}`, exerciseOptions)
            setTargetMuscleExercises(targetMuscleExercisesData)
            
            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetaildata.equipment}`, exerciseOptions)
            setEquipmentExercises(equipmentExercisesData)
        }   

        fetchExercisesData()
    }, [id])
    
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
        </Box>
    )
}

export default ExerciseDetails