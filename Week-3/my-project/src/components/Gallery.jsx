export default function Gallery(){
    const dataFoto = [
        {
            id: 1,
            judul: "Switzerland, heaven",
            url: "https://fastly.picsum.photos/id/806/400/250.jpg?grayscale&hmac=AIBUbhARFB3fhfp2wJRNHFjBlOXWfccFrgIBD02EmXE",
            date: "15/12/2020"
        },
        { 
            id: 2,
            judul: "City that never sleeps",
            url: "https://fastly.picsum.photos/id/344/400/250.jpg?grayscale&hmac=otpvntn_lidLmHKhNy7X239M_Ndi387CcWQzhJ1MBQA",
            date: "23/01/2021"

        },
        { 
            id: 3,
            judul: "One of a gazillion bubble",
            url: "https://fastly.picsum.photos/id/1053/400/250.jpg?grayscale&hmac=bFfooq-bZSaRiVK7qDrvGpNO5wkK-OTTNHVEFHGR5kQ",
            date: "04/03/2021"

        },
        { 
            id: 4,
            judul: "Together does matter",
            url: "https://fastly.picsum.photos/id/54/400/250.jpg?grayscale&hmac=4rqkglwXI-PEsARsLdo-tdArZ2jydlTW_b6ISskz_8M",
            date: "18/09/2021"

        },
        { 
            id: 5,
            judul: "Streets of London",
            url: "https://fastly.picsum.photos/id/405/400/250.jpg?grayscale&hmac=i5SEPtuBvTT0xQRVYjw7kAj1F_6VYPbBXS9ndrNywas",
            date: "29/11/2021"

        },
        { 
            id: 6,
            judul: "You think you're alone, but you aren't",
            url: "https://fastly.picsum.photos/id/625/400/250.jpg?grayscale&hmac=vDjWu8U56YebKXtUkPLmXgm9zuxSaEtFgVCye-9ifC8",
            date: "28/12/2021"

        },
    ];

    return (
        <div className="p-5 bg-white flex-col">
            <h2 className="font-cormorant text-5xl text-center mt-16 text-black my-4">Timeline</h2>
            <div className="w-max-3xl flex flex-wrap justify-center">
                {dataFoto.map((foto) => (
                    <div id={foto.id} className="m-12 w-1xl">
                        <img className="customwidth shadow-xl rounded-sm" src={foto.url}></img>
                        <h3 className="mt-1 text-lg font-sans">{foto.judul}</h3>
                        <p className="text-sm">{foto.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}