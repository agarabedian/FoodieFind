import React from 'react';
import { Autocomplete, Box, Button, TextField } from '@mui/material';

interface CategoryPickerProps {
    inputValue: string;
    value: string | null;
    onClick: (change: string | null) => void;
    onInputChange: (event: React.ChangeEvent<object>, newInputValue: string) => void;
    onChange: (event: React.ChangeEvent<object>, newValue: string | null) => void;
    onBlur: () => void;
    categories: string[];
    autocompleteDisabled: boolean;
    addButtonDisabled: boolean;
}

/**
 *
 * @param props
 */
const CategoryPicker = (props: CategoryPickerProps): React.ReactElement<CategoryPickerProps> => (
    <Box display={'flex'} justifyContent={'center'} gap={4}>
        <Autocomplete
            value={props.value}
            onChange={props.onChange}
            inputValue={props.inputValue}
            onInputChange={props.onInputChange}
            options={props.categories}
            renderInput={(params) => <TextField {...params} label='Categories' />}
            sx={{ width: 300 }}
            onBlur={props.onBlur}
            disabled={props.autocompleteDisabled}
        />
        <Button variant='contained' disabled={props.addButtonDisabled} onClick={() => props.onClick(props.value)}>
            {'Add'}
        </Button>
    </Box>
);

export default CategoryPicker;
