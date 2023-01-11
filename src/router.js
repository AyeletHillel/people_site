// createBrowserRouter is a client side routing method for a Route object that can then be used to read URL and serve up components
// createRoutesFromElements is a helper method that builds an appropriate argument for CreateBrowserRouter to take
// A Route is an object that holds a particular path and react component that can be served up.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import App from './App';
import { peopleLoader, personLoader } from './loader';
import {createAction, updateAction, deleteAction} from "./actions";
import Index from './pages/Index';
import Show from './pages/Show';

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App/>}>
                <Route path="" element={<Index/>} loader={peopleLoader}/>
                <Route path=":id" element={<Show/>} loader={personLoader}/>
                <Route path="create" action={createAction}/>
                <Route path="update/:id" action={updateAction}/>
                <Route path="delete/:id"action={deleteAction}/>
        </Route>

    )

);

export default router;
