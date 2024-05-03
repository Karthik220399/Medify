import LookForCard from "../LookForCard/LookForCard"
import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../../assets/Doctor.png";
import drugstoreIcon from "../../assets/Drugstore.png";
import hospitalIcon from "../../assets/Hospital.png";
import capsuleIcon from "../../assets/Capsule.png";
import ambulanceIcon from "../../assets/Ambulance.png";



function LookForLayout(){

    const Services = [
          { img: doctorIcon, title: "Doctors" },
          { img: drugstoreIcon, title: "Labs" },
          { img: hospitalIcon, title: "Hospitals", active: true },
          { img: capsuleIcon, title: "Medical Store" },
          { img: ambulanceIcon, title: "Ambulance" },
        ]
    
      return (
        <Box>
          <Typography
            component="h4"
            fontSize={20}
            color="#102851"
            fontWeight={500}
            textAlign="center"
            mb={2}
          >
            You may be looking for
          </Typography>
          <Grid
            container
            columnSpacing={{ xs: 1, md: 2 }}
            justifyContent={"center"}
          >
            {Services.map((service) => (
              <Grid item key={service.title} xs={4} md={2.4}>
                <LookForCard
                  img={service.img}
                  title={service.title}
                  active={service.active || false}
                  bgColor="#FAFBFE"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )
}



export default LookForLayout;