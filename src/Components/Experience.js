import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Box, Container, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import { CodeFever } from '../assets'
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Experience = () => {

  return (
    <Container id={'Experience'} sx={{ pt: 10 }}>
      <motion.div variants={textVariant()}>
        <Typography sx={{ color: 'gray', fontSize: { xs: 14, sm: 14, md: 16, lg: 16 }, fontWeight: 800, lineHeight: 1.1, transition: '0.2s ease-in-out', }}>WHAT I HAVE DONE SO FAR <br /> <Typography sx={{ fontSize: { xs: 25, sm: 25, md: 35, lg: 35 }, color: '#252F40', transition: '0.2s ease-in-out', fontWeight: 900 }}>Work Experience.</Typography> </Typography>
      </motion.div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#252F40', fontFamily: 'Nunito', fontWeight: 800 }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="APRIL 2021 – APRIL 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', overflow: 'hidden', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
          icon={<img alt='' src={CodeFever} style={{ width: 50, height: 50, borderRadius: '50%' }} />}
        >
          <Box>
            <Typography variant='h6' onClick={() => { }} sx={{ color: '#eadcdc', fontSize: 12, fontWeight: 700 }}><LocationOnIcon sx={{ fontSize: 12 }} /> Major Gate, Chandrapur, Maharashtra 442404</Typography>
            <Typography variant='h6' onClick={() => { window.location.href('https://codefevertech.com') }} sx={{ cursor: 'pointer', color: '#eadcdc', fontSize: 12, fontWeight: 700 }}><LanguageIcon sx={{ fontSize: 12 }} /> https://codefevertech.com</Typography>

            <Typography variant='h3' sx={{ color: 'rgb(255 255 255 / 1)', fontSize: 20, fontWeight: 700, pt: 2 }}>React & React-Native Developer</Typography>
            <Typography variant='h3' sx={{ color: '#eadcdc', fontSize: 16, fontWeight: 700 }}>CODE FEVER TECHNOLOGY PVT LTD.</Typography>

            <Box sx={{ p: 2 }}>
              <ul>
                <li style={{ color: 'rgb(255 255 255 / 1)', fontSize: 15, fontWeight: 500, lineHeight: 1.2 }}>
                  Developing and maintaining Web & Mobile applications using React.js, React-Native and other related technologies.
                </li>
              </ul>
              <ul>
                <li style={{ color: 'rgb(255 255 255 / 1)', fontSize: 15, fontWeight: 500, lineHeight: 1.2 }}>
                  Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.
                </li>
              </ul>
              <ul>
                <li style={{ color: 'rgb(255 255 255 / 1)', fontSize: 15, fontWeight: 500, lineHeight: 1.2 }}>
                  Implementing responsive design.
                </li>
              </ul>
              <ul>
                <li style={{ color: 'rgb(255 255 255 / 1)', fontSize: 15, fontWeight: 500, lineHeight: 1.2 }}>
                  Participating in code reviews and providing constructive feedback to other developers.
                </li>
              </ul>
            </Box>
          </Box>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container >
  )
}

export default SectionWrapper(Experience, 'Experience')