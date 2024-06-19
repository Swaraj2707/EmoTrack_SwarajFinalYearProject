




// import React, { Suspense } from "react";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import LinearProgress from '@mui/material/LinearProgress';
// import LandingPage from './static/js/components/landing-page/LandingPage';
// import AuthContainer from "./static/js/components/auth/AuthContainer";
// import PagesContainer from "./static/js/components/pages/PagesContainer";
// import Dashboard from "./static/js/components/pages/dashboard/Dashboard";
// import Sap from "./static/js/components/pages/sap/Sap";
// import Eap from "./static/js/components/pages/eap/Eap";
// import SetReminders from './static/js/components/pages/set-reminders/SetReminders';
// import RelaxingActivities from "./static/js/components/pages/relaxing-activities/RelaxingActivities";
// import DailyActivities from "./static/js/components/pages/daily-activities/DailyActivities";
// import EducationalResources from "./static/js/components/pages/educational-resources/EducationalResources";
// import Achievements from "./static/js/components/pages/achievements/Achievements";
// import Leaderboard from "./static/js/components/pages/leaderboard/Leaderboard";
// import Profile from "./static/js/components/pages/profile/Profile";
// import Depression from "./static/js/components/pages/sap/Depression";
// import './static/css/App.scss';

// function App() {
//     const loading = useSelector((store) => store.app.barLoading);

//     return (
//         <Suspense fallback={<div>Please wait while loading...</div>}>
//             {loading ? <LinearProgress /> : ""}

//             <div className="app">
//                 <HashRouter>
//                     <Routes>
//                         <Route path="/" element={<LandingPage />} />
//                         <Route path="/auth/login" element={<AuthContainer />} />

//                         <Route path="/pages/*" element={<PagesContainer />}>
//                             {/* <Route path="/sap" element={<Sap />} /> */}
//                             {/* <Route path="/eap" element={<Eap />} />
//                             <Route path="/set-reminders" element={<SetReminders />} />
//                             <Route path="/relaxing-activities" element={<RelaxingActivities />} />
//                             <Route path="/daily-activities" element={<DailyActivities />} />
//                             <Route path="/educational-resources" element={<EducationalResources />} />
//                             <Route path="/achievements" element={<Achievements />} />
//                             <Route path="/leaderboard" element={<Leaderboard />} />
//                             <Route path="/profile" element={<Profile />} />
//                             <Route path="/sap/depression" element={<Depression />} /> */}
//                         </Route>

//                         <Route path="/dashboard" element={<Dashboard />} />                        
//                         <Route path="/sap" element={<Sap />} />
//                         <Route path="/eap" element={<Eap />} />
//                             <Route path="/set-reminders" element={<SetReminders />} />
//                             <Route path="/relaxing-activities" element={<RelaxingActivities />} />
//                             <Route path="/daily-activities" element={<DailyActivities />} />
//                             <Route path="/educational-resources" element={<EducationalResources />} />
//                             <Route path="/achievements" element={<Achievements />} />
//                             <Route path="/leaderboard" element={<Leaderboard />} />
//                             <Route path="/profile" element={<Profile />} />
//                             <Route path="/sap/depression" element={<Depression />} />
                            
//                         <Route path="*" element={<AuthContainer />} />
//                     </Routes>
//                 </HashRouter>
//             </div>
//         </Suspense>
//     );
// }

// export default App;

//


import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import LinearProgress from '@mui/material/LinearProgress';
import LandingPage from './static/js/components/landing-page/LandingPage';
import AuthContainer from "./static/js/components/auth/AuthContainer";
import PagesContainer from "./static/js/components/pages/PagesContainer";
import Dashboard from "./static/js/components/pages/dashboard/Dashboard";
import Sap from "./static/js/components/pages/sap/Sap";
import Eap from "./static/js/components/pages/eap/Eap";
import SetReminders from './static/js/components/pages/set-reminders/SetReminders';
import RelaxingActivities from "./static/js/components/pages/relaxing-activities/RelaxingActivities";
import DailyActivities from "./static/js/components/pages/daily-activities/DailyActivities";
import EducationalResources from "./static/js/components/pages/educational-resources/EducationalResources";
import Achievements from "./static/js/components/pages/achievements/Achievements";
import Leaderboard from "./static/js/components/pages/leaderboard/Leaderboard";
import Profile from "./static/js/components/pages/profile/Profile";
import Depression from "./static/js/components/pages/sap/Depression";

import './static/css/App.scss';

function App() {
    const loading = useSelector((store) => store.app.barLoading);

    return (
        <Suspense fallback={<div>Please wait while loading...</div>}>
            {loading ? <LinearProgress /> : ""}

            <div className="app">
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/auth/login" element={<AuthContainer />} />

                        <Route path="/pages/*" element={<PagesContainer />}>
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="sap" element={<Sap />} />
                            <Route path="eap" element={<Eap />} />
                            <Route path="set-reminders" element={<SetReminders />} />
                            <Route path="relaxing-activities" element={<RelaxingActivities />} />
                            <Route path="daily-activities" element={<DailyActivities />} />
                            <Route path="educational-resources" element={<EducationalResources />} />
                            <Route path="achievements" element={<Achievements />} />
                            <Route path="leaderboard" element={<Leaderboard />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="sap/depression" element={<Depression />} />
                        </Route>

                        <Route path="*" element={<AuthContainer />} />
                    </Routes>
                </HashRouter>
            </div>
        </Suspense>
    );
}

export default App;


