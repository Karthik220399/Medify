
import pinterest from "../../assets/pinterest.png"
import facebook from "../../assets/facebook.png"
import twiter from "../../assets/twiter.png"
import youtube from "../../assets/youtube.png"
import logo from "../../assets/logo.png"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import {Box, Container, Grid, Stack ,Link, Typography} from "@mui/material"

function Footer () {

    function FooterLink({ children }) {
        return (
            <Link underline="none" color='#fff' fontWeight={300} fontSize={14}>
                <Stack direction='row' gap={0.5}>
                    <KeyboardArrowRightIcon />
                    {children}
                </Stack>
            </Link>
        )
    }


    return (
        <Box bgcolor="primary.secondary" pb={3} pt={6}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4.5} >
                       <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
                            <Box component="img" src={logo} height={36} alt="medify"/>
                             <Stack direction="row" spacing={1} >
                                 <Box component="img" src={facebook} height={36}></Box>
                                 <Box component="img" src={twiter} height={36}></Box>
                                 <Box component="img" src={youtube} height={36}></Box>
                                 <Box component="img" src={pinterest} height={36}></Box>
                             </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2.5}>
                        <Stack spacing={2}>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>Our Pricing</FooterLink>
                            <FooterLink>Our Gallery</FooterLink>
                            <FooterLink>Appointment</FooterLink>
                            <FooterLink>Privacy Policy</FooterLink>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2.5}>
                        <Stack spacing={2}>
                        <FooterLink>About Us</FooterLink>
                        <FooterLink>Our Pricing</FooterLink>
                        <FooterLink>Our Gallery</FooterLink>
                        <FooterLink>Appointment</FooterLink>
                        <FooterLink>Privacy Policy</FooterLink>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={2.5}>
                        <Stack spacing={2}>
                        <FooterLink>Orthology</FooterLink>
                        <FooterLink>Neurology</FooterLink>
                        <FooterLink>Dental Care</FooterLink>
                        <FooterLink>Opthalmology</FooterLink>
                        <FooterLink>Cardiology</FooterLink>
                        </Stack>
                    </Grid>
                </Grid>
                    <Typography
                        fontWeight={300}
                        color="#fff"
                        fontSize={14}
                        pt={3}
                        mt={5}
                        borderTop="1px solid rgba(255,255,255,0.1)"
                        >
                        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                        </Typography>
              
            </Container>
        </Box>
    )
}


export default Footer;