
import { Box,Container,Stack,Typography,Link,Button,useMediaQuery, IconButton} from "@mui/material";
import logo from"../../assets/logo.png"
import styles from "./NavBar.module.css"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


function NavBar (){
    const matches = useMediaQuery('(max-width:900px)');
    const[open, setOpen] = useState(false)

    return (
        <header>
         <Box bgcolor="primary.main" p={1}>
            <Typography fontSize={14} textAlign="center" color="#fff">
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
            </Typography>
         </Box>

         <Container maxWidth="xl">
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between"py={2}>
               <Link to="/">
                  <img src={logo} alt="medify" heigth={30} />
               </Link>

               <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={4}
                    alignItems={{ xs: "flex-start", md: "center" }}
                    className={[styles.navlinks, open && styles.active]}
                    pt={{ xs: 12, md: 1 }}
                    pb={{ xs: 4, md: 1 }}
                    px={{ xs: 4, md: 0 }}
                >
                    <Link>Find Doctors</Link>
                    <Link to="/search">Hospitals</Link>
                    <Link>Medicines</Link>
                    <Link>Surgeries</Link>
                    <Link>Software for Provider</Link>
                    <Link>Facilities</Link>
                    <Link to="/my-bookings">
                    <Button variant="contained" disableElevation>
                        My Bookings
                    </Button>
                    </Link>

                    {matches && (
                        <IconButton onClick={()=>setOpen(false)}  sx={{
                            position: "absolute",
                            top: 0,
                            right: 32,
                            color: "#fff",
                          }}>
                            <CloseIcon/>
                        </IconButton>
                    )}
                 </Stack>

                    {matches && (
                        <IconButton onClick={() => setOpen(true)}>
                          <MenuIcon />
                       </IconButton>
                    )}
                </Stack>
            </Container>

        </header>
    )
}


export default NavBar;