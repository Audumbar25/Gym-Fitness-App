import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <Stack
      gap="30px"
      sx={{
        flexDirection: { lg: 'row', xs: 'column' },
        p: { lg: '20px', xs: '10px' },
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: '100vw',
        margin: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Box
        component="img"
        src={gifUrl}
        alt={name}
        loading="lazy"
        sx={{
          width: { lg: '40%', xs: '80%' }, // Reduced the width of the image
          borderRadius: '20px',
          boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Stack
        sx={{
          gap: { lg: '20px', xs: '10px' },
          textAlign: { lg: 'left', xs: 'center' },
          maxWidth: { lg: '60%', xs: '100%' },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2196F3' }}>
          {name}
        </Typography>
        <Typography variant="body1">
          Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        <Stack direction="row" gap="12px" alignItems="center">
          <Button sx={{ background: '#E1F5FE', borderRadius: '50%', width: '60px', height: '60px' }}>
            <img src={BodyPartImage} alt="body part" style={{ width: '30px', height: '30px' }} />
          </Button>
          <Typography textTransform="capitalize" variant="h6">{bodyPart}</Typography>
        </Stack>
        <Stack direction="row" gap="12px" alignItems="center">
          <Button sx={{ background: '#E1F5FE', borderRadius: '50%', width: '60px', height: '60px' }}>
            <img src={TargetImage} alt="target" style={{ width: '30px', height: '30px' }} />
          </Button>
          <Typography textTransform="capitalize" variant="h6">{target}</Typography>
        </Stack>
        <Stack direction="row" gap="12px" alignItems="center">
          <Button sx={{ background: '#E1F5FE', borderRadius: '50%', width: '60px', height: '60px' }}>
            <img src={EquipmentImage} alt="equipment" style={{ width: '30px', height: '30px' }} />
          </Button>
          <Typography textTransform="capitalize" variant="h6">{equipment}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;
