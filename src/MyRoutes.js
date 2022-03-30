import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './pages/Form';
import Error from './pages/Error';
import Counter from './pages/Counter';
import Cook from './pages/Cook';
import Todo from './pages/Todo';
import Layout from './Layouts/Layout';


const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/counter' element={<Counter />}/>
                    <Route path='/cook' element={<Cook />}/>
                    <Route path='/form' element={<Form />}/>
                    <Route path='/' element={<Todo />}/>
                    <Route path='*' element={<Error />}/>
                </Route>
            </Routes>
        </Router>
    );
};

export default MyRoutes;