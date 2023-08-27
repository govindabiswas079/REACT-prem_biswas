import React, { useState } from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import ReactCardFlip from 'react-card-flip';
import filePdf from '../assets/data.csv';

const About = ({ mode }) => {
  const [expand, setExpand] = useState(false)

  const downloadFile = () => {
    // window.location.href = filePdf;
    window.open(filePdf, '_blank', 'fullscreen=yes');
    return false;
  }
  return (
    <Box id={'About'} sx={{ marginTop: 10 }}>
      <Container>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        </Box>

        <Typography sx={{ fontSize: 18, fontFamily:'Open Sans', fontWeight: 500 }}>INTRODUCTION</Typography>
        <Typography sx={{ fontSize: 30, fontFamily:'Open Sans', fontWeight: 900 }}>Overview.</Typography>
        <Typography sx={{ fontSize: 16, fontFamily:'Open Sans', fontWeight: 500 }}>I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</Typography>


        {/* <ReactCardFlip isFlipped={expand} flipDirection='vertical'>
          <Box onClick={() => setExpand(expand => !expand)} sx={{ boxShadow: '0 4px 44px rgb(17 29 48 / 10%)', borderRadius: 2, cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF', '&:hover': { boxShadow: '0 4px 44px rgb(17 29 48 / 25%)', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF', } }}>
            <Grid container justifyItems={'center'} alignItems={'center'} padding={1} spacing={{ xs: 3, sm: 1, md: 1 }}>
              {data.map((value, id) => (
                <Grid key={id} item xs={12} sm={6} md={3}>
                  <Box sx={{ backgroundColor: '#1564c4', width: '100%', height: '100%', borderRadius: 1, }}>
                    <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', }}>
                      <Box sx={{ p: 1 }}>
                        <Box sx={{ height: 95 }}>
                          <img style={{ width: 95, height: 95 }} alt='' src={value?.img} />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ padding: 1 }}>
                      <Typography sx={{ color: '#FFFFFF', fontFamily: 'Open Sans', fontSize: 16, fontWeight: 500, }}>{value?.title}</Typography>

                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box onClick={() => setExpand(expand => !expand)} sx={{ boxShadow: '0 4px 44px rgb(17 29 48 / 10%)', borderRadius: 2, cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: mode ? '#132f4c' : '#FFFFFF', '&:hover': { boxShadow: '0 4px 44px rgb(17 29 48 / 25%)', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF' } }}>
            <Grid container justifyItems={'center'} alignItems={'center'} spacing={1}>
              <Grid item xs={12} sm={12} md={9}>
                <Box sx={{ padding: 1 }}>
                  <Typography sx={{ color: mode ? '#FFFFFF' : '#252F40', fontFamily: 'Open Sans', fontWeight: 500, fontSize: 16 }}>
                  I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Box sx={{ padding: 1 }}>
                  <Button sx={{ fontFamily: 'Open Sans', fontWeight: 500, fontSize: 14, color: '#FFFFFF' }} variant='contained' fullWidth>Button</Button>
                  <Button sx={{ fontFamily: 'Open Sans', fontWeight: 500, fontSize: 14, color: '#FFFFFF', mt: 1, mb: 1 }} variant='contained' fullWidth>Button</Button>
                  <Button sx={{ fontFamily: 'Open Sans', fontWeight: 500, fontSize: 14, color: '#FFFFFF' }} onClick={() => downloadFile()} variant='contained' fullWidth>Button</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </ReactCardFlip> */}

      </Container>

    </Box>
  )
}

export default About;

const data = [
  { id: 1, dec: 'A Front-End Developer is someone who creates websites and web applications. The Front-End Developer creates things that the user sees.', title: 'Frontend Developer', img: 'https://cdni.iconscout.com/illustration/premium/thumb/ui-ux-designer-4375011-3640101.png' },
  { id: 2, dec: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.', title: 'React Developer', img: 'https://railsfactory.com/assets/images/reactjs-img.png' },
  { id: 3, dec: 'illum est aliquid, cumque quaerat enim maiores assumenda corrupti saepe accusamus impedit nostrum laboriosam? Distinctio molestias qui officiis vitae fugiat at odio cumque voluptate asperiores maxime soluta, sunt, totam incidunt ex laudantium voluptates possimus doloremque ut. Recusandae maiores nulla officiis aliquid, sit tempora, quidem cupiditate nam ut voluptate ex pariatur obcaecati! Ullam cupiditate perferendis in? Nam ex consequuntur officia eius optio fuga repudiandae sunt natus veniam?', title: 'Native Developer', img: 'https://seraphic.io/wp-content/themes/seraphic/new_homepage/img/service_img/mobile/service_exp_mbl_booking.png' },
  { id: 4, dec: 'illum est aliquid, cumque quaerat enim maiores assumenda corrupti saepe accusamus impedit nostrum laboriosam? Distinctio molestias qui officiis vitae fugiat at odio cumque voluptate asperiores maxime soluta, sunt, totam incidunt ex laudantium voluptates possimus doloremque ut. Recusandae maiores nulla officiis aliquid, sit tempora, quidem cupiditate nam ut voluptate ex pariatur obcaecati! Ullam cupiditate perferendis in? Nam ex consequuntur officia eius optio fuga repudiandae sunt natus veniam?', title: 'Ionic Developer', img: 'https://media.credencys.com/wp-content/uploads/2018/03/hireIonic-image2.png' },
]

// 'https://www.skynettechnologies.com/sites/default/files/2020-12/react-native-app-development.png'