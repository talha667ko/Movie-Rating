import { Button, Menu } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () =>{

    const isLoggedIn = localStorage.getItem("guest_session_id") !== null;

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("guest_session_id");
        navigate("/auth");
    }
    return (
    <Menu fixed="top" size="huge" style={{backgroundColor: "black", border: "2px solid rgb(96, 11, 184)"}}>
        <Menu.Item as={Link} to="/" style={{fontweight: "bold", fontSize: "1.5rem", backgroundColor:"black", color: "rgb(96, 11, 184)"}}> 
            Home
        </Menu.Item>
        <Menu.Item as={Link} to="/rated" style={{ fontSize: "1.5rem", backgroundColor:"black", color: "rgb(96, 11, 184)"}}> 
            Rated
        </Menu.Item>
        <Menu.Menu position="right">
            {isLoggedIn ? (
            <Menu.Item as={Button} style={{ fontSize: "1.5rem", backgroundColor:"black", color: "rgb(96, 11, 184)"}} onClick={logout}> 
                Logout
            </Menu.Item>
        ) : (
            <Menu.Item as={Link} to="/auth" style={{ fontSize: "1.5rem", backgroundColor:"black", color: "rgb(96, 11, 184)"}}> 
                Auth
            </Menu.Item>
        )}
        </Menu.Menu>
    </Menu>
    );
};
/*API aead35f3bd02266981d626e10b63ac1d */