import React from 'react'
import Card from './Card';

const s1 = [
  {
    id: 1,
    name: "Charles Conn",
    imgurl: "https://thetrinitybyggi.org/img/persons/charles-conn.jpg",
    c1: "Ex Partner - Mckinsey & Company",
    c2: "Senior Advisor - Rhodes Trust",
    c3: "CEO - Oxford Sciences Innovation"
  },
  {
    id: 2,
    name: "Rajat Gupta",
    imgurl: "https://thetrinitybyggi.org/img/persons/rajat-gupta.png",
    c1: "Former Global CEO - Mckinsey & Company",
    c2: "Founder - Indian School of Busines",
    c3: "Former Advisor - Bill & Melinda Gates Foundation"
  },
  {
    id: 3,
    name: "Bhaskar Chakravorti",
    imgurl: "https://thetrinitybyggi.org/img/persons/bhaskar-chakravorti.jpg",
    c1: "Ex Partner - McKinsey & Company",
    c2: "Dean/Ex-Faculty - Fletcher School & HBS",
    c3: "Advisor - World Economic Forum & GG"
  }
];

const s2 = [
  {
    id: 1,
    name: "Arun Maria",
    imgurl: "https://thetrinitybyggi.org/img/persons/arun-maira.jpg",
    c1: "Ex Partner - Mckinsey & Company",
    c2: "Senior Advisor - Rhodes Trust",
    c3: "CEO - Oxford Sciences Innovation"
  },
  {
    id: 2,
    name: "Aparna Bijapukar",
    imgurl: "https://thetrinitybyggi.org/img/persons/Aparna-Bijapurkar-2.jpg",
    c1: "Former Global CEO - Mckinsey & Company",
    c2: "Founder - Indian School of Busines",
    c3: "Former Advisor - Bill & Melinda Gates Foundation"
  },
  {
    id: 3,
    name: "Bhaskar Chakravorti",
    imgurl: "https://thetrinitybyggi.org/img/persons/barnik-chitra-maitra-s.jpg",
    c1: "Ex Partner - McKinsey & Company",
    c2: "Dean/Ex-Faculty - Fletcher School & HBS",
    c3: "Advisor - World Economic Forum & GG"
  }
];

const Cards = () => {
  return (
    <>
      <h1 className="h1 Persons_title">CONSULTING</h1>
      <div class="Persons_container">

        {s1.map(function ncard(val) {  //can use arrow function as well
          return <Card
            key={val.id}
            name={val.name}
            c1={val.c1}
            c2={val.c2}
            c3={val.c3}
            imgurl={val.imgurl}
          />
        })}
      </div>
      <h1 class="h1 Persons_title">POLICY</h1>
      <div class="Persons_container">
        {s2.map(function ncard(val) {  //can use arrow function as well
          return <Card
            key={val.id}
            name={val.name}
            c1={val.c1}
            c2={val.c2}
            c3={val.c3}
            imgurl={val.imgurl}
          />
        })}
      </div>
      <h1 class="h1 Persons_title">MBA AND CASE INTERVIEW</h1>
      <Card
        name="Shatakshi Sharma"
        c1="Co-Founder Global Governance Initiative"
        c2="Former BCG Consultant"
        c3="Public Policy Advisor"
        imgurl="https://media-exp1.licdn.com/dms/image/C4D03AQH22iRuhr9NGg/profile-displayphoto-shrink_400_400/0/1614179117567?e=1657756800&v=beta&t=PVMJqCsf0BMR6YZjFPeKzR_tddzfzJNagmQaxB_6aEM"
      />
    </>
  )
}

export default Cards;