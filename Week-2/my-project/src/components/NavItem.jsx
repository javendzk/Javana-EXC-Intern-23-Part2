export default function NavItem({title, onClick}) {
    return (
        <li className="mr-20 text-lg inline-block transition duration-300 hover:text-stone-600 hover:translate-y-[-2px]">
            <button onClick={onClick} className="cursor-pointer">{title}</button>
        </li>   
    )
}
