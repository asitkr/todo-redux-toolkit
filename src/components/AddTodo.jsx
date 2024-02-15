import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux-toolkit/slices/todoSlice';
import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';

const AddTodo = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState();

    const addTodoHandler = (e) => {
        e.preventDefault();

        if (input) {
            dispatch(addTodo(input));
            setInput('');
        }
    }

    return (
        <Box sx={{ padding: '20px' }}>
            <form onSubmit={addTodoHandler} className="form__wrapper">
                <FormControl 
                    fullWidth 
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <InputLabel>Todo</InputLabel>
                    <Input
                        // size='small'
                        fullWidth
                        value={input}
                        disableUnderline={true}
                        sx={{
                            outline: '1px solid rgba(131,153,167,0.6)',
                            borderRadius: '10px',
                            padding: '5px 10px',
                            
                        }}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <Button
                        disabled={!input}
                        fullWidth
                        variant="contained"
                        type="submit"
                        sx={{
                            width: '20px',
                            mt: 2,
                            ml: 1,
                            height: '45px',
                            borderRadius: '15px',
                            textTransform: 'capitalize',
                            fontWeight: 500,
                        }}
                    >
                        Add
                    </Button>
                </FormControl>
            </form>
        </Box>
    )
}

export default AddTodo;