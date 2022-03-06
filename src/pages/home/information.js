import React from 'react';
import Container from '@mui/material/Container';
import { Box, Paper, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { useTodoState } from './../../context/TodoContext';




function Information(props) {

    const { TodoList } = useTodoState();

    return (
        <div>
            <Container maxWidth="lg" sx={{ py: 5, px: 1 }}>
                <Box display="flex" justifyContent={'center'}>
                    <Paper elevation={7} sx={{ position: 'relative', pb: 8, width: 450, maxWidth: '100%', minHeight: 450, overflow: 'hidden' }}>
                        <Box py={2} sx={{ bgcolor: pink[400] }}>
                            <Typography variant="h6" color="white" textAlign={'center'}>Information</Typography>
                        </Box>
                        <Box p={2}>
                            <div>wewew</div>
                            <div>
                                {
                                    TodoList.map((task, i) => {
                                        return (
                                            <div key={i}>
                                                <div >{task.name} {task.checked ? 'true' : 'false'}</div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </Box>
                    </Paper>
                </Box>

            </Container>
        </div>
    );
}

export default Information;