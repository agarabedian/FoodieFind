import React from 'react';
import { useState } from 'react';
// import CATEGORIES from '../constants';
import { useNavigate, useLocation } from 'react-router';
import { Container, Typography, Button, Box, Paper, Grid2 } from '@mui/material';
import CategoryPicker from '../../components/CategoryPicker';
import CATEGORIES from '../constants';

/**
 * Create the HomePage component.
 */
const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const prevCategories = location.state as string[];
    //Use the previous categories if they exist, otherwise start with an empty array
    const [categories, setCategories] = useState<string[]>(prevCategories ?? []);
    // const [value, setValue] = useState('');
    // const [inputValue, setInputValue] = useState('');
    const [value, setValue] = React.useState<string | null>(null);
    const [inputValue, setInputValue] = React.useState('');

    /**
     * Add category to the list if not present.
     */
    const handleCategoryAdd = () => {
        setInputValue('');
        setValue(null);
        //Add the category to the list if it is not present
        if (!categories.includes(inputValue)) {
            setCategories((categories) => [...categories, inputValue]);
        }
    };

    /**
     * Remove category from the selected list.
     * @param removingCat The category to remove.
     */
    const handleCategoryRemove = (removingCat: string) => {
        //Remove the category from the list if it is present
        setCategories((categories) => [...categories.filter((category) => category !== removingCat)]);
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
        navigate('/results', { state: categories });
    };

    /**
     * If selected category is already in the list or the input is empty, disable the add button.
     * @returns {boolean} True or false.
     */
    const shouldDisableAddButton = (): boolean => {
        return categories.includes(inputValue) || !CATEGORIES.includes(inputValue) || categories.length >= 5;
    };

    return (
        <Container maxWidth='md' sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3, backgroundColor: 'background.paper' }}>
                <Typography variant='h4' gutterBottom>
                    FoodieFind
                </Typography>
                <Typography variant='h6' gutterBottom>
                    Select up to 5 categories to search. Remove your selection by clicking on the category.
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <Typography variant='h6' gutterBottom>
                        (DEV) Categories: {categories.map((category) => category + ' ')}
                    </Typography>
                </Box>
                <Grid2 container spacing={2} justifyContent={'center'}>
                    {categories.map((categoryItem) => (
                        <Grid2 size={{ xs: 6, sm: 2, md: 2 }} key={categoryItem} pb={2}>
                            <Button
                                variant='contained'
                                color='error'
                                onClick={() => handleCategoryRemove(categoryItem)}
                                sx={{
                                    backgroundColor: '#ff4d4d',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#ff1a1a',
                                    },
                                    borderRadius: '8px',
                                    padding: '8px 16px',
                                    width: '100%',
                                }}
                            >
                                {categoryItem}
                            </Button>
                        </Grid2>
                    ))}
                </Grid2>

                <Box sx={{ mb: 2 }}>
                    <CategoryPicker
                        categories={CATEGORIES.filter((category) => !categories.includes(category))}
                        inputValue={inputValue}
                        onInputChange={(_event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        value={value}
                        onChange={(_event, newValue: string | null) => {
                            setValue(newValue);
                        }}
                        onBlur={() => {
                            if (value !== inputValue) setValue(null);
                        }}
                        onClick={handleCategoryAdd}
                        autocompleteDisabled={categories.length >= 5}
                        addButtonDisabled={shouldDisableAddButton()}
                    />
                    <Box display={'flex'} justifyContent={'center'} gap={4} pt={12}>
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
                            {categories.length > 0 ? 'Next' : 'Anything'}
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default HomePage;
