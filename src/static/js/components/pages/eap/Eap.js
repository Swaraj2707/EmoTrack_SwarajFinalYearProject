// import React, {
//     useState,
//     useEffect
// } from "react";
// import {
//     InlineWidget
// } from "react-calendly";

// import CustomLoader from "../../common/CustomLoader";

// const Eap = () => {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 1100);
//     }, []);

//     return ( <
//         > {
//             isLoading && < CustomLoader / >
//         }

//         <
//         div style = {
//             {
//                 marginTop: "-6% ",
//                 height: "94vh"
//             }
//         } >
//         <
//         InlineWidget className = "calendly-block-1"
//         url = "https://calendly.com/baibhavtiwari37/one-on-one-with-me"
//         styles = {
//             {
//                 height: "94vh",
//                 width: "100%"
//             }
//         } > < /InlineWidget> <
//         /div> <
//         />
//     );
// };

// export default Eap;

import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

import CustomLoader from "../../common/CustomLoader";

const Eap = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1100);
    }, []);

    return (
        <>
            {isLoading ? <CustomLoader /> : null}
            <div style={{ marginTop: "-6%", height: "94vh" }}>
                <InlineWidget
                    className="calendly-block-1"
                    url="https://calendly.com/singhswaraj521/30min"
                    styles={{ height: "94vh", width: "100%" }}
                />
            </div>
        </>
    );
};

export default Eap;
