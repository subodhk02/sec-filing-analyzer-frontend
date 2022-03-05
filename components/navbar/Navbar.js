// import * as React from "react";
// import { styled, alpha, useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
// import Divider from "@mui/material/Divider";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// import Drawer from "@mui/material/Drawer";

// const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     // borderRadius: theme.shape.borderRadius,
//     borderRadius: "10px",
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//         marginLeft: theme.spacing(3),
//         width: "30vw",
//     },
// }));

// const MenuTheme = styled("div")(({ theme }) => ({
//     position: "relative",
//     // borderRadius: "100%",
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     // padding: "10px",
//     width: "100%",
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create("width"),
//         width: "100%",
//         [theme.breakpoints.up("md")]: {
//             width: "20ch",
//         },
//     },
// }));

// export default function Navbar() {
//     const theme = useTheme();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//     const [state, setState] = React.useState({
//         top: false,
//         left: false,
//         bottom: false,
//         right: false,
//     });

// const isMenuOpen = Boolean(anchorEl);
// const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

// const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
// };

// const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
// };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = (event) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };

//     const toggleDrawer = (anchor, open) => (event) => {
//         if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//             return;
//         }

//         setState({ ...state, [anchor]: open });
//     };

// const menuId = "primary-search-account-menu";

// const mobileMenuId = "primary-search-account-menu-mobile";

// const renderMobileMenu = (
//     <Menu
//         anchorEl={mobileMoreAnchorEl}
//         anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//         }}
//         id={mobileMenuId}
//         keepMounted
//         transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//         }}
//         open={isMobileMenuOpen}
//         onClose={handleMobileMenuClose}
//     >
//         <MenuTheme>
//             <MenuItem onClick={handleProfileMenuOpen}>
//                 <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="primary-search-account-menu"
//                     aria-haspopup="true"
//                     color="inherit"
//                 >
//                     <AccountCircle />
//                 </IconButton>
//                 <p>Profile</p>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//                 <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="primary-search-account-menu"
//                     aria-haspopup="true"
//                     color="inherit"
//                 >
//                     <LogoutSharpIcon />
//                 </IconButton>
//                 <p>Logout</p>
//             </MenuItem>
//         </MenuTheme>
//     </Menu>
// );

// const list = (anchor) => (
//     <Box
//         sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//         role="presentation"
//         onClick={toggleDrawer(anchor, false)}
//         onKeyDown={toggleDrawer(anchor, false)}
//     >
//         <List>
//             {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//                 <ListItem button key={text}>
//                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                     <ListItemText primary={text} />
//                 </ListItem>
//             ))}
//         </List>
//         <Divider />
//         <List>
//             {["All mail", "Trash", "Spam"].map((text, index) => (
//                 <ListItem button key={text}>
//                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                     <ListItemText primary={text} />
//                 </ListItem>
//             ))}
//         </List>
//     </Box>
// );

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <SwipeableDrawer
//                 anchor="left"
//                 open={state["left"]}
//                 onClose={toggleDrawer("left", false)}
//                 onOpen={toggleDrawer("left", true)}
//             >
//                 {list("left")}
//             </SwipeableDrawer>
//             <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         sx={{ mr: 2 }}
//                         onClick={toggleDrawer("left", true)}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
//                         DA
//                     </Typography>
//                     <Search>
//                         <SearchIconWrapper>
//                             <SearchIcon />
//                         </SearchIconWrapper>
//                         <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
//                     </Search>
//                     <Box sx={{ flexGrow: 1 }} />
//                     <Box sx={{ display: { xs: "none", md: "flex" } }}>
//                         <IconButton
//                             size="large"
//                             edge="end"
//                             aria-label="account of current user"
//                             aria-controls={menuId}
//                             aria-haspopup="true"
//                             onClick={handleProfileMenuOpen}
//                             color="inherit"
//                         >
//                             <AccountCircle />
//                         </IconButton>
//                     </Box>
//                     <Box sx={{ display: { xs: "flex", md: "none" } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="show more"
//                             aria-controls={mobileMenuId}
//                             aria-haspopup="true"
//                             onClick={handleMobileMenuOpen}
//                             color="inherit"
//                         >
//                             <AccountCircle />
//                         </IconButton>
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//             {renderMobileMenu}
//             <Drawer
//             // variant="permanent"
//             // sx={{
//             //     width: 240,
//             //     flexShrink: 0,
//             //     [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
//             // }}
//             >
//                 <Toolbar />
//                 <Box sx={{ overflow: "auto" }}>
//                     <List>
//                         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//                             <ListItem button key={text}>
//                                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                                 <ListItemText primary={text} />
//                             </ListItem>
//                         ))}
//                     </List>
//                     <Divider />
//                     <List>
//                         {["All mail", "Trash", "Spam"].map((text, index) => (
//                             <ListItem button key={text}>
//                                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                                 <ListItemText primary={text} />
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Box>
//             </Drawer>
//         </Box>
//     );
// }

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { ListItem } from "@mui/material";
import SearchBar from "@components/SearchBar/SearchBar";

const drawerWidth = 240;

const MenuTheme = styled("div")(({ theme }) => ({
    position: "relative",
    // borderRadius: "100%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // padding: "10px",
    width: "100%",
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    // backgroundColor: "black",
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    // backgroundColor: "black",

    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",

    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function NavbarWrapper({ children }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const toggleDrawer = () => {
        setOpen((open) => !open);
    };

    const handleProfileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const toggleMobileDrawer = (anchor) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setState({ ...state, [anchor]: !state.left });
    };

    const menuId = "primary-search-account-menu";

    const mobileMenuId = "primary-search-account-menu-mobile";

    const profileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuTheme>
                <MenuItem onClick={handleMobileMenuClose}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <LogoutSharpIcon />
                    </IconButton>
                    <p>Logout</p>
                </MenuItem>
            </MenuTheme>
        </Menu>
    );

    const mobileDrawer = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250, marginTop: "56px" }}
            role="presentation"
            onClick={toggleMobileDrawer(anchor, false)}
            onKeyDown={toggleMobileDrawer(anchor, false)}
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    {!open && (
                        <Box>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={toggleDrawer}
                                    sx={{ marginRight: "10px" }}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={toggleMobileDrawer("left")}
                                    // onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    )}
                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
                        DA
                    </Typography>
                    <SearchBar />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            // onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {profileMenu}
            <SwipeableDrawer
                anchor="left"
                open={state["left"]}
                onClose={toggleMobileDrawer("left", false)}
                onOpen={toggleMobileDrawer("left", true)}
            >
                {mobileDrawer("left")}
            </SwipeableDrawer>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={toggleDrawer}>
                        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItemButton
                            key={text}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    ))}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItemButton
                            key={text}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}
