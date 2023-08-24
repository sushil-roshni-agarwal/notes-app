const Search=({handleSearch})=>{
    return(
        <>
          <input type="text" placeholder="Search" onChange={(e)=>handleSearch(e.target.value)}></input>
        </>
    )
}
export default Search;