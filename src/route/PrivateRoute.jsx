import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useAuth()
    const location = useLocation()

    if(loading) {
        return <Spinner color="blue" />
    }
    if(!user) {
        return <Navigate state={location.pathname} to={'/login'}/>
    }
    return children
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}