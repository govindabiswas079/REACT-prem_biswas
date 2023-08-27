import React, { Suspense } from 'react';
import { HeaderBar, Home, About, Education, Experience, Development, DevelopmentTools, DevelopmentDesign, Contact, Footer, } from './Components'
import { Box } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import CanvasLoader from "./Components/Loader";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CanvasLoader />}>
        <Box>
          <HeaderBar />
          <Home />
          <About />
          <Education />
          <Experience />
          <Development />
          <DevelopmentTools />
          <DevelopmentDesign />
          <Contact />
          <Footer />
        </Box>
      </Suspense>
    </BrowserRouter>
  )
}

export default App