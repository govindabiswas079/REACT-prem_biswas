import React, { useState } from 'react'
import { Grid, Box, Container, Typography, Modal } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Map, Marker, ZoomControl } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'
import { Button } from '@mui/material';

const Education = ({ mode }) => {
  const { GetEducation, GetMonths } = useSelector(state => state?.reducerSlicer)
  const [isMapView, setIsMapView] = useState({ isOpen: false, coordinates: [] })

  return (
    <Box id={'WorkExperiance'} sx={{ marginTop: 10 }}>
      <Modal
        open={isMapView?.isOpen}
        onClose={() => setIsMapView({ ...isMapView, isOpen: false })}
      >
        <Box sx={{ width: '100%', height: '100%' }}>
          <Map
            provider={osm}
            center={isMapView?.coordinates}
            zoom={10}
          >
            <ZoomControl />
            <Marker width={50} anchor={isMapView?.coordinates} />
          </Map>
          <Button onClick={() => setIsMapView({ isOpen: false, coordinates: [] })} variant='contained' size='smal' sx={{ transition: '0.3s ease-in-out', position: 'absolute', bottom: 5, left: 5, fontFamily: 'Open Sans', fontWeight: 500, fontSize: 14, backgroundColor: 'red', boxShadow: '0 4px 44px rgb(17 29 48 / 10%)', '&:hover': { transition: '0.3s ease-in-out', backgroundColor: 'red', boxShadow: '0 4px 44px rgb(17 29 48 / 45%)' } }}>Close</Button>
        </Box>
      </Modal>

      <Container>
        {GetEducation?.length ?
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            <Typography variant={'h4'} sx={{ textAlign: 'center', textTransform: 'uppercase', pt: 1, pb: 2.5, fontFamily: 'Nunito', fontWeight: '700' }}>Education</Typography>
          </Box> : null}
        <Grid container justifyContent="center" spacing={2}>
          {GetEducation?.map((value, index) => (
            <Grid key={index} item xs={12} sm={12} md={12} lg={12}>
              <Box sx={{ width: '100%', boxShadow: '0 4px 44px rgb(17 29 48 / 10%)', transition: '0.3s ease-in-out', borderRadius: 2, borderWidth: 2, borderColor: mode ? '#132f4c' : '#FFF', borderStyle: 'solid', backgroundColor: mode ? '#132f4c' : '#FFFFFF', '&:hover': { boxShadow: '0 4px 44px rgb(17 29 48 / 45%)', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF', borderWidth: 2, borderColor: mode ? '#1e4976' : 'blue', borderStyle: 'solid' } }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 1
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <EventIcon sx={{ fontSize: 14, color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)', paddingRight: .2 }} />
                    <Typography sx={{ fontSize: 10, color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)', fontFamily: 'Nunito', fontWeight: 500 }}>{GetMonths[new Date(value?.startDate).getMonth()]} {moment(value?.startDate)?.format('YYYY')} - {value?.isPresent === true ? 'Present' : `${GetMonths[new Date(value?.endDate).getMonth()]} ${moment(value?.endDate)?.format('YYYY')}`}</Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box onClick={() => setIsMapView({ ...isMapView, isOpen: true, coordinates: [value?.latitude, value?.longitude] })} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>
                    <LocationOnIcon sx={{ fontSize: 14, paddingRight: .2, color: mode ? 'rgb(184, 231, 251)' : 'blue' }} />
                    <Typography sx={{ fontSize: 10, color: mode ? 'rgb(184, 231, 251)' : 'blue', fontFamily: 'Nunito', fontWeight: 500 }}>MAP View</Typography>
                  </Box>
                </Box>
                <Box sx={{ padding: 1 }}>
                  <Typography sx={{ fontFamily: 'Open Sans', fontWeight: 700, fontSize: 18, color: mode ? 'rgb(208 223 255/1)' : '#000000' }}>{value?.courses}</Typography>
                  <Typography sx={{ fontFamily: 'Nunito', fontWeight: 500, fontSize: 14, color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }}>{value?.boardUniversity}</Typography>
                  <Typography sx={{ fontFamily: 'Nunito', fontWeight: 500, fontSize: 14, color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }}>{value?.type}</Typography>
                  <Typography sx={{ paddingTop: 2, fontFamily: 'Nunito', fontWeight: 500, fontSize: 14, color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }}>{value?.description === "" ? '-' : value?.description}</Typography>
                  <Typography sx={{ paddingTop: 2, fontFamily: 'Open Sans', fontWeight: 700, fontSize: 16, color: mode ? 'rgb(208 223 255/1)' : '#000000' }}>{value?.institute}</Typography>
                  <Typography sx={{ paddingTop: 2, fontFamily: 'Nunito', fontWeight: 500, fontSize: 14, color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }}>{value?.address}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Education;
