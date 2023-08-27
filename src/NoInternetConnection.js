import React, { useState, useEffect, Fragment } from 'react';
import { Box, Modal, Typography, } from '@mui/material';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';

const NoInternetConnection = (props) => {
    const [isOnline, setOnline] = useState(true);

    useEffect(() => {
        setOnline(navigator.onLine)
    }, [])

    window.addEventListener('online', () => {
        window.location.reload();
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });

    if (isOnline) {
        return (
            props.children
        )
    } else {
        return (
            <Fragment>
                {props.children}
                <Modal open={true} sx={{ zIndex: (theme) => theme.zIndex.drawer + 10, }}>
                    <Box sx={{ backdropFilter: 'blur(2px)', width: '100%', height: '100%', position: 'absolute', zIndex: 99999999 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 5, pl: 1, pr: 1 }}>
                            <Box sx={{ borderRadius: 2, display: 'flex', backgroundColor: '#F5F9FF', justifyContent: 'center', alignItems: 'center', width: 'auto', pt: 2.5, pb: 2.5, pl: 1, pr: 1 }}>
                                <ReportProblemRoundedIcon sx={{ color: '#252F40', fontSize: 18 }} />
                                <Typography sx={{ color: '#252F40', fontFamily: 'Nunito', fontWeight: 600, fontSize: 16, pl: 1 }}>No internet connection</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            </Fragment>
        )
    }
}

export default NoInternetConnection;