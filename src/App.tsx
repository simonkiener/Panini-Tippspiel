import React from 'react';
import './App.css';
import Header from "./components/headerComponent/header";
import {Grid} from "@mui/material";
import ListView from "./components/ListView/ListView";

function App() {
  return (
      <Grid container spacing={1}
      className='App'>
        <Grid item xs={12}>
      <Header />
        </Grid>
          <Grid item xs={12}
          className = 'ListView'>
            <ListView />
        </Grid>
    </Grid>
  );
}
export default App;
