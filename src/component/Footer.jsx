import React from 'react'
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import { yellow } from '@mui/material/colors';

const Footer = () => {
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Features", href: "#feature" },
        { label: "Contests", href: "#contests" }
    ];

    return (
        <Box
            component="footer"
            sx={{ bgcolor: "black", color: "white", py: 3, borderTop: "1px solid white" }}
        >
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                underline="none"
                                sx={{
                                    mx: 2,
                                    mb: 3,
                                    fontSize: "0.9rem",
                                    color: "grey.400",
                                    transition: "0.3s",
                                    "&:hover": { color: yellow[700] },
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body2" color="grey.500">
                        © {new Date().getFullYear()} CodeX. All Rights Reserved.
                    </Typography>

                    <Box>
                        <IconButton
                            href="mailto:surajkumarpattnayak@gmail.com"
                            sx={{ color: "grey.400", "&:hover": { color: yellow[700] } }}
                        >
                            <EmailIcon />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/suraj-pattanayak-447471282/"
                            sx={{ color: "grey.400", "&:hover": { color: yellow[700] } }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            href="https://github.com/Suraj-kumar-pattnayak"
                            sx={{ color: "grey.400", "&:hover": { color: yellow[700] } }}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
