import { Select, Box, Stack, component, MenuItem, InputAdornment, Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SearchHospital (){

    const[states, setStates] = useState([]);
    const[cities, setCities] = useState([])
    const[formData, setFormData]  =useState({state: "", city: ""})
    const navigate = useNavigate()

    useEffect(()=>{
       const states = async ()=>{
        try{
            const response = await axios.get("https://meddata-backend.onrender.com/states");
            setStates(response.data)

        }catch(error){
            console.log(error)
        }
       }
      states()
    },[])

    useEffect(()=>{
        const cities = async ()=>{
            try{
               const response = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`);
               setCities(response.data)
            }catch(error){
              console.log(error)
            }
        }

        if(formData.state !== ""){
            cities()
        }
    },[formData.state])

    const handleChange = (e) =>{

        const {name, value} = e.target;
        setFormData((prev)=>({...prev, [name] : value}))
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if (formData.state && formData.city) {
            navigate(`/search?state=${formData.state}&city=${formData.city}`);
          }

      
    }

    return (
        <>
          <Box component="form" onSubmit={handleOnSubmit} pb={4} sx={{ display: "flex", gap: 4, justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, }}>
            
            <Select id="state" name="state" value={formData.state} onChange={handleChange} required
             startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>} sx={{ minWidth: 200, width: "100%" }}
            >
              <MenuItem disabled value="" selected>State</MenuItem>
              {states.map((state)=>(
                  <MenuItem key={state} value={state}>{state}</MenuItem>
              ))}

            </Select>

            <Select id="city" name="city" value={formData.city} onChange={handleChange} required
             startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>} sx={{ minWidth: 200, width: "100%" }}
            >
              <MenuItem disabled value="" selected>City</MenuItem>
              {cities.map((cities)=>(
                  <MenuItem key={cities} value={cities}>{cities}</MenuItem>
              ))}

            </Select>

            <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                sx={{ py: "15px", px: 8, flexShrink: 0 }}
                disableElevation
            >
                Search
            </Button>

          </Box>
        
        </>
    )

}

export default SearchHospital