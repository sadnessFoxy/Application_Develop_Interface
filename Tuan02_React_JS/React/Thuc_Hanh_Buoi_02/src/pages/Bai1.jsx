import React from 'react'
import Header from '../component/Header'
import StudentInfo from '../component/StudentInfo'
import imgs from '../assets/download.jpg'
import Footer from '../component/Footer';
function Bai1() {
  const student_id = {
    id : 23654531,
    name: "Lâm Đình Khoa",
    class: "DHKTPM19ATT",
    img: imgs
  };
  return (
    <div id='container'>
        <Header id='header'>ABOUT MY SELF</Header>
        <StudentInfo info={student_id}></StudentInfo>
        <Footer>IUH - Đại học Công Nghiệp thành phố Hồ Chí Minh</Footer>
    </div>
  )
}

export default Bai1