import { Container, Box, Stack } from "@mui/material";
import HeroSection from "../HeroSection/HeroSection";
import SearchHospital from "../SearchHospital/SearchHospital";
import FAQs from "../FAQs/FAQs";
import Families from "../Families/Familes";
import Blogs from "../Blogs/Blogs";
import PatientCaring from "../PatientCaring/PatientCaring";
import Specialists from "../Specialists/Specialists";
import Specialization from "../Specialization/Specialization";
import Offers from "../Offers/Offers";
import NavBar from "../NavBar/NavBar";
import LookForLayout from "../LookForLayout/LookForLayout";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSection />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <LookForLayout />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Specialization />

      <Specialists />

      <PatientCaring />

      <Blogs />

      <Families />

      <FAQs />
    </Box>
  );
}
