import React, { Fragment, useState } from 'react';
import { SpeedDialTooltipLeftOpen, ContacSpeedDialTooltipRightOpent, NavBar, Home, Thech, Work, Skills, WorkExperiance, Education, WhatDo, About, Contact, Footer, CarouselTech } from './Component/index';
import { Box, } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import NoInternetConnection from './NoInternetConnection';

const App = () => {
  const [mode, setMode] = useState(false);
  const [nav, setNav] = useState(false);
  const [value, setValue] = useState({ Notification: false, Wish_Message: false, New_Registration: false, Public_Message: false, WhatsApp_Message: false, Public_Calls: false, Social_Button: false, Public_Email: false, Public_GitHub: false, Public_Experiance: false, Public_Skills: false, Public_Portfolio: false, Public_Technology: false, Public_Contact: false, Public_Education: false });

  useEffect(() => {
    const ThemeMode = localStorage.getItem('ThemeMode')
    if (ThemeMode === 'true') {
      setMode(true)
    } else {
      setMode(false)
    }
  }, [mode])

  const SpeedDial = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', SpeedDial);

  useEffect(() => {
    axios.get(`https://localhost:8080/api/permission/permission`)
      .then((response) => {
        if (response?.status === 200) {
          const data = response?.data;
          setValue({ ...value, ...data })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);


  return (
    <Fragment>
      <Box className={mode === true ? 'Dark_Bg' : 'Light_Bg'}>
        <NoInternetConnection>
          <NavBar mode={mode} value={value} setMode={setMode} />
          <Home mode={mode} value={value} />
          <About mode={mode} value={value} />
          {value?.Public_Education ? <Education mode={mode} value={value} /> : <Box sx={{ height: 10 }} />}
          {value?.Public_Skills ? <Skills mode={mode} value={value} /> : <Box sx={{ height: 10 }} />}
          {value?.Public_Experiance ? <WorkExperiance mode={mode} value={value} /> : <Box sx={{ height: 10 }} />}
          {value?.Public_Portfolio ? <Work mode={mode} value={value} /> : <Box sx={{ height: 10 }} />}
          <WhatDo mode={mode} value={value} />
          {value?.Public_Technology ? <Thech mode={mode} value={value} /> : <Box sx={{ height: 10 }} />}
          <CarouselTech mode={mode} value={value} />

          {value?.Public_Contact ? <Contact mode={mode} value={value} /> : <Box sx={{ height: 10 }} />}

          <Footer mode={mode} value={value} />

          <Box sx={{ position: 'absolute', bottom: 0, display: nav ? 'none' : 'block', transition: '0.2s ease-in-out', }}>
            <SpeedDialTooltipLeftOpen value={value} />
          </Box>
          <Box sx={{ position: 'absolute', bottom: 0, right: 0, display: nav ? 'none' : 'block', transition: '0.2s ease-in-out', }}>
            <ContacSpeedDialTooltipRightOpent value={value} />
          </Box>
        </NoInternetConnection>
      </Box>
    </Fragment>
  )
}

export default App;