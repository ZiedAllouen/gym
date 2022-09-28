import React from 'react'
import { Box,Stack,Typography } from '@mui/material'

const ExerciseVideos = ({exerciseVideos,name}) => {
  return (
    <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p="20px" >
      <Typography variant="h3" mb="33px" >
        Some <span style={{ textTransform: 'capitalize' ,color:'#ff3995'}} >{name} </span> exercise videos :
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{flexDirection:{lg:'row'},gap:{lg:'110px',xs:'0'}}} >

      </Stack>
    </Box>
  )
}

export default ExerciseVideos