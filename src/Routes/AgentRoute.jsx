import { Navigate } from "react-router-dom";
import useCheckRole from "../Hooks/useCheckRole";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { MyContext } from "../Components/Context/Context";
import Preloader from "../Components/Preloader/Preloader";
const AgentRoute = ({children}) => {
    const { user } = useContext(MyContext)
    const [ role , isRolePending] = useCheckRole();
    if(!user || isRolePending) return <Preloader />
    if(!role) return <Navigate to="/"/>
    return children
};

export default AgentRoute;
AgentRoute.propTypes = {
    children : PropTypes.node
}
