import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Github from '../assets/github.svg'


export default function Footer() {
    return (
        <div className="h-14 m-0 p-0 bg-white flex flex-col justify-center border-t border-black">
            <ul className="p-0 mt-4 bg-inherit self-center">
                <li className='mr-6 inline-block'><a target="_blank" href="https//linkedin.com"><img src={Linkedin}></img></a></li>
                <li className='inline-block'><a target="_blank" href="https://twitter.com/dxnxxog"><img src={Twitter}></img></a></li>
                <li className='ml-6 inline-block'><a target="_blank" href="https://github.com/javendzk"><img src={Github}></img></a></li>            
            </ul>
            <p className='self-center mb-4 p-0'>© 2023 Javana Muhammad</p>
        </div>
    )
}