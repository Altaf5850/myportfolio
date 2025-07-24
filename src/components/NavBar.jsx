import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery, useTheme } from "@mui/material";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const renderMenuItems = () => (
    <List>
      {menuItems.map((item) => (
        <ListItem component="a" href={item.href} key={item.label}>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className="fixed z-[999] w-full">
      <AppBar position="static">
        <Toolbar className="bg-slate-800 gap-4">
          <Typography
            variant="h6"
            component="div"
            className="flex-grow text-[#00FF33] font-[Lobster]"
          >
            Pathan
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {renderMenuItems()}
              </Drawer>
            </>
          ) : (
            menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                color="inherit"
                className="hover:text-white transition duration-300"
              >
                {item.label}
              </a>
            ))
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
