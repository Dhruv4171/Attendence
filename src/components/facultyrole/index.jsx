import React from 'react'

const FacultyRole = ({branch,setBranch,year,setYear,section,setSection}) => {
  return (
    <div>
      <input type="checkbox" id="branch" value='computer science' onclick={(e)=>setBranch(e.target.value)}/>
      <label for="branch"> CS </label>
      <input type="checkbox" id="branch" value="mechanical" onclick={(e)=>setBranch(e.target.value)}/>
      <label for="branch"> ME </label>
    </div>
  )
}

export default FacultyRole
