import React,{useEffect,useState} from 'react';
import {Box,Stack,Button,TextField,Typography} from '@mui/material';

const SearchExercise = () => {
  const [search, setSearch] = useState('');
  const handleSearch =async () => {
    if (search) {
      
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography  color="#FF2625" fontWeight={700}sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
exercices you should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField sx={{ input:{ fontWeight:'700',border:'none',borderRadius:'40px'},width:{lg:'1000px', xs:'350px'}, backgroundColor:'rgba(255, 255, 255, .7)',borderRadius:'10px',}} height="76px" value={search} onChange={(e) =>setSearch(e.target.value.toLocaleLowerCase())} placeholder="Search Exercices" type="text"/>
        <Button className="search-btn" sx={{bgcolor:'#FF2625',color:'#fff',textTransform:'none',width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'},height:'56px',position:'absolute',right:'0'}} onClick={handleSearch}>
          search
        </Button>
      </Box>
      
    </Stack>
  )
}

export default SearchExercise