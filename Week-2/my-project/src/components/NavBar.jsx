import javn from '../assets/javn.svg'

export default function NavBar({}) {
    return (
        <header class="h-20 flex justify-between items-center px-32 border-b border-black fixed- top-0 w-full z-50 bg-white shadow-md">
            <img src={javn} alt="Javn Logo" class="mb-3 h-12 float-left mt-2.5 ml-2.5"></img>
            <nav class="font-cormorant">
                <ul class="px-24">
                    <li class="mr-20 text-lg inline-block transition duration-300 hover:text-stone-600 hover:translate-y-[-2px]"><a href="#">About Me</a></li>   
                    <li class="text-lg inline-block transition duration-300 hover:text-stone-600 hover:translate-y-[-2px]"><a href="#">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}