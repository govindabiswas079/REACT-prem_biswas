import React from 'react'
import { Typography, Box, } from '@mui/material'

const Logo = () => {
    return (
        <Box sx={{ width: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
                sx={{ fontSize: 32, color: 'rgb(145 94 255 /5)', fontWeight: 900 }}>
                GB
            </Typography>
            <Box sx={{ pl: .5 }}>
                <Typography sx={{ lineHeight: 1, fontSize: 14, color: 'rgb(145 94 255 /5)', fontWeight: 800, fontFamily: 'Nunito' }}>
                    Govinda
                </Typography>
                <Typography sx={{ lineHeight: 1, fontSize: 14, color: 'rgb(145 94 255 /5)', fontWeight: 800, fontFamily: 'Nunito' }}>
                    Biswas
                </Typography>
            </Box>
        </Box>
    )
}

export default Logo