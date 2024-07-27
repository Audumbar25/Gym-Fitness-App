import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';


import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '90px', xs: '25px' },
      mx: 'auto', // Center the Box horizontally
      p: '20px',
      backgroundColor: '#212121',  // Dark background color
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',  // Slightly stronger shadow
      borderRadius: '12px',  // Rounded corners
      textAlign: 'center',
      color: '#FFFFFF',  // White text color
      maxWidth: '1200px',  // Maximum width for the banner
    }}
  >
    <Typography color="#FFD600" fontWeight="600" fontSize="36px" mb="12px">
      Fitness Club
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '48px', xs: '40px' }, lineHeight: '1.2' }} mb="20px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="18px" fontFamily="Alegreya" lineHeight="30px" mb="30px">
      Discover the most effective exercises tailored for you
    </Typography>
    <Stack direction="row" justifyContent="center" spacing={2} mb="40px">
      <Button
        href="#exercises"
        variant="contained"
        sx={{
          backgroundColor: '#FFD600',  // Yellow button background
          color: '#212121',  // Dark text color
          borderRadius: '25px',
          padding: '14px 28px',
          fontSize: '18px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#FFEA00',  // Lighter yellow on hover
          },
        }}
      >
        Explore Exercises
      </Button>
    </Stack>
    <Typography fontWeight={600} color="#FFD600" sx={{ opacity: '0.1', fontSize: '160px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      Exercise
    </Typography>
    {/* Uncomment and replace with your actual image import */}
    {/* <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" /> */}
  </Box>
);

export default HeroBanner;
