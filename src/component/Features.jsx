import React from 'react'
import { Box, Typography, Grid, Card } from '@mui/material';
import { yellow } from '@mui/material/colors';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LeaderboardIcon from "@mui/icons-material/Timeline";

const Features = () => {
  const features = [
    {
      icon: <ChecklistRtlIcon sx={{ fontSize: 40, color: yellow[700] }} />,
      title: "Practice Problems",
      desc: "Solve curated DSA and algorithm problems to sharpen your coding skills."
    },
    {
      icon: <LiveTvIcon sx={{ fontSize: 40, color: yellow[700] }} />,
      title: "Live Contests",
      desc: "Compete in timed contests and challenge your problem-solving speed."
    },
    {
      icon: <LeaderboardIcon sx={{ fontSize: 40, color: yellow[700] }} />,
      title: "Global Leaderboard",
      desc: "Track your rank and compare progress with coders worldwide."
    }
  ];

  return (
    <Box id="feature" sx={{ py: 18, px: 4, textAlign: "center", backgroundColor: "black" }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" sx={{ color: yellow[700], pb: 5 }}>
        Features
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} maxWidth="300px">
            <Card
              sx={{
                p: 3,
                borderRadius: "16px",
                textAlign: "center",
                bgcolor: "#1a1a1a",
                color: "white",
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": { transform: "translateY(-10px)", boxShadow: `0 10px 30px ${yellow[900]}33` }
              }}
            >
              {feature.icon}
              <Typography variant="h6" mt={2} sx={{ color: yellow[700] }}>
                {feature.title}
              </Typography>
              <Typography variant="body2">{feature.desc}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Features