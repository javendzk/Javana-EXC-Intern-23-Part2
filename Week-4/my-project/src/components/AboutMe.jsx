import fotogue from '../assets/javna.png'

export default function AboutMe({id}) {
    return (
        <div id={id} className="flex bg-white py-28">
            <div className="flex justify-end w-2/5">
                <img src={fotogue} className="w-96 mt-20"></img>
            </div>
            <div className="flex-1 flex flex-col mt-28 text-justify ml-24">
                <h1 className="font-cormorant2 text-6xl">About Me.</h1>
                <p className="font-normal text-xl pt-4 max-w-3xl mr-44">Hello there, Name's Javana. You can call me Javen. I'm a first year computer engineering student from University of Indonesia, a person who is passionate about learning and making new connections. My hobbies include gaming, sleeping, and photography.
                </p>
                <p className="font-normal text-xl pt-4 max-w-3xl mr-44">Currently seeking to collaborate on projects and competitions. Feel free to reach me out through the <a className="underline hover:text-gray-600 transition duration-200" href="/contact-me">contact me</a> section. Can't wait to see you soon!
                </p>
            </div>
        </div>
    )
}