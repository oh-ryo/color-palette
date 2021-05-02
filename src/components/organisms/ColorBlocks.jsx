import React from 'react';
import { Grid } from '@material-ui/core';
import ColorBlock from '../molecules/ColorBlock';

const ColorBlocks = () => {
  return (
    <Grid container spacing={0}>
        <ColorBlock />
        <ColorBlock />
        <ColorBlock />
        <ColorBlock />
        <ColorBlock />
    </Grid>
  )
}

export default ColorBlocks;
