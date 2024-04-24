import { FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import './SearchInput.scss';

export default function SearchInput(){


    const variant = true?'outlined':''

    const [searchQuery,setSearchQuery] = useState('');

    const handleChangeSearchQuery = (e)=>{
        // e.stopPropgation()
        console.log(e,"e")
        setSearchQuery(e.target.value)
    }

 console.log(searchQuery)

     

    return ( 
        <div className={'search-wrap'}>
        <FormControl>

        {variant ==='outlined' 
                ?
                <>              
                <InputLabel className={`${searchQuery?'shrinked':''}`} shrink={searchQuery} htmlFor="inbox-search">Search by title, sender, Etc</InputLabel>
                <OutlinedInput
                    id="inbox-search"
                    className="search-wrap-outline-input"
                    value={searchQuery}
                    fullWidth
                    // autoFocus
                    onChange={handleChangeSearchQuery}
                    sx={{outline:'none'}}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                        //   onClick={handleChangeSearchQuery}
                          aria-label="click to search"
                        >
                          <SearchIcon/>
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  </>
                  :
                  <>
                  <InputLabel className={`${searchQuery?'shrinked':''} non-outline-input-label`} shrink={searchQuery} htmlFor="inbox-search">Search by title, sender, Etc</InputLabel>
                  <Input
                  id="inbox-search"
                  className="search-wrap-input"
                  fullWidth
                  onChange={handleChangeSearchQuery}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton 
                        aria-label="click to search"
                      >
                        <SearchIcon/>
                      </IconButton>
                    </InputAdornment>
                  }
                />
                </> 
                }
        </FormControl>
       </div>
    )
}