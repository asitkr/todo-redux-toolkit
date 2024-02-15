import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../redux-toolkit/slices/todoSlice';
import { Box, Button, FormControl, Input, InputLabel, Modal, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);
    const [open, setOpen] = useState(false);
    const [updateInputValue, setUpdateInputValue] = useState('');

    const handleOpen = (text) => {
        setOpen(true);
        setUpdateInputValue(text);
    };
    const handleClose = () => {
        setOpen(false);
        setUpdateInputValue('');
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        if(updateInputValue) {
            dispatch(updateTodo(updateInputValue));
            setOpen(false);
            setUpdateInputValue('');
        }
    }

    return (
        <>
            {
                todos.length > 0 && (
                    <Box sx={{
                        width: '80%',
                        bgcolor: '#fff',
                        margin: '0px auto',
                        borderRadius: '15px',
                    }}>
                        <Typography variant='h4' sx={{
                            padding: '10px',
                            textAlign: 'center',
                        }}>Todo's List</Typography>
                        <Box component={'ul'} sx={{
                            listStyle: 'none',
                            padding: '10px 50px'
                        }}>
                            {
                                todos && todos?.map(todo => (
                                    <Box
                                        key={todo.id}
                                        component={'li'}
                                        sx={{
                                            bgcolor: '#e6e6fa',
                                            padding: '8px 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            borderRadius: '10px',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        <Typography sx={{
                                            fontWeight: 600,
                                            fontSize: '18px',
                                        }}>{todo.text}</Typography>
                                        <Box>
                                            <EditIcon
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: '#0000ff',
                                                    fontSize: '2rem',
                                                    marginRight: '20px'
                                                }}
                                                onClick={() => handleOpen(todo.text)}
                                            />
                                            <DeleteIcon
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: '#ff0000',
                                                    fontSize: '2rem'
                                                }}
                                                onClick={() => dispatch(removeTodo(todo.id))}
                                            />
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                )
            }

            {
                open && (
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <form onSubmit={handleUpdate} className="form__update">
                                <FormControl
                                    fullWidth
                                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <InputLabel>Update Todo</InputLabel>
                                    <Input
                                        // size='small'
                                        fullWidth
                                        value={updateInputValue}
                                        disableUnderline={true}
                                        sx={{
                                            outline: '1px solid rgba(131,153,167,0.6)',
                                            borderRadius: '10px',
                                            padding: '5px 10px',

                                        }}
                                        onChange={(e) => setUpdateInputValue(e.target.value)}
                                    />

                                    <Button
                                        disabled={!updateInputValue}
                                        fullWidth
                                        variant="contained"
                                        type="submit"
                                        sx={{
                                            width: '100px',
                                            mt: 2,
                                            ml: 1,
                                            height: '45px',
                                            borderRadius: '15px',
                                            textTransform: 'capitalize',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Update
                                    </Button>
                                </FormControl>
                            </form>
                        </Box>
                    </Modal>
                )
            }
        </>
    )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px'
};

export default Todos;