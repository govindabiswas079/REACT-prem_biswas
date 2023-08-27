import React, { useState, Suspense } from 'react'
import { Box, Grid, Typography, TextField, IconButton, Container, Button } from '@mui/material'
import axios from 'axios';
import { StarsCanvas } from '../Components/canvas'
import { SectionWrapper } from "../hoc";
// import { EarthCanvas } from "./canvas";
import CanvasLoader from "./Loader";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
//  import { PostData } from "../Services";

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const onHandleChage = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value })
  }

  const onSubmit = async () => {
    setLoading(true)
    var options = {
      method: 'POST',
      url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
      headers: {
        Accept: '*/*',
        'X-RapidAPI-Key': 'b9a46f05bemsh0b149a05c8d9259p1927dfjsn046a20d73432',
        'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
        'content-type': 'application/json',
        Authorization: 'Bearer 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'
      },
      data: {
        "personalizations": [
          {
            "to": [{ "email": "govindbiswas079@gmail.com" }],
            "subject": `New message from ${value?.name} at ${new Date()}`
          }
        ],
        "from": {
          "email": value?.email
        },
        "content": [{
          type: "text/plain",
          value: `
              New message from ${value?.name} at ${new Date()},

              Name: ${value?.name}
              Mobile: ${value?.number}
              Email: ${value?.email}
              message: ${value?.message}
              `
        }
        ]
      }
    };

    axios(options)
      .then((response) => {
        console.log(response);
        setValue(({
          name: '',
          number: '',
          email: '',
          message: ''
        }))
      }).catch((error) => {
        console.error('error', error);
      })
      .finally(() => {
        setLoading(false);
        setValue(({
          name: '',
          number: '',
          email: '',
          message: ''
        }))
      })
  }

  const ContactArray = [
    { id: 1, isLenght: false, name: 'name', placeholder: 'Enter Name *', rows: 1, multiline: false, type: 'text', value: value?.name },
    { id: 3, isLenght: true, name: 'number', placeholder: 'Enter Number', rows: 1, multiline: false, type: 'number', value: value?.number, },
    { id: 2, isLenght: false, name: 'email', placeholder: 'Enter Email *', rows: 1, multiline: false, type: 'email', value: value?.email, },
    { id: 4, isLenght: false, name: 'message', placeholder: 'Message', rows: 4, multiline: true, type: 'text', value: value?.message },
  ];


  const ContactData = [
    { id: 1, Title: 'Call Us', value: '91 9511723509', Icon: <CallIcon style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />, FuncURL: () => window.open('tel: 9511723507') },
    { id: 2, Title: 'WhatsApp Us', value: '91 9511723509', Icon: <WhatsAppIcon style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />, FuncURL: () => window.open('https://wa.me/9511723507') },
    { id: 3, Title: 'Email Us', value: 'govindbiswas079@gmail.com', Icon: <MailOutlineOutlinedIcon style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />, FuncURL: () => window.open('mailto: govindbiswas079@gmail.com') },
  ]
  return (
    <Box id={'ContactUs'} sx={{ mt: 10, pb: 5, backgroundColor: '#050816' }}>
      <Container sx={{}}>
        <Box sx={{ pt: 8, pb: 4 }}>
          <Grid container justifyContent="center" spacing={2}>
            {ContactData?.map((value, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Box onClick={() => { value?.FuncURL() }} sx={{ cursor: 'pointer', backgroundColor: 'rgb(245 249 255/1)', p: 1, borderRadius: 2, display: 'flex', alignItems: 'center' }}>
                  <IconButton sx={{ '&:hover': { borderRadius: '50%', transition: '0.2s ease-in-out', backgroundColor: '#000000', }, transition: '0.2s ease-in-out', backgroundColor: '#000000', boxShadow: 3, margin: .3, width: 35, height: 35, borderRadius: 1 }} onClick={() => window.open('https://github.com/prem-pb')}>
                    {value?.Icon}
                  </IconButton>
                  <Box sx={{ pl: 1 }}>
                    <Typography sx={{ color: '#252F40', transition: '0.2s ease-in-out', fontSize: 14, fontWeight: 600, fontFamily: 'Nunito' }}>{value?.Title}</Typography>
                    <Typography sx={{ color: '#252F40', transition: '0.2s ease-in-out', fontSize: 16, fontWeight: 800, fontFamily: 'Open Sans' }}>{value?.value}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6} md={8}>
            <Box sx={{ height: 420, justifyContent: 'center', alignItems: 'center', display: 'flex', p: 3, borderRadius: 2, }}>
              {/* <EarthCanvas /> */}
              <StarsCanvas />
              {/* <img alt='' src='https://www.poornima.org/img/contact-img.png' /> */}
              <Suspense fallback={<CanvasLoader />}>
                <img alt='' src='https://www.successmantra.in/assets/assestsnew/images/contact-us.png' />
              </Suspense>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ boxShadow: 3, height: 420, p: 3, borderRadius: 2, backgroundColor: 'rgb(245 249 255/1)' }}>
              <Typography sx={{ color: '#000000', fontWeight: 800, fontFamily: 'Open Sans', fontSize: 20, textAlign: 'center' }}>Get In Touch</Typography>

              <Box sx={{ mt: 2 }}>
                {ContactArray?.map((value, index) => (
                  <TextField
                    key={index}
                    placeholder={value?.placeholder}
                    onPaste={(e) => { e.preventDefault(); return false }} onCopy={(e) => { e.preventDefault(); return false }}
                    fullWidth
                    type={value?.type}
                    // inputMode='numeric'
                    // pattern="[0-9]*"
                    variant='outlined'
                    name={value?.name}
                    value={value?.value}
                    onChange={(e) => {
                      if (value?.isLenght) {
                        if (e?.target?.value.toString()?.length <= 10) {
                          onHandleChage(e)
                        }
                      } else {
                        onHandleChage(e)
                      }
                    }}

                    size='small'
                    multiline={value?.multiline}
                    rows={value?.rows}
                    sx={{ marginTop: 2, fontFamily: 'Nunito', fontSize: 14, backgroundColor: 'rgb(228 240 253/1)', borderRadius: 1, }}
                    InputProps={{
                      sx: { color: '#252F40' },
                      inputMode: 'numeric'
                    }}
                  />
                ))}
              </Box>
              <Button fullWidth size='small' onClick={() => { onSubmit() }} variant='contained' sx={{ mt: 2 }}>{loading ? 'please wait' : 'Send'}</Button>

            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* <StarsCanvas /> */}
      {/* <EarthCanvas /> */}
    </Box>
  )
}

export default SectionWrapper(Contact, 'Contact')



