import foto from '../assets/foto-latar.jpg'

export default function PhotoBG({}) {
    return (
        <div class="relative">
            <img src={foto} class="w-full"></img>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 class="font-cormorant2 text-7xl hshadow">Javana Muhammad Dzaki</h1>
                <p class="font-extralight tracking-widest hshadow">a seasonal photoprapher</p>
            </div>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
        </div>
    )
}