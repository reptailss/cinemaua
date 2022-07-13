import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link,useLocation } from 'react-router-dom'


import {setSearch} from "../../redux/slice/filterSlice"


import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import styles from './searchInput.module.scss'

const SearchInput = () => {

    const dispatch = useDispatch();
    const search = useSelector(state => state.filter.searchValue);
    const [value, setValue] = useState('')

    const location = useLocation();

    const onchangeValue = (value) => {
        setValue(value)
        dispatch(setSearch(value))

    }

const clazzInner = !(location.pathname === '/search') ? styles.inner + ' ' + styles.searchMedia : styles.inner


    return (
        <>
            <div className={clazzInner}>
                <TextField value={search}
                           onChange={(event) => onchangeValue(event.target.value)}
                           className={styles.input}
                           size="small"
                           fullWidth
                           label="Search"

                />

                <Link to='/search' >
                    <IconButton
                        className={styles.button}
                        sx={{p: '10px'}}
                        aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </Link>

            </div>


        </>
    );
}

export default SearchInput;