import { useState } from "react";

function App() {
    const [mail, setMail] = useState("");
    const [message, setMessag] = useState("");

    return (
        <>
            <div className="flex justify-center p-20">
                <div className="flex flex-col ">
                    <h1 className="text-3xl mb-10 uppercase">
                        willkommen bei andmailer
                    </h1>
                    <input
                        type="email"
                        placeholder="Mailadresse"
                        className="input input-bordered mb-3"
                    />
                    <input
                        type="text"
                        placeholder="Betreff"
                        className="input input-bordered  mb-3"
                    />
                    <textarea
                        placeholder="Message"
                        className="textarea textarea-bordered textarea-lg w-full mb-5 h-72"
                    ></textarea>
                    <button className="btn btn-block text-xl bg-slate-300">
                        Senden
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
