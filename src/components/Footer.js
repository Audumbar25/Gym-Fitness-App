import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#F2F2F2" py="40px" color="#333">
    <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
      <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
      <Typography variant="body1" sx={{ fontSize: '16px', textAlign: 'center' }}>
        Crafted with passion by <b>Audumbar Tanangi</b>
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '14px', textAlign: 'center' }}>
        Connect with us on social media for more updates!
      </Typography>
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
        <IconButton sx={{ color: '#3b5998' }} href="#">
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: '#00acee' }} href="#">
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: '#c32aa3' }} href="#">
          <Instagram />
        </IconButton>
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
