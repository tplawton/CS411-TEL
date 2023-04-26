import {useEffect} from 'react';

const OAuth = () => {
    function HandleCallback(response) {
        console.log("Encoded JWT ID token: " + response.credential);
    }

    useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
        client_id: "648820498735-l6f0mvbfbobovibli5e2503vf3thvqoj.apps.googleusercontent.com",
        callback: HandleCallback
    });
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
    );
    }, []);
    
    return (
        <div className="OAuth">
            <div id="signInDiv"></div>
        </div>
    );
}

export default OAuth;