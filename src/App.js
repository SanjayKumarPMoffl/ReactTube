import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, BrowserRouter, Route, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import ChannelDetail from './components/ChannelDetail';
import VideoDetail from './components/VideoDetail';
import Feed from './components/Feed';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar';

const theme = createTheme();

const App = () => (
  <BrowserRouter basename='/ReactTube'>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);
export default App;
