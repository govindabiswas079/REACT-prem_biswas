import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import App from './App'
import { setGetExperiance, setGetEducation, setGetTechnology } from './store/reducerSlicer'

const RedurecApp = () => {
  const dispatch = useDispatch();

  const APICALL = async () => {
    axios.all([
      axios.get('https://127.0.0.1:8080/api/public/get/experience'),
      axios.get('https://127.0.0.1:8080/api/public/get/education'),
      axios.get('https://127.0.0.1:8080/api/public/get/technology')
    ])
      .then(axios.spread((data1, data2, data3) => {
        dispatch(setGetExperiance(data1?.data?.Experience))
        dispatch(setGetEducation(data2?.data?.Education))
        dispatch(setGetTechnology(data3?.data?.Technology))
      }));
  }

  useEffect(() => {
    APICALL();
  }, [])

  return (
    <App />
  )
}

export default RedurecApp