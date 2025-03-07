import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import '../app/App.css';
import HomePage from './pages/HomePage';
import { ThemeProvider } from '@mui/material';
import darkTheme from '../theme';

/**
 * Main App component.
 */
function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className='App'>
                <div className='App-header'>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
