import React, { useState, useEffect, useRef } from 'react'
import Container from '@mui/material/Container';
import { Box, Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { pink, grey } from '@mui/material/colors';
import NotFound from '../../components/notFound';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { v4 } from 'uuid';




function Home() {
    const [newTask, setNewTask] = useState('')
    const [errText, setErrText] = useState('')
    const [tasks, setTasks] = useState([])
    const [numCecked, setNumCecked] = useState(0)

    const inpElement = useRef();

    const addNewTaskHandler = () => {
        if (newTask === '') {
            setErrText('can not empty filde ...')
        }
        else {
            setErrText('')
            setTasks([...tasks, { id: v4(), name: newTask, checked: false }])
            setNewTask('');
            inpElement.current.focus();
        }
    }

    const deletItemHandler = (id) => {
        const newTasksList = tasks.filter(task => task.id !== id)
        setTasks([...newTasksList])
    }

    const handelChecked = (e, id) => {

        const editedTaskList = tasks.map(task => {
            return task.id !== id ? task : { ...task, checked: e.target.checked }
        })
        setTasks([...editedTaskList])
    }

    useEffect(() => {
        setNumCecked(0)
        tasks.map(task => {
            if (task.checked === true) {
                setNumCecked(prev => prev + 1)
            }
        })
    }, [tasks])



    return (
        <div>
            <Container maxWidth="lg" sx={{ py: 5, px: 1 }}>
                <Box display="flex" justifyContent={'center'}>
                    <Paper elevation={7} sx={{ position: 'relative', pb: 8, width: 450, maxWidth: '100%', minHeight: 450, overflow: 'hidden' }}>
                        <Box py={2} sx={{ bgcolor: pink[400] }}>
                            <Typography variant="h6" color="white" textAlign={'center'}>ToDo List</Typography>
                        </Box>
                        <Box p={2}>
                            <Grid container >
                                <Grid item xs>
                                    <TextField
                                        error
                                        fullWidth
                                        inputRef={inpElement}
                                        helperText={errText}
                                        size='small'
                                        variant="standard"
                                        label="Add new task"
                                        color="primary"
                                        id=""
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value)}
                                        focused
                                    />
                                </Grid>
                                <Grid item xs="auto" pl={2} alignItems={'bottom'} sx={{ paddingTop: '3px' }}>
                                    <Button onClick={addNewTaskHandler} color="primary" size='large' variant="outlined">Add</Button>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box p={2}>
                            {
                                tasks.length === 0 ? <NotFound />
                                    : <FormGroup>
                                        {tasks.map((task) => (
                                            <Box display={'flex'} justifyContent="space-between" alignItems={"center"} key={task.id}>
                                                <FormControlLabel className={task.checked === true ? 'checked' : ''} control={<Checkbox onChange={(e) => handelChecked(e, task.id)} />} label={task.name} />
                                                <DeleteForeverIcon sx={{ cursor: 'pointer' }} onClick={() => deletItemHandler(task.id)} />
                                            </Box>
                                        ))}
                                    </FormGroup>
                            }
                        </Box>

                        <Box py={2} px={2} sx={{ width: '100%', bgcolor: grey[100], position: 'absolute', bottom: 0, left: 0, boxSizing: 'border-box' }} display="flex" justifyContent={"space-between"}>
                            <div>Tasks: {tasks.length}</div>
                            <div>Done: {numCecked} </div>
                        </Box>
                    </Paper>
                </Box>

            </Container>
        </div>
    )
}

export default Home