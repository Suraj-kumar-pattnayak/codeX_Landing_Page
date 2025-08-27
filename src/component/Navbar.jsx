import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import { yellow } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#feature' },
];

export default function Navbar() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "black", borderBottom: "1px solid white" }} elevation={2}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: "white" }}>
          Code<span style={{ color: yellow[700] }}>X</span>
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleMenuClose}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'black',
                  border: '1px solid #555',
                }
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.label} onClick={handleMenuClose} component="a" href={item.href} sx={{ color: "white", "&:hover": { color: yellow[700], bgcolor: '#1a1a1a' } }}>
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem onClick={handleMenuClose} component="a" href="#contests" sx={{ color: yellow[700], fontWeight: 'bold', "&:hover": { bgcolor: '#1a1a1a' } }}>
                Start Coding
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            {navItems.map((item) => (
              <Button key={item.label} href={item.href} sx={{ color: "white", "&:hover": { color: yellow[700] } }}>
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href="#contests"
              sx={{
                ml: 2,
                bgcolor: yellow[700],
                color: "black",
                fontWeight: "bold",
                "&:hover": { bgcolor: yellow[800] }
              }}
            >
              Start Coding
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}