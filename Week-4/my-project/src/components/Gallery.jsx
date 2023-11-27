import axios from "axios"
import { useEffect, useState } from "react"

export default function Gallery(){
    const [post, setPost] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async() => {
            try {
                const photoResponse = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=12");
                const dateResponse = await axios.get("https://date.nager.at/api/v3/PublicHolidays/2023/US");
                {/*disini pakai date API apa aja yang ketemu, yang penting ada hehe*/}
                const photoData = photoResponse.data.photos;
                const dateData = dateResponse.data;
                const proccessPost = photoData.map(photo => ({
                    ...photo,
                    date: dateData.map(item => item.date)[photo.id] || 'invalid'
                }));
                setPost(proccessPost);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchPost();
    }, []);

    if (loading){
        return (
            <div className="flex flex-col items-center justify-center my-20">
                <h1 className="font-cormorant text-5xl text-center text-black my-4">Timeline</h1>
                <h2 className="text-3xl mt-12 text-gray-400 justify-center">(″･ิ_･ิ)っ</h2>
                <h3 className="text-xl my-4 text-gray-400 justify-center">API Loading . . .</h3>
            </div>
        )
    }

    if (error){
        return (
            <div className="flex flex-col items-center justify-center my-20">
                <h1 className="font-cormorant text-5xl text-center text-black my-4">Timeline</h1>
                <h2 className="text-3xl mt-12 text-gray-400 justify-center">(ㅠ﹏ㅠ)</h2>
                <h3 className="text-xl my-4 text-gray-400 justify-center">API Request Error</h3>
            </div>
        )
    }

    return (
        <div className="p-5 bg-white flex-col">
            <h2 className="font-cormorant text-5xl text-center mt-16 text-black my-4">Timeline</h2>
            <div className="w-max-3xl flex flex-wrap justify-center">
                {post.map((post) => (
                    <div id={post.id} key={post.id} className="mx-12 my-10 h-2xl w-1xl">
                        <img className="imgdisplay shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-sm" src={post.url}></img>
                        <h3 className="mt-1 text-lg font-sans max-w-md whitespace-nowrap overflow-hidden text-ellipsis">{post.title}</h3>
                        <p className="text-md font-normal text-gray-600">{post.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
