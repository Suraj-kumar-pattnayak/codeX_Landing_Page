import React from 'react';
import { Box, Grid, Card, Typography, Button, Container } from "@mui/material";
import { yellow } from "@mui/material/colors";

const Contests = () => {
    const platforms = [
        {
            name: "LeetCode",
            logo: "https://cdn.simpleicons.org/leetcode/F79F1B",
            url: "https://leetcode.com/contest/",
            time: "Weekly: Sunday 8:00 AM IST"
        },
        {
            name: "CodeChef",
            logo: "https://cdn.simpleicons.org/codechef/5B4638",
            url: "https://www.codechef.com/contests",
            time: "Starters: Wednesday 8:00 PM IST"
        },
        {
            name: "GeeksforGeeks",
            logo: "https://cdn.simpleicons.org/geeksforgeeks/2F8D46",
            url: "https://practice.geeksforgeeks.org/contests",
            time: "Weekly: Sunday 7:30 PM IST"
        }
    ];

    return (
        <Box
            id="contests"
            sx={{
                py: { xs: 8, md: 12 },
                textAlign: "center",
                backgroundColor: "black"
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    fontWeight="bold"
                    sx={{
                        color: yellow[700],
                        pb: { xs: 4, md: 6 },
                        fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' }
                    }}
                >
                    Coding Contests
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {platforms.map((platform) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={platform.name}>
                            <Card
                                sx={{
                                    p: { xs: 2.5, sm: 3 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    borderRadius: "16px",
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                    bgcolor: "#1a1a1a",
                                    color: "white",
                                    textAlign: "center",
                                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow: `0 10px 30px ${yellow[900]}33`
                                    }
                                }}
                            >
                                <Box>
                                    <Box
                                        component="img"
                                        src={platform.logo}
                                        alt={`${platform.name} logo`}
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            mx: "auto",
                                            mb: 2
                                        }}
                                    />
                                    <Typography variant="h5" component="h3" sx={{ color: yellow[700], mb: 1, fontWeight: 'bold' }}>
                                        {platform.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3 }}>
                                        {platform.time}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            borderColor: yellow[700],
                                            color: yellow[700],
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            alignSelf: 'center',
                                            "&:hover": {
                                                backgroundColor: yellow[700],
                                                color: "black",
                                                borderColor: yellow[700]
                                            }
                                        }}
                                    >
                                        View Contests
                                    </Button>
                                </Box>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Contests;