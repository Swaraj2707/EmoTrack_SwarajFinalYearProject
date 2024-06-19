


//updated on 26 may 24

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { getProfile, editProfile } from "../../../redux/profile/ProfileActions"; // Updated import
import '../../../../css/styles/pages/Profile.scss';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.profile.user);

    useEffect(() => {
        if (user?.email) {
            dispatch(getProfile("user/getinfo", { email: user.email }));
        }
    }, [dispatch, user?.email]);

    const [formData, setFormData] = useState({
        firstName: user?.firstName ?? '',
        lastName: user?.lastName ?? '',
        email: user?.email ?? '',
        waterGoal: user?.waterGoal ?? 0,
        exerciseGoal: user?.exerciseGoal ?? 0,
        meditationGoal: user?.meditationGoal ?? 0,
    });

    useEffect(() => {
        setFormData({
            firstName: user?.firstName ?? '',
            lastName: user?.lastName ?? '',
            email: user?.email ?? '',
            waterGoal: user?.waterGoal ?? 0,
            exerciseGoal: user?.exerciseGoal ?? 0,
            meditationGoal: user?.meditationGoal ?? 0,
        });
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [alertSeverity, setAlertSeverity] = useState(null);
    const [alertMsg, setAlertMsg] = useState(null);

    const handleSaveClick = () => {
        dispatch(editProfile("user/editinfo", formData))
            .then(() => {
                setAlertSeverity("success");
                setAlertMsg("Profile information saved successfully");
            })
            .catch(error => {
                setAlertSeverity("error");
                setAlertMsg(error.message ?? "An error occurred");
            });

        setTimeout(() => setAlertSeverity(null), 5000);
    }

    const isSaveDisabled = () => {
        return JSON.stringify(formData) === JSON.stringify({
            firstName: user?.firstName ?? '',
            lastName: user?.lastName ?? '',
            email: user?.email ?? '',
            waterGoal: user?.waterGoal ?? 0,
            exerciseGoal: user?.exerciseGoal ?? 0,
            meditationGoal: user?.meditationGoal ?? 0,
        });
    }

    return (
        <div className="profile whiteBox">
            {alertSeverity != null &&
                <Alert severity={alertSeverity} variant="filled" sx={{ marginBottom: "15px" }}>
                    {alertMsg}
                </Alert>
            }

            <Typography variant="body" gutterBottom className="title">Personal Information</Typography>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className="personalInfo" spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField id="firstName" type="text" name="firstName" label="First Name" variant="outlined" value={formData.firstName} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="lastName" type="text" name="lastName" label="Last Name" variant="outlined" value={formData.lastName} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="email" type="email" name="email" label="Email" variant="outlined" value={formData.email} onChange={handleInputChange} />
                </Grid>
            </Grid>

            <Typography variant="body" gutterBottom className="title">Goal Information</Typography>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className="personalInfo" spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField id="waterGoal" type="number" name="waterGoal" label="Hydration Goal (Glasses)" variant="outlined" value={formData.waterGoal} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="exerciseGoal" type="number" name="exerciseGoal" label="Exercise Goal (in Seconds)" variant="outlined" value={formData.exerciseGoal} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="meditationGoal" type="number" name="meditationGoal" label="Meditation Goal (in Seconds)" variant="outlined" value={formData.meditationGoal} onChange={handleInputChange} />
                </Grid>
            </Grid>

            <Box className="buttonBox">
                <Button variant="outlined" onClick={() => navigate('/pages/dashboard')}>Cancel</Button>
                <Button variant="contained" onClick={handleSaveClick} disabled={isSaveDisabled()}>Save</Button>
            </Box>
        </div>
    );
}

export default Profile;




//updated om 27 may
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Grid, Box } from "@mui/material";
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Alert from '@mui/material/Alert';
// import { getProfile, editProfile } from "../../../redux/profile/ProfileActions";
// import '../../../../css/styles/pages/Profile.scss';

// const Profile = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const user = useSelector((store) => store.profile.user);

//     useEffect(() => {
//         if (user?.email) {
//             dispatch(getProfile("user/getinfo", { email: user.email }));
//         } else {
//             dispatch(getProfile("singhswaraj521@gmail.com")); // Example email
//         }
//     }, [dispatch, user?.email]);

//     const [formData, setFormData] = useState({
//         firstName: user?.firstName ?? '',
//         lastName: user?.lastName ?? '',
//         email: user?.email ?? '',
//         waterGoal: user?.waterGoal ?? 0,
//         exerciseGoal: user?.exerciseGoal ?? 0,
//         meditationGoal: user?.meditationGoal ?? 0,
//     });

//     useEffect(() => {
//         setFormData({
//             firstName: user?.firstName ?? '',
//             lastName: user?.lastName ?? '',
//             email: user?.email ?? '',
//             waterGoal: user?.waterGoal ?? 0,
//             exerciseGoal: user?.exerciseGoal ?? 0,
//             meditationGoal: user?.meditationGoal ?? 0,
//         });
//     }, [user]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const [alertSeverity, setAlertSeverity] = useState(null);
//     const [alertMsg, setAlertMsg] = useState(null);

//     const handleSaveClick = () => {
//         dispatch(editProfile(formData))
//             .then(() => {
//                 setAlertSeverity("success");
//                 setAlertMsg("Profile information saved successfully");
//             })
//             .catch(error => {
//                 setAlertSeverity("error");
//                 setAlertMsg(error.message ?? "An error occurred");
//             });

//         setTimeout(() => setAlertSeverity(null), 5000);
//     }

//     const isSaveDisabled = () => {
//         return JSON.stringify(formData) === JSON.stringify({
//             firstName: user?.firstName ?? '',
//             lastName: user?.lastName ?? '',
//             email: user?.email ?? '',
//             waterGoal: user?.waterGoal ?? 0,
//             exerciseGoal: user?.exerciseGoal ?? 0,
//             meditationGoal: user?.meditationGoal ?? 0,
//         });
//     }

//     return (
//         <div className="profile whiteBox">
//             {alertSeverity != null &&
//                 <Alert severity={alertSeverity} variant="filled" sx={{ marginBottom: "15px" }}>
//                     {alertMsg}
//                 </Alert>
//             }

//             <Typography variant="body" gutterBottom className="title">Personal Information</Typography>
//             <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className="personalInfo" spacing={2}>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="firstName" type="text" name="firstName" label="First Name" variant="outlined" value={formData.firstName} onChange={handleInputChange} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="lastName" type="text" name="lastName" label="Last Name" variant="outlined" value={formData.lastName} onChange={handleInputChange} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="email" type="email" name="email" label="Email" variant="outlined" value={formData.email} onChange={handleInputChange} />
//                 </Grid>
//             </Grid>

//             <Typography variant="body" gutterBottom className="title">Goal Information</Typography>
//             <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className="personalInfo" spacing={2}>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="waterGoal" type="number" name="waterGoal" label="Hydration Goal (Glasses)" variant="outlined" value={formData.waterGoal} onChange={handleInputChange} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="exerciseGoal" type="number" name="exerciseGoal" label="Exercise Goal (in Seconds)" variant="outlined" value={formData.exerciseGoal} onChange={handleInputChange} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="meditationGoal" type="number" name="meditationGoal" label="Meditation Goal (in Seconds)" variant="outlined" value={formData.meditationGoal} onChange={handleInputChange} />
//                 </Grid>
//             </Grid>

//             <Box className="buttonBox">
//                 <Button variant="outlined" onClick={() => navigate('/pages/dashboard')}>Cancel</Button>
//                 <Button variant="contained" onClick={handleSaveClick} disabled={isSaveDisabled()}>Save</Button>
//             </Box>
//         </div>
//     );
// }

// export default Profile;



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Grid, Box } from "@mui/material";
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Alert from '@mui/material/Alert';
// import axios from 'axios';
// import '../../../../css/styles/pages/Profile.scss';

// const Profile = () => {
//     // eslint-disable-next-line no-unused-vars
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const user = useSelector((store) => store.profile.user);

//     const [formData, setFormData] = useState({
//         firstName: user?.firstName ?? '',
//         lastName: user?.lastName ?? '',
//         email: user?.email ?? '',
//         waterGoal: user?.waterGoal ?? 0,
//         exerciseGoal: user?.exerciseGoal ?? 0,
//         meditationGoal: user?.meditationGoal ?? 0,
//     });

//     useEffect(() => {
//         if (user?.email) {
//             axios.get(`http://localhost:8000/api/profile/user/${user.email}`)
//                 .then(response => {
//                     const userData = response.data;
//                     setFormData({
//                         firstName: userData.firstName,
//                         lastName: userData.lastName,
//                         email: userData.email,
//                         waterGoal: userData.waterGoal,
//                         exerciseGoal: userData.exerciseGoal,
//                         meditationGoal: userData.meditationGoal,
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error fetching profile:', error);
//                 });
//         }
//     }, [user?.email]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const [alertSeverity, setAlertSeverity] = useState(null);
//     const [alertMsg, setAlertMsg] = useState(null);

//     const handleSaveClick = () => {
//         axios.post(`http://localhost:8000/api/profile/user`, formData)
//             .then(response => {
//                 console.log(response.data);
//                 setAlertSeverity("success");
//                 setAlertMsg("Profile information saved successfully");
//             })
//             .catch(error => {
//                 console.error('Error saving profile:', error);
//                 setAlertSeverity("error");
//                 setAlertMsg(error.message ?? "An error occurred");
//             })
//             .finally(() => {
//                 setTimeout(() => setAlertSeverity(null), 5000);
//             });
//     }

//     const isSaveDisabled = () => {
//         return JSON.stringify(formData) === JSON.stringify({
//             firstName: user?.firstName ?? '',
//             lastName: user?.lastName ?? '',
//             email: user?.email ?? '',
//             waterGoal: user?.waterGoal ?? 0,
//             exerciseGoal: user?.exerciseGoal ?? 0,
//             meditationGoal: user?.meditationGoal ?? 0,
//         });
//     }

//     return (
//         <div className="profile whiteBox">
//             {alertSeverity != null &&
//                 <Alert severity={alertSeverity} variant="filled" sx={{ marginBottom: "15px" }}>
//                     {alertMsg}
//                 </Alert>
//             }

//             <Typography variant="body" gutterBottom className="title">Personal Information</Typography>
//             <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className="personalInfo" spacing={2}>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="firstName" type="text" name="firstName" label="First Name" variant="outlined" value={formData.firstName} onChange={handleInputChange} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="lastName" type="text" name="lastName" label="Last Name" variant="outlined" value={formData.lastName} onChange={handleInputChange} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="email" type="email" name="email" label="Email" variant="outlined" value={formData.email} onChange={handleInputChange} />
//                 </Grid>
//             </Grid>

//             <Typography variant="body" gutterBottom className="title">Goal Information</Typography>
//             <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className="personalInfo" spacing={2}>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="waterGoal" type="number" name="waterGoal" label="Hydration Goal (Glasses)" variant="outlined" value={formData.waterGoal} onChange={handleInputChange} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="exerciseGoal" type="number" name="exerciseGoal" label="Exercise Goal (in Seconds)" variant="outlined" value={formData.exerciseGoal} onChange={handleInputChange} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField id="meditationGoal" type="number" name="meditationGoal" label="Meditation Goal (in Seconds)" variant="outlined" value={formData.meditationGoal} onChange={handleInputChange} />
//                 </Grid>
//             </Grid>

//             <Box className="buttonBox">
//                 <Button variant="outlined" onClick={() => navigate('/pages/dashboard')}>Cancel</Button>
//                 <Button variant="contained" onClick={handleSaveClick} disabled={isSaveDisabled()}>Save</Button>
//             </Box>
//         </div>
//     );
// }

// export default Profile;
