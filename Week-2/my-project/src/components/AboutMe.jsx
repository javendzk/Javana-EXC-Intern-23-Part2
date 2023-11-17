import fotogue from '../assets/javna.png'

export default function AboutMe({id}) {
    return (
        <div id={id} className="flex bg-white">
            <div className="flex centeritems- justify-end w-2/5">
                <img src={fotogue} className="w-96 my-20 ml-28"></img>
            </div>
            <div className="flex-1 flex flex-col mt-28 text-justify ml-12">
                <h1 className="font-cormorant2 text-6xl">About Me.</h1>
                <p className="font-normal text-xl mr-36 pt-4">Hello there, Name's Javana. You can call me Javen. I'm a first year computer engineering student from University of Indonesia, a person who is passionate about learning and making new connections. My hobbies include gaming, sleeping, and photography.
                </p>
                <p className="font-normal text-xl mr-36 pt-4">Currently seeking to collaborate on projects and competitions. Feel free to reach me out through the contact me section below. Can't wait to see you soon!
                </p>
            </div>
        </div>
    )
}