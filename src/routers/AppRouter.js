import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from "./PrivateRoute";
import {AuthContext} from "../auth/AuthContext";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {

    const {user: {logged}} = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        isAuthenticated={logged}
                        component={LoginScreen}/>


                    <PrivateRoute
                        path="/"
                        isAuthenticated={logged}
                        component={DashboardRoutes}/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
