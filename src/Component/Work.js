import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box, Button, Container, Typography, IconButton, } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { RWebShare } from "react-web-share";
import moment from 'moment';

const Work = ({ mode }) => {

  return (
    <Box id={'Work'} sx={{ marginTop: 10 }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 4, }} spacing={{ xs: 1, sm: 1, md: 1 }}>
            {itemData?.map((item, index) => (
              <Box key={index}
                sx={{
                  backgroundColor: mode ? '#132f4c' : '#FFFFFF',
                  padding: 1,
                  borderRadius: 2,
                  boxShadow: '0 4px 44px rgb(17 29 48 / 10%)',
                  transition: '0.3s ease-in-out',
                  '&:hover': { color: 'blue', boxShadow: '0 4px 44px rgb(17 29 48 / 30%)', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF' }
                }}>
                <Box sx={{ height: 200, borderRadius: 2, overflow: 'hidden', '&:hover img': { transform: 'scale(1.5)' } }}>
                  <img
                    src={`${item.img}?w=162&auto=format`}
                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderRadius: 6,
                      display: 'block',
                      width: '100%',
                      height: 200,
                      transition: 'transform .5s ease'
                    }}
                  />
                </Box>
                <Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: 1,
                    paddingBottom: 1,
                  }}>
                    <Typography sx={{ fontFamily: 'Open Sans', fontWeight: 700, fontSize: 18, color: mode ? 'rgb(208 223 255/1)' : '#252F40' }}>{item?.title}</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography sx={{ fontFamily: 'Nunito', fontWeight: 500, fontStyle: 'italic', fontSize: 14, color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }}>{item?.typeOf}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: 1 }}>
                    <Typography sx={{ fontFamily: 'Open Sans', fontWeight: 500, fontSize: 14, color: mode ? 'rgb(208 223 255/1)' : '#252F40' }}>{item?.decs}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: 1 }}>
                    <Typography sx={{ fontFamily: 'Nunito', fontWeight: 500, fontStyle: 'italic', fontSize: 14, color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }}>{moment(new Date()).fromNow()}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={() => {  }} variant='contained' size='small' sx={{ fontFamily: 'Open Sans', fontWeight: 500, fontSize: 14, color: 'rgb(208 223 255/1)' }}>
                      view
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <RWebShare
                      data={{
                        text: item?.decs,
                        url: item?.action,
                        title: item?.title,
                      }}
                    >
                      <IconButton sx={{ backgroundColor: mode ? 'rgb(208 223 255/1)' : '#FFFFFF', boxShadow: 2, width: 40, height: 40, margin: .5, transition: '0.3s ease-in-out', '&:hover': { transition: '0.3s ease-in-out', backgroundColor: '#1976d2', boxShadow: 0, color: '#FFFFFF' } }}>
                        <ShareIcon />
                      </IconButton>
                    </RWebShare>
                  </Box>
                </Box>
              </Box>
            ))}
          </Masonry>
        </Box>
      </Container>
    </Box >
  )
}

export default Work;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    decs: 'Nihil nesciunt voluptates, doloribus sapiente quam dicta maxime saepe ea quis fugit accusantium rem veniam quibusdam dolorum necessitatibus consequuntur!',
    typeOf: 'typeOf',
    action: 'https://google.com',
    imgList: [{ id: 1, img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6' }, { id: 2, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' }, { id: 3, img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' }]
  },
];
