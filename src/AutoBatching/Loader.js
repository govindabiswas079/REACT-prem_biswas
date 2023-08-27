import { Backdrop, CircularProgress, Box } from '@mui/material';
import React from 'react';

const Loader = () => (
    <>
        <Backdrop open={true} sx={{ zIndex: (theme) => theme.zIndex.drawer + 10, }}>
            <Box>
                <CircularProgress />
            </Box>
        </Backdrop>
    </>
);

export default Loader;
