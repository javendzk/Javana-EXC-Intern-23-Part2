import { NavLink } from "react-router-dom";

export default function NavItem({title, target}) {
    return (
        <div id="navitem" className="w-24 text-center h-8 mr-20 text-lg inline-block">
           <li><NavLink to={target} classname="cursor-pointer">{title}</NavLink></li> 
        </div>
    )
}
