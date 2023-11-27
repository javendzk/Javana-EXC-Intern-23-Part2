import foto from '../assets/foto-latar.jpg'

export default function PhotoBG({id}) {
    return (
        <div id={id} className="relative">
            <img src={foto} className="w-full h-full object-cover" alt="Background" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="font-cormorant2 text-7xl hshadow whitespace-nowrap">Javana Muhammad Dzaki</h1>
                <p className="font-extralight tracking-widest hshadow mt-2 bg-black bg-opacity-50 pt-0.5 mx-60 h-8 rounded-md whitespace-nowrap">a seasonal photographer</p>
            </div>
        </div>
    )
}