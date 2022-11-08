import { NavLink } from "react-router-dom";
import './GlobalNavStyle.css';

const GlobalNav = () => {

    const navLinks = [{
        id: 1,
        to: "/", 
        value: "User List"

    },
    {
        id: 2,
        to: "/add", 
        value: "Add User"

    }
];
    return <nav >
        {navLinks.map((link)=> {
            return (
                <NavLink className="nav2" key={link.to} to={link.to} end>{link.value}</NavLink>
            )
        })}
    </nav>
}

export default GlobalNav;