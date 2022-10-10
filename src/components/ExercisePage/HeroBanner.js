import React,{ useState, useEffect } from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'

import { CssBaseline } from '@material-ui/core';

const HeroBanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ 'Sweat”', 'Blood”', 'Vomit”' ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Box className='App' sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px" backgroundIm>
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Tam Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" >
    “You shall gain, but you shall pay with <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Sweat"", "Blood"", "Vomit"" ]'><span className="wrap">{text}</span></span>  <br />
    Pavel Tsatsouline
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    {/* <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.8', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography> */}
    
    </Box>
  )
}

export default HeroBanner