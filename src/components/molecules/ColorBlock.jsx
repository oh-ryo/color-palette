import React from 'react';
import { useState } from 'react'
import { Grid } from '@material-ui/core';
import RandomColorSelect from '../../constants/RandomColorSelect';
import TextForm from '../atoms/TextForm';

const ColorBlock = () => {
  const colorCode = RandomColorSelect();
  const [bgColor, setBackground] = useState(colorCode[0]);
  // const [textColor, setText] = useState(colorCode[1]);
  const textColor = colorCode[1];
  const backgroundCss = {
    backgroundColor: `#${bgColor}`,
    color: textColor,
    height: "calc(100vh - 120px)"
  }
  return (
    <Grid item xs style={backgroundCss}>
      <TextForm background={bgColor} backgroundState={setBackground} text={textColor}/>
    </Grid>
  )
}

export default ColorBlock;