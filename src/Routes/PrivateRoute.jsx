import { useContext } from "react";
import { MyContext } from "../Components/Context/Context";
import PropTypes from 'prop-types';
import Preloader from "../Components/Preloader/Preloader";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(MyContext);
    if (loading) {
        return <Preloader />
    }
    if (user) {
        return children
    }
    return;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}