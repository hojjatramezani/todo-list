import React from 'react';
import Container from '@mui/material/Container';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { pink, grey } from '@mui/material/colors';
import { useTodoState } from './../../context/TodoContext';
import DoneIcon from '@mui/icons-material/Done';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';




function Information(props) {

    const { TodoList, DoneTasksCount, TodoListDeleted } = useTodoState();

    return (
        <div>
            <Container maxWidth="lg" sx={{ py: 5, px: 1 }}>
                <Box display="flex" justifyContent={'center'}>
                    <Paper elevation={7} sx={{width: 450, maxWidth: '100%', minHeight: 450, overflow: 'hidden' }}>
                        <Box py={2} sx={{ bgcolor: pink[400] }}>
                            <Typography variant="h6" color="white" textAlign={'center'}>Information</Typography>
                        </Box>
                        <Box p={2}>
                            <Box px={1} display={"flex"} justifyContent={"space-between"}>
                                <Typography variant="body2" textAlign={'left'}>{TodoList.length ? 'All Tasks exsist' : 'List empty'}</Typography>
                                <Box display={"flex"}>
                                    <div><Typography variant="body2" textAlign={'left'}>Tasks: {TodoList.length}</Typography></div>
                                    <div><Typography variant="body2" textAlign={'left'} sx={{ pl: 2 }}>Done: {DoneTasksCount} </Typography></div>
                                </Box>
                            </Box>

                            <Paper elevation={2} sx={{ px: 2}}>

                                {
                                    TodoList.map((task, i) => {
                                        return (
                                            <div key={i}>
                                                <Grid container py={1} alignItems={"center"} >
                                                    <Grid item xs={1}>{i + 1}</Grid>
                                                    <Grid item xs>{task.name}</Grid>
                                                    <Grid item xs="auto">
                                                        {
                                                            task.checked ? <DoneIcon color={"success"} /> : <HourglassEmptyIcon color={"warning"} />
                                                        }
                                                    </Grid>
                                                </Grid>
                                                {
                                                    TodoList.length > i + 1 &&
                                                    <Divider light={true} />
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </Paper>

                            {
                                TodoListDeleted.length !== 0 &&
                                <div>
                                    <Divider sx={{ my: 4 }} />

                                    <Typography variant="body2" textAlign={'left'}>Tasks Deleted</Typography>
                                    <Paper elevation={2} sx={{ px: 2, mb: 3 }}>

                                        {
                                            TodoListDeleted.map((task, i) => {
                                                return (
                                                    <div key={i}>
                                                        <Grid container py={1} alignItems={"center"} >
                                                            <Grid item xs={1}>{i + 1}</Grid>
                                                            <Grid item xs>{task.name}</Grid>
                                                        </Grid>
                                                        {
                                                            TodoListDeleted.length > i + 1 &&
                                                            <Divider light={true} />
                                                        }
                                                    </div>
                                                );
                                            })
                                        }
                                    </Paper>
                                </div>
                            }

                        </Box>
                    </Paper>
                </Box>

            </Container>
        </div>
    );
}

export default Information;