import { useState } from "react"

export default function ContactMe({id}) {
    let isSubjectValid = false, isMessageValid = false;
    const [subjectLength, setSubjectLength] = useState(0);
    const [messageLength, setMessageLength] = useState(0);
    const [subjectValue, setSubjectValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    function submitForm() {
        isSubjectValid = subjectLength >= 5 && subjectLength <= 20;
        isMessageValid = messageLength >= 20 && messageLength <= 540;
        if (isMessageValid == true && isSubjectValid == true) {
            executeMailTo();
        } else if (isMessageValid == true && isSubjectValid != true) {
            alert("The subject input hasn't met the required input length! (5-20 Characters)");
        } else if (isMessageValid != true && isSubjectValid == true) {
            alert("The message hasn't met the required input length! (20-540 Characters)");
        } else {
            alert("The subject and message input haven't met the required input length!");
        }
    }

    function executeMailTo(){
        const link = `https://mail.google.com/mail/?view=cm&fs=1&to=javana.dz@gmail.com&su=${subjectValue}&body=${messageValue}`;
        console.log(link);
        window.open(link);
    }

    return (
        <div id={id} className="flex bg-slate-100">
            <div className="w-1/2 flex items-center justify-end">
                <h2 className="my-44 mr-28 text-5xl text-black font-cormorant2 leading-normal">Have a good <br></br>project idea?<br></br>Lets Chat!</h2>
            </div>
            <div className="flex flex-col flex-1 items-start justify-center ml-20" >
                <label for="subject" className="font-normal text-lg mb-1">Subject</label>
                <textarea onChange={(e)=>{ setSubjectLength(e.target.value.length); setSubjectValue(e.target.value)}} id="subject" className="bg-white h-10 w-96 resize-none rounded-sm mb-4 py-1.5 px-2 border1pxblack"></textarea>
                <label for="message" className="font-normal text-lg mb-1">Message</label>
                <textarea onChange={(e)=>{ setMessageLength(e.target.value.length); setMessageValue(e.target.value)}} id="message" className="bg-white h-32 w-96 resize-none rounded-sm mb-6 py-1.5 px-2 border1pxblack"></textarea>
                <button onClick={submitForm}className="border1pxblack rounded-sm w-20 h-8 hover:bg-black hover:text-white transition duration-150">Send</button>
            </div>
        </div>
    )
}