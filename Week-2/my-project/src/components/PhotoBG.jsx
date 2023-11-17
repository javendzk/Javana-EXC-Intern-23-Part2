import foto from '../assets/foto-latar.jpg'

export default function PhotoBG({id}) {
    return (
        <div id={id} className="relative">
            <img src={foto} classNameName="w-full h-full object-cover" alt="Background" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="font-cormorant2 text-7xl hshadow">Javana Muhammad Dzaki</h1>
                <p className="font-extralight tracking-widest hshadow">a seasonal photographer</p>
            </div>
        </div>
    )
}