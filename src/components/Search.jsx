import {
    InputAdornment,
    TextField,
  } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchProduct = ({search, handleSearchChange}) => {
    return (
        <TextField
        className="searchElement"
        size="large"
        variant = "standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search for products"
        name="search"
       value = {search}
        onChange = {handleSearchChange}
        // onChange = {(e) => {
        //   handleSearchChange(e.target.value)
        // }}
      />
    )
}
export default SearchProduct