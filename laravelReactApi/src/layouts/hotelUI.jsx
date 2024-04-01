import React from 'react'
import Typography from '@mui/material/Typography'
import { Autocomplete, Button, Stack, TextField, Container, Grid } from '@mui/material';
import styled from '@emotion/styled';
import {DataGrid} from '@mui/x-data-grid'
import Map from './Map';




const HotelUI = () => {

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
          label: 'The Lord of the Rings: The Return of the King',
          year: 2003,
        },
        { label: 'The Good, the Bad and the Ugly', year: 1966 },
        { label: 'Fight Club', year: 1999 },
        {
          label: 'The Lord of the Rings: The Fellowship of the Ring',
          year: 2001,
        },
        {
          label: 'Star Wars: Episode V - The Empire Strikes Back',
          year: 1980,
        },
        { label: 'Forrest Gump', year: 1994 },
        { label: 'Inception', year: 2010 },
        {
          label: 'The Lord of the Rings: The Two Towers',
          year: 2002,
        },
        { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { label: 'Goodfellas', year: 1990 },
        { label: 'The Matrix', year: 1999 },
        { label: 'Seven Samurai', year: 1954 },
        {
          label: 'Star Wars: Episode IV - A New Hope',
          year: 1977,
        },
        { label: 'City of God', year: 2002 },
        { label: 'Se7en', year: 1995 },
        { label: 'The Silence of the Lambs', year: 1991 },
        { label: "It's a Wonderful Life", year: 1946 },
        { label: 'Life Is Beautiful', year: 1997 },
        { label: 'The Usual Suspects', year: 1995 },
        { label: 'Léon: The Professional', year: 1994 },
        { label: 'Spirited Away', year: 2001 },
        { label: 'Saving Private Ryan', year: 1998 },
        { label: 'Once Upon a Time in the West', year: 1968 },
        { label: 'American History X', year: 1998 },
        { label: 'Interstellar', year: 2014 },
        { label: 'Casablanca', year: 1942 },
        { label: 'City Lights', year: 1931 },
        { label: 'Psycho', year: 1960 },
        { label: 'The Green Mile', year: 1999 },
        { label: 'The Intouchables', year: 2011 },
        { label: 'Modern Times', year: 1936 },
        { label: 'Raiders of the Lost Ark', year: 1981 },
        { label: 'Rear Window', year: 1954 },
        { label: 'The Pianist', year: 2002 },
        { label: 'The Departed', year: 2006 },
        { label: 'Terminator 2: Judgment Day', year: 1991 },
        { label: 'Back to the Future', year: 1985 },
        { label: 'Whiplash', year: 2014 },
        { label: 'Gladiator', year: 2000 },
        { label: 'Memento', year: 2000 },
        { label: 'The Prestige', year: 2006 },
        { label: 'The Lion King', year: 1994 },
        { label: 'Apocalypse Now', year: 1979 },
        { label: 'Alien', year: 1979 },
        { label: 'Sunset Boulevard', year: 1950 },
        {
          label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
          year: 1964,
        },
        { label: 'The Great Dictator', year: 1940 },
        { label: 'Cinema Paradiso', year: 1988 },
        { label: 'The Lives of Others', year: 2006 },
        { label: 'Grave of the Fireflies', year: 1988 },
        { label: 'Paths of Glory', year: 1957 },
        { label: 'Django Unchained', year: 2012 },
        { label: 'The Shining', year: 1980 },
        { label: 'WALL·E', year: 2008 },
        { label: 'American Beauty', year: 1999 },
        { label: 'The Dark Knight Rises', year: 2012 },
        { label: 'Princess Mononoke', year: 1997 },
        { label: 'Aliens', year: 1986 },
        { label: 'Oldboy', year: 2003 },
        { label: 'Once Upon a Time in America', year: 1984 },
        { label: 'Witness for the Prosecution', year: 1957 },
        { label: 'Das Boot', year: 1981 },
        { label: 'Citizen Kane', year: 1941 },
        { label: 'North by Northwest', year: 1959 },
        { label: 'Vertigo', year: 1958 },
        {
          label: 'Star Wars: Episode VI - Return of the Jedi',
          year: 1983,
        },
        { label: 'Reservoir Dogs', year: 1992 },
        { label: 'Braveheart', year: 1995 },
        { label: 'M', year: 1931 },
        { label: 'Requiem for a Dream', year: 2000 },
        { label: 'Amélie', year: 2001 },
        { label: 'A Clockwork Orange', year: 1971 },
        { label: 'Like Stars on Earth', year: 2007 },
        { label: 'Taxi Driver', year: 1976 },
        { label: 'Lawrence of Arabia', year: 1962 },
        { label: 'Double Indemnity', year: 1944 },
        {
          label: 'Eternal Sunshine of the Spotless Mind',
          year: 2004,
        },
        { label: 'Amadeus', year: 1984 },
        { label: 'To Kill a Mockingbird', year: 1962 },
        { label: 'Toy Story 3', year: 2010 },
        { label: 'Logan', year: 2017 },
        { label: 'Full Metal Jacket', year: 1987 },
        { label: 'Dangal', year: 2016 },
        { label: 'The Sting', year: 1973 },
        { label: '2001: A Space Odyssey', year: 1968 },
        { label: "Singin' in the Rain", year: 1952 },
        { label: 'Toy Story', year: 1995 },
        { label: 'Bicycle Thieves', year: 1948 },
        { label: 'The Kid', year: 1921 },
        { label: 'Inglourious Basterds', year: 2009 },
        { label: 'Snatch', year: 2000 },
        { label: '3 Idiots', year: 2009 },
        { label: 'Monty Python and the Holy Grail', year: 1975 },
      ];
      const StyledAutocomplete = styled(Autocomplete)`
      .MuiAutocomplete-inputRoot {
        border-radius: 3rem;
        height:3rem; 
        width:12rem;
    }`;
    const HotelSearchColumn = [
      {field:'id',headerName:'ID', width:'50'},
      {field:'uniqueId',headerName:'Unique ID',width:'80'},
      {field:'hotelName',headerName:'Hotel Name',width:'170'},
      {field:'Address',headerName:'Address',width:'200'},
      {field:'latitude',headerName:'Latitude',width:'100'},
      {field:'longitude',headerName:'Longitude',width:'100'},
      {field:'uniqueSupplierId',headerName:'Unique Supplier ID',width:'150'},
    ]
    const ReferenceSearchColumn = [
      {field:'uniqueId',headerName:'Unique ID',width:'150'},
      {field:'supplierId',headerName:'Supplier ID',width:'150'}
    ]
    const HotelRow=[
      {id:'1',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'2',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'3',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'4',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'5',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'6',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'7',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'8',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'9',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'10',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'11',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' },
      {id:'12',uniqueId: 4567346, hotelName:'Setouchi house', Address:'45-3-1 Nishi Okkama Street',latitude:'34.382567', longitude:'54.356765', uniqueSupplierId:'7234263-princi' }
    ]
  return (
    <Container maxWidth='xl' style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
        <Typography variant="h4" color="blue">Hotel Validation UI</Typography>
        <Typography variant="h6" color="green" gutterBottom>Manual Mapping and Validation Tool</Typography>
        <Stack flexDirection={'row'} marginTop={5} gap={2} flexWrap={'wrap'}>
          <StyledAutocomplete options={top100Films} renderInput={(params)=><TextField {...params} label="Country"/>}/>   
          <StyledAutocomplete options={top100Films} renderInput={(params)=><TextField {...params} label="City"/>}/> 
          <StyledAutocomplete options={top100Films}  renderInput={(params)=><TextField {...params} label="Grid Number"/>}/>
          <StyledAutocomplete options={top100Films}  renderInput={(params)=><TextField {...params} label="Unique ID"/>}/>
          <StyledAutocomplete options={top100Films} renderInput={(params)=><TextField {...params} label="Hotel Name"/>}/>
          <Button variant='contained' size='large' sx={{width:'8rem',height:'2.7rem'}} >Search</Button>      
        </Stack>
        <Stack flexDirection={'row'} gap={8} justifyContent={'space-around'} flexWrap={'wrap'}>
          <Typography variant="h6" color="initial">Result Table</Typography>
          <Typography variant="h6" color="initial" gutterBottom>Records found</Typography>
        </Stack>
        <Grid container flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
          <Grid item xs={7.5}>
            <DataGrid columns={HotelSearchColumn} rows={HotelRow} 
            checkboxSelection
            pageSizeOptions={[6]}
            initialState={{pagination:
              {paginationModel:{pageSize:6,page:0}}
            }}
            disableRowSelectionOnClick
            />
          </Grid>
          <Grid item xs={4}>
            <Map/>
          </Grid>
        </Grid>
    </Container>
  )

}

export default HotelUI