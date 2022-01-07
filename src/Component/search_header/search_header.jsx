import styles from './search_header.module.css';

import React, { memo, useRef } from 'react';

const SearchHeader = memo(
  ({onSearch}) => {

    const inputRef = useRef();
    
    const handleSearch = () =>{
    const value = inputRef.current.value;
    onSearch(value);
    }
    
    const onClick=()=>{
    handleSearch();
    };
    
    const onKeyPress = (event)=>{
      if(event.key === 'Enter'){
          handleSearch();
      }
    }
    
    const refresh = ()=>{
    window.location.reload();
    }
    
    return(
               <header className={styles.header}>
                 <div className={styles.logo} onClick={refresh}>
                 <img className={styles.img}src="/image/logo.png" alt="logo" />
                   <h1 className={styles.title}>Youtube</h1>
                 </div>
                   <input 
                   ref={inputRef}
                   className={styles.input} 
                   type="search" 
                   placeholder="Search..." 
                   onKeyPress={onKeyPress}/>
                   <button className={styles.button} type="submit" onClick={onClick}>
                       <img className={styles.buttonImg} src="/image/search.png" alt="search" />
                   </button>
               </header>
    );
    }

);

export default SearchHeader;