import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RssFeedIcon from '@mui/icons-material/RssFeed';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const SpeedDialTooltipRightOpen = ({ value }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const CallUrl = () => {
    window.open('tel: 9511723507');
    setOpen(false);
  }
  const WhatsAppUrl = () => {
    window.open('https://wa.me/9511723507');
    setOpen(false);
  }
  const MailUrl = () => {
    window.open('mailto: govindbiswas079@gmail.com');//?subject=Support&body=Description
    setOpen(false);
  }

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} />
      {value?.Public_Email || value?.WhatsApp_Message || value?.Public_Calls ?
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<RssFeedIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {value?.Public_Calls ?
            <SpeedDialAction sx={{ '&:hover': { backgroundColor: '#1c8db7' }, backgroundColor: '#1c8db7' }} icon={<CallIcon style={{ color: '#FFFFFF' }} />} tooltipTitle='Call' onClick={() => CallUrl()} /> : null}
          {value?.WhatsApp_Message ?
            <SpeedDialAction sx={{ '&:hover': { backgroundColor: '#1ad03f' }, backgroundColor: '#1ad03f' }} icon={<WhatsAppIcon style={{ color: '#FFFFFF' }} />} tooltipTitle='WhatsApp' onClick={() => WhatsAppUrl()} /> : null}
          {value?.Public_Email ?
            <SpeedDialAction sx={{ '&:hover': { backgroundColor: '#f7560b' }, backgroundColor: '#f7560b' }} icon={<MailOutlineOutlinedIcon style={{ color: '#FFFFFF' }} />} tooltipTitle='E-Mail' onClick={() => MailUrl()} /> : null}
        </SpeedDial> : null}
    </Box>
  )
}

export default SpeedDialTooltipRightOpen