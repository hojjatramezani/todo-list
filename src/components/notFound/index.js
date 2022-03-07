import React from 'react'
import { Box, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


function NotFound() {
  return (
    <Box display={'flex'} flexDirection="column" justifyContent={'center'} alignItems="center"> 
        <Box py={2} mb={1}>
            <SentimentVeryDissatisfiedIcon  sx={{fontSize: '100px'}}/>
        </Box>
        <Box>
            <Typography textAlign={'center'}> List is empty ... </Typography>
        </Box>
    </Box>
  )
}

export default NotFound