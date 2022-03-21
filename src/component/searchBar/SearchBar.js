import React from 'react'
import { styles } from './SearchBarStyle'
import SearchIcon from '@mui/icons-material/Search';


function SearchBar(props) {
  return (
    <div>
      <div>
        <SearchIcon style={styles.icon}/>
      <input style={styles.SearchBar} type="search"  placeholder='Search '/>
      </div>
    </div>
  )
}

export default SearchBar