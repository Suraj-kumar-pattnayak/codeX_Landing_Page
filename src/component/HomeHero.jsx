import { Box, Container, Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';
import Spline from '@splinetool/react-spline';

const HomeHero = () => {
  return (
    <Box id="home" sx={{ pt: 15, pb: 3, bgcolor: 'black', color: 'white', minHeight: '100vh', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          Sharpen Your <span style={{ color: yellow[700] }}>Coding </span>Skills. <br />
          <span style={{ color: yellow[700] }}>Conquer </span> Every <span style={{ color: yellow[700] }}>Contest</span>.
        </Typography>
        <Typography variant="h6" gutterBottom>
          From beginner to pro, CodeX helps you master algorithms, data structures, and problem-solving through practice, contests, and tutorials.
        </Typography>
        
        <Box sx={{ mt: 6 }}>
          <Spline scene="https://prod.spline.design/UpnRKfPzp06tjyoY/scene.splinecode"
            style={{ width: '100%', borderRadius: '12px' }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero