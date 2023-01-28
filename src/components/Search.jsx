import React from 'react'
import { useStateContext } from '../context/StateProvider'

const Search = () => {
      // context
  const {state: {search}, dispatch } = useStateContext();

  return (
    <>
        <form className="d-flex">
       {/* search input*/}
            <input 
            onChange={e => {
              dispatch({
                type:"SEARCH",
                payload:e.target.value
              })
            }}
            className="form-control me-2" 
            type="search"
              placeholder="Search
              " aria-label="Search"
              />

      </form>
    </>
  )
}

export default Search