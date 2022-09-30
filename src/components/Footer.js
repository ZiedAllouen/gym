import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import lg from '../assets/lg.png'

const Footer = () => (
  <Box mt="80px" bgcolor="#ff52">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={lg} alt="logo" style={{ width: '200px', height: '100px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Zied Allouen</Typography>
  </Box>
);

export default Footer; 