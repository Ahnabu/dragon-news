

import imgPlaceHolder from "../../../assets/user.png"
import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <Navbar fluid rounded className="lg:w-2/3 text-right ml-auto ">
            
            <div className="flex md:order-2  gap-2 ">
                <img src={imgPlaceHolder} alt="" className="max-h-10"/>
                <Link><Button>LogIn</Button> </Link>
                
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                
                
                <NavLink to={'/'}> Home</NavLink>
                <NavLink to={'/about'}> About</NavLink>
                <NavLink to={'/contact'}> Contact</NavLink>

                
              
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBar