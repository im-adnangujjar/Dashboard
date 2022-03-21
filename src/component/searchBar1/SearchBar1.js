import React from 'react'
import {styles} from './SearchBar1Style'
import SearchIcon from '@mui/icons-material/Search';


function SearchBar1() {
  return (
    <div>
   <div>
     <SearchIcon style={styles.icon}/>
        <input style={styles.searchbar1} type ="search" placeholder='  Find a projects '/>
        </div>
    </div>
  )
}

export default SearchBar1