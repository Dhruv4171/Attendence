import React from 'react'

const StudentRole = ({branch,setBranch,year,setYear,section,setSection}) => {
  return (
    <div>
      <select required value={branch} onChange={(e)=>setBranch(e.target.value)}>
      <option value='' selected disabled>--SelectBranch</option>
      <option value='computer science'>CS</option>
      <option value='mechanical'>ME</option>
      <option value='civil'>CE</option>
      <option value='electrical'>ECE</option>
  </select>
  <select required value={year} onChange={(e)=>setYear(e.target.value)}>
      <option value='' selected disabled>--SelectYear--</option>
      <option value='firstyr'>I</option>
      <option value='secondyr'>II</option>
      <option value='thirdyr'>III</option>
      <option value='fourthyr'>IV</option>
  </select>
  <select required value={section} onChange={(e)=>setSection(e.target.value)}>
      <option value='' selected disabled>--SelectSection--</option>
      <option value='a'>A</option>
      <option value='b'>B</option>
      <option value='c'>C</option>
      <option value='d'>D</option>
  </select>
    </div>
  )
}

export default StudentRole
