import React, { Fragment, useState } from 'react'
import { Button, TextField, Snackbar, Slide } from '@mui/material';
import axios from 'axios';
import MuiAlert from '@mui/material/Alert';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ConatctForm = ({ mode }) => {
  const [loader, setLoader] = useState(false);
  const [isSnackbar, setIsSnackbar] = useState({ open: false, message: '', status: null });
  const [value, setValue] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const onHandleChage = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value })
  }

  const data = {
    "Name": value?.name,
    "Email": value?.email,
    "Phone": value?.number,
    "Message": value?.message
  };

  const sendEmail = async (e) => {
    const controller = new AbortController();
    const signal = controller.signal;
    e.preventDefault();
    setLoader(true)
    await axios.post(`https://localhost:8080/api/message/message`, data, { signal: signal })
      .then((response) => {
        console.log(response)
        if (response?.status === 200) {
          console.log(200);
          setIsSnackbar({ ...isSnackbar, open: true, message: 'Your message has been successfully sent.', status: 1 });
          setValue({ ...value, name: '', number: '', email: '', message: '' })
        }
      })
      .catch((error) => {
        console.log(error);
        setIsSnackbar({ ...isSnackbar, open: true, message: 'Unable to send your message.', status: 0 });
      })
      .finally(() => {
        setLoader(false)
      })
    return () => {
      controller.abort();
    };
  }

  const ContactArray = [
    { id: 1, isLenght: false, name: 'name', placeholder: 'Enter Name', rows: 1, multiline: false, type: 'text', value: value?.name },
    { id: 3, isLenght: true, name: 'number', placeholder: 'Enter Number', rows: 1, multiline: false, type: 'number', value: value?.number, },
    { id: 2, isLenght: false, name: 'email', placeholder: 'Enter Email', rows: 1, multiline: false, type: 'email', value: value?.email, },
    { id: 4, isLenght: false, name: 'message', placeholder: 'Message', rows: 4, multiline: true, type: 'text', value: value?.message },
  ];

  return (
    <Fragment>
      <form onSubmit={sendEmail}>
        {ContactArray?.map((value, index) => (
          <TextField
            key={index}
            placeholder={value?.placeholder}
            onPaste={(e) => { e.preventDefault(); return false }} onCopy={(e) => { e.preventDefault(); return false }}
            fullWidth
            type={value?.type}
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
            sx={{ marginTop: 2, fontFamily: 'Nunito', fontSize: 14, backgroundColor: mode ? 'rgb(33 41 51/1)' : 'rgb(228 240 253/1)', borderRadius: 1, }}
            InputProps={{
              sx: { color: mode ? 'rgb(163 179 188/1)' : '#252F40' }
            }}
          />
        ))}

        <Button type='submit' fullWidth variant='contained' sx={{ marginTop: 2, color: 'rgb(208 223 255/1)', fontFamily: 'Open Sans', fontWeight: 500, fontSize: 14, '&:hover': { color: '#FFFFFF' }, '&:disabled': { backgroundColor: '#7477ED' } }} disabled={loader}>{loader ? 'Sending' : 'Send'}</Button>
      </form>

      <Snackbar key={SlideTransition.name} TransitionComponent={SlideTransition} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={isSnackbar?.open} autoHideDuration={6000} onClose={() => setIsSnackbar({ ...isSnackbar, open: false, message: '', status: null })}>
        <Alert onClose={() => setIsSnackbar({ ...isSnackbar, open: false, message: '', })} severity={isSnackbar?.status === 1 ? "success" : "error"} sx={{ width: '100%' }}>
          {isSnackbar?.message}
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

export default ConatctForm;