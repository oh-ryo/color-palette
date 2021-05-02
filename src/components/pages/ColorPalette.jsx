import React from 'react';
import Box from '@material-ui/core/Box';
import Header from '../organisms/Header';
import ColorBlocks from '../organisms/ColorBlocks';
import Footer from '../organisms/Footer';

const ColorPalette = () => {
  return (
    <Box>
      <Header/>
      <ColorBlocks/>
      <Footer/>
    </Box>
  )
}

export default ColorPalette;