import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Box
    sx={{
      backgroundColor: '#6A0DAD',  // Purple background
      padding: '12px 20px',  // Adjust padding as needed
      borderRadius: '12px',  // Increased border radius
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',  // Enhanced shadow
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
    }}
  >
    <Link to="/" style={{ textDecoration: 'none' }}>
      <img
        src={Logo}
        alt="logo"
        style={{
          width: '60px',  // Increased logo size
          height: '60px',
          margin: '0 20px',
          borderRadius: '50%',
          border: '2px solid #fff',  // Added white border around logo
        }}
      />
    </Link>
    <Stack direction="row" gap="40px" alignItems="center">
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold',  // Added bold font weight
          borderBottom: '3px solid #FF2625',
          padding: '8px 16px',
          borderRadius: '8px',  // Added border radius to links
          transition: 'all 0.3s ease',  // Smooth transition for all properties
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = '#FF2625';  // Red on hover
          e.currentTarget.style.backgroundColor = '#fff';  // White background on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = '#fff';  // Original color
          e.currentTarget.style.backgroundColor = 'transparent';  // Transparent background
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{
          textDecoration: 'none',
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold',  // Added bold font weight
          padding: '8px 16px',
          borderRadius: '8px',  // Added border radius to links
          transition: 'all 0.3s ease',  // Smooth transition for all properties
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = '#FF2625';  // Red on hover
          e.currentTarget.style.backgroundColor = '#fff';  // White background on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = '#fff';  // Original color
          e.currentTarget.style.backgroundColor = 'transparent';  // Transparent background
        }}
      >
        Exercises
      </a>
    </Stack>
  </Box>
);

export default Navbar;
