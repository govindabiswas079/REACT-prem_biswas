import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkIcon from '@mui/icons-material/Link';

import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

const SpeedDialTooltipLeftOpen = ({ value }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const FacebookUrl = () => {
    window.open('https://www.facebook.com/govinda.biswas.980');
    setOpen(false);
  }
  const InstagramUrl = () => {
    window.open('https://www.instagram.com/prembiswas_07/');
    setOpen(false);
  }
  const TelegramUrl = () => {
    window.open('https://twitter.com/@Govinda_079');
    setOpen(false);
  }
  const LinkedInUrl = () => {
    window.open('https://www.linkedin.com/in/govinda-biswas-82b94a1b7');
    setOpen(false);
  }
  const GitHubUrl = () => {
    window.open('https://github.com/prem-pb');
    setOpen(false);
  }

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} />
      {value?.Social_Button || value?.Public_GitHub ?
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: 'absolute', bottom: 16, left: 16 }}
          icon={<LinkIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {value?.Social_Button ?
            <SpeedDialAction sx={{ '&:hover': { backgroundColor: '#38529a' }, backgroundColor: '#38529a' }} icon={<Facebook sx={{ color: '#FFFFFF' }} />} tooltipTitle='Facebook' onClick={() => FacebookUrl()} /> : null}
          {value?.Social_Button ?
            <SpeedDialAction sx={{ '&:hover': { backgroundImage: 'linear-gradient(to right, #f7cb02 , #de1537, #7f3bb2)' }, backgroundImage: 'linear-gradient(to right, #f7cb02 , #de1537, #7f3bb2)' }} icon={<Instagram sx={{ color: '#FFFFFF' }} />} tooltipTitle='Instagram' onClick={() => InstagramUrl()} /> : null}
          {value?.Social_Button ?
            <SpeedDialAction sx={{ '&:hover': { backgroundColor: '#1bb1e4' }, backgroundColor: '#1bb1e4' }} icon={<Twitter sx={{ color: '#FFFFFF' }} />} tooltipTitle='Twitter' onClick={() => TelegramUrl()} /> : null}
          {value?.Social_Button ?
            <SpeedDialAction sx={{ '&:hover': { backgroundColor: '#007ab5' }, backgroundColor: '#007ab5' }} icon={<LinkedIn sx={{ color: '#FFFFFF' }} />} tooltipTitle='LinkedIn' onClick={() => LinkedInUrl()} /> : null}
          {value?.Public_GitHub ?
            <SpeedDialAction sx={{ '&:hover': { backgroundColor: '#000000' }, backgroundColor: '#000000' }} icon={<GitHub sx={{ color: '#FFFFFF' }} />} tooltipTitle='GitHub' onClick={() => GitHubUrl()} /> : null}
        </SpeedDial> : null}
    </Box>
  )
}

export default SpeedDialTooltipLeftOpen