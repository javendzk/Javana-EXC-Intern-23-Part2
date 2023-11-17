import javn from '../assets/javn.svg'

export default function NavBar({items}) {
    return (
        <header className="h-20 flex justify-between items-center px-32 border-b border-black fixed top-0 w-full z-50 bg-white shadow-md">
            <img src={javn} alt="Javn Logo" className="mb-3 h-12 float-left mt-2.5 ml-2.5"></img>
            <nav className="font-cormorant">
                <ul className="px-20-">
                    {items}
                </ul>
            </nav>
        </header>
    )
}