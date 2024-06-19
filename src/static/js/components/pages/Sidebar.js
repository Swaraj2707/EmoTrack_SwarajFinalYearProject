

import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from "@mui/material/Divider";
import SidebarCurve from '../../assets/images/SidebarCurve.svg';
import { sidebarList } from "../Constants";
import LogoWhite from '../../assets/images/emotrack_logo.webp';

export const SidebarContents = () => {
    const activeLink = useLocation().pathname;
    const navigate = useNavigate();

    const handleSidebarItemClick = (link) => {
        navigate(link);
    }

    return (
        <List>
            <ListItem disablePadding>
                <Link to="/dashboard#/pages/dashboard" style={{ margin: "auto" }}>
                    <img src={LogoWhite} alt="logo" width="100px" style={{ margin: "auto" }} />
                </Link>
            </ListItem>
            <Divider className="divider" sx={{ margin: "13px 0" }} />
            {sidebarList.map((obj, index) => (
                <ListItem key={index} disablePadding className={obj.link === activeLink ? 'active' : ''}>
                    <ListItemButton onClick={() => handleSidebarItemClick(obj.link)}>
                        <ListItemIcon>{obj.icon}</ListItemIcon>
                        <ListItemText primary={obj.name} />
                        {obj.link === activeLink && (
                            <>
                                <span className="dot"></span>
                                <img src={SidebarCurve} alt="" className="sidebarCurve" width="15px" />
                            </>
                        )}
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}

export const Sidebar = ({ showSidebar }) => {
    return (
        <Drawer anchor="left" open={showSidebar} onClose={() => showSidebar(false)} className="sidebar">
            <SidebarContents />
        </Drawer>
    );
}