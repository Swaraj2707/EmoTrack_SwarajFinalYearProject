// import React from "react";
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Card from '@mui/material/Card';
// import GoogleAuth from "./GoogleAuth";
// import LogoColoured from '../../assets/images/emotrack.png';
// import '../../../css/styles/Auth.scss';

// const AuthContainer = () => {
//     return (
//         <>
//             <div className="googleAuthContainer">
//                 <Card className="whiteBox authCard">
//                     <img src={LogoColoured} alt="logo" width="200px" className="logo" />
//                     <GoogleOAuthProvider clientId="1009385579355-a1ds847gi0od4ppsnu97gj1s1u4vmr6o.apps.googleusercontent.com">
//                         <GoogleAuth />
//                     </GoogleOAuthProvider>
//                 </Card>
//             </div>
//             <section className="section-bubble-top"></section>
//             <section className="section-bubble-bottom"></section>
//         </>
//     );
// }

// export default AuthContainer;

import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Card from '@mui/material/Card';
import GoogleAuth from "./GoogleAuth";
import LogoColoured from '../../assets/images/emotrack.png';
import '../../../css/styles/Auth.scss';

const AuthContainer = () => {
    return (
        <>
            <div className="googleAuthContainer">
                <Card className="whiteBox authCard">
                    <img src={LogoColoured} alt="logo" width="200px" className="logo" />
                    <GoogleOAuthProvider clientId="1009385579355-a1ds847gi0od4ppsnu97gj1s1u4vmr6o.apps.googleusercontent.com">
                        <GoogleAuth />
                    </GoogleOAuthProvider>
                </Card>
            </div>
            <section className="section-bubble-top"></section>
            <section className="section-bubble-bottom"></section>
        </>
    );
}

export default AuthContainer;

