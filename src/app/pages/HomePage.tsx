import React from 'react';
import { useState } from 'react';
import CATEGORIES from '../constants';
import { useNavigate } from 'react-router';
import { Container, Typography, Button, Box, Paper, Grid2 } from '@mui/material';

/**
 * Create the HomePage component.
 */
const HomePage: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const navigate = useNavigate();

    /**
     * Add category to the list if not present, or remove it if present.
     * @param catChange The category to to add or remove.
     */
    const handleCategoryChange = (catChange: string) => {
        //Add the category to the list if it is not present
        if (!categories.includes(catChange)) {
            setCategories((categories) => [...categories, catChange]);
        } else {
            //Remove the category from the list if it is present
            setCategories((categories) => [...categories.filter((category) => category !== catChange)]);
        }
    };

    /**
     * Function to clear selected categories.
     */
    const handleClear = () => {
        setCategories([]);
    };

    /**
     * Function to navigate to the results page.
     */
    const handleNextPage = () => {
        navigate('/next-page');
    };

    return (
        <Container maxWidth='md' sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3, backgroundColor: 'background.paper' }}>
                <Typography variant='h4' gutterBottom>
                    FoodieFind
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <Typography variant='h6' gutterBottom>
                        (DEV) Categories: {categories.map((category) => category + ' ')}
                    </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Grid2 container spacing={2}>
                        {CATEGORIES.map((categoryItem) => (
                            //TODO: Find a way to add auto sizing to the layout
                            <Grid2 size={4} key={categoryItem}>
                                <Button
                                    variant={categories.includes(categoryItem) ? 'contained' : 'outlined'}
                                    color={categories.includes(categoryItem) ? 'primary' : 'secondary'}
                                    onClick={() => handleCategoryChange(categoryItem)}
                                    fullWidth
                                    sx={{
                                        transform: categories.includes(categoryItem) ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'transform 0.2s',
                                    }}
                                >
                                    {categoryItem}
                                </Button>
                            </Grid2>
                        ))}
                    </Grid2>
                    <Box display={'flex'} justifyContent={'center'} gap={4}>
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={handleClear}
                            sx={{ mt: 2, minWidth: 115 }}
                        >
                            Clear
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleNextPage}
                            sx={{ mt: 2, minWidth: 115 }}
                        >
                            {categories.length > 0 ? 'Next Page' : 'All'}
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default HomePage;
