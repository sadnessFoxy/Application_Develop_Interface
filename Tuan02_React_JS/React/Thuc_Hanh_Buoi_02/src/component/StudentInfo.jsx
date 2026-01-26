import React from 'react'
import './StudentInfo.css'
function StudentInfo(props) {
  return (
    <div className='container1'>
      <div className='img'><img  src={props.info.img} /></div>
      <div className='stu_info'>
        <div className='name'>Họ và tên: {props.info.name}</div>
        <div className='id'>MSSV: {props.info.id}</div>
        <div className='class'>Lớp: {props.info.class} </div>
      </div>
    </div>
  )
}

export default StudentInfo