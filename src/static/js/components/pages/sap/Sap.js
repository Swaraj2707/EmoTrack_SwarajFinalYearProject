// import React from "react";

// import {
//     Grid
// } from "@mui/material";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

// import {
//     SapList
// } from "../../Constants";
// import '../../../../css/styles/pages/EducationalResources.scss';

// const BlogCard = (obj) => {
//     return ( <
//         Card className = "whiteBox blogCard" >
//         <
//         CardContent >
//         <
//         Typography variant = "h5"
//         component = "div"
//         className = "title" > {
//             obj.title
//         } <
//         /Typography> <
//         Typography variant = "body2"
//         color = "text.secondary"
//         className = "description" > {
//             obj.description
//         }...
//         <
//         /Typography> <
//         /CardContent>

//         <
//         CardActions >
//         <
//         Button size = "small" >
//         <
//         Link href = {
//             obj.link
//         }
//         underline = "none"
//         rel = "noopener" > Check Now < /Link> <
//         /Button> <
//         /CardActions> <
//         /Card>
//     );
// }

// const Sap = () => {
//     return ( <
//         Grid container direction = "row"
//         justifyContent = "flex-start"
//         alignItems = "center"
//         spacing = {
//             3
//         } >
//         {
//             SapList.map((obj, index) => ( <
//                 Grid item key = {
//                     index
//                 }
//                 xs = {
//                     12
//                 }
//                 sm = {
//                     6
//                 } > {
//                     BlogCard(obj)
//                 } <
//                 /Grid>
//             ))
//         } <
//         /Grid>
//     );
// }

// export default Sap;


import React from "react";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { SapList } from "../../Constants";
import '../../../../css/styles/pages/EducationalResources.scss';

const BlogCard = (obj, index) => {
    return (
        <Card key={index} className="whiteBox blogCard">
            <CardContent>
                <Typography variant="h5" component="div" className="title">{obj.title}</Typography>
                <Typography variant="body2" color="text.secondary" className="description">{obj.description}...</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link href={obj.link} underline="none" rel="noopener">Check Now</Link>
                </Button>
            </CardActions>
        </Card>
    );
}

const Sap = () => {
    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={3}>
            {SapList.map((obj, index) => (
                <Grid item key={index} xs={12} sm={6}>
                    {BlogCard(obj, index)}
                </Grid>
            ))}
        </Grid>
    );
}

export default Sap;
