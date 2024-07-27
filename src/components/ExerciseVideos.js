import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos = [], name }) => {
  // Check if exerciseVideos is empty or not an array
  if (!Array.isArray(exerciseVideos) || exerciseVideos.length === 0) {
    return <Loader />;
  }

  // Slice the exerciseVideos array into chunks of 3 videos per row
  const videosInRows = [];
  for (let i = 0; i < exerciseVideos.length; i += 3) {
    videosInRows.push(exerciseVideos.slice(i, i + 3));
  }

  return (
    <Box sx={{ marginTop: { lg: '150px', xs: '20px' }, p: '20px', textAlign: 'center' }}>
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '30px' }, fontFamily: 'Roboto, sans-serif' }}
        fontWeight={700}
        color="#3A1212"
        mb="40px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      {videosInRows.map((row, rowIndex) => (
        <Stack
          key={rowIndex}
          sx={{
            flexDirection: { lg: 'row', xs: 'column' },
            gap: { lg: '30px', xs: '20px' },
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px', // Add some margin between rows
          }}
        >
          {row.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { lg: '400px', xs: '90%' },
                textDecoration: 'none',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                ':hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                },
                backgroundColor: '#fff',
              }}
            >
              <a
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <img
                  style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', width: '100%', height: 'auto' }}
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box sx={{ padding: '20px', backgroundColor: '#fafafa' }}>
                  <Typography
                    sx={{ fontSize: { lg: '24px', xs: '20px' }, fontFamily: 'Arial, sans-serif' }}
                    fontWeight={600}
                    color="#3A1212"
                    mb="8px"
                  >
                    {item.video.title}
                  </Typography>
                  <Typography fontSize="16px" fontFamily="Arial, sans-serif" color="#757575">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            </Box>
          ))}
        </Stack>
      ))}
    </Box>
  );
};

export default ExerciseVideos;
