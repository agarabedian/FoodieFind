import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Container, Typography, Box, Paper, Button, Stack, Divider, styled } from '@mui/material';

/**
 * Create the ResultsPage component.
 */
const ResultsPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const categories = location.state as string[];

    /**
     * Function to navigate back to the home page for a new search.
     */
    const handleNewSearch = () => {
        navigate('/');
    };
    /**
     * Function to navigate back to the home page to modify selected categories.
     */
    const handleModifySearch = () => {
        navigate('/', { state: categories });
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, gap: 2, width: '50%' }}>
                <Button variant='contained' color='secondary' sx={{ minWidth: 125 }} onClick={handleNewSearch}>
                    New Search
                </Button>
                {categories.length > 0 && (
                    <Button variant='contained' color='primary' sx={{ minWidth: 125 }} onClick={handleModifySearch}>
                        Modify
                    </Button>
                )}
            </Box>
            <Container maxWidth='md' sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ p: 3, backgroundColor: 'background.paper' }}>
                    <Typography variant='h4' gutterBottom>
                        Results Page
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant='body1'>Selected Categories:</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1, justifyContent: 'center' }}>
                            <Stack
                                direction='row'
                                sx={{ flexWrap: 'wrap' }}
                                divider={<Divider orientation='vertical' flexItem />}
                                spacing={2}
                            >
                                {categories.map((category, index) => (
                                    <Item key={index}>{category.toUpperCase()}</Item>
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};

export default ResultsPage;
