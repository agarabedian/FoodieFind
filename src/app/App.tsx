import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import '../app/App.css';
import darkTheme from '../theme';
import HomePage from './pages/HomePage';
import { ThemeProvider } from '@mui/material';
import ResultsPage from './pages/ResultsPage';

/**
 * Main App component.
 */
const App = (): React.ReactElement => {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className='App'>
                <div className='App-header'>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/results' element={<ResultsPage />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
