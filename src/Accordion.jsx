import React, { useState } from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";

const Accordion = () => {

    const [data, setData] = useState(questions);

    return(
     <>
      <section className="main-div">
      <h1>React Interview Questions</h1>
      {
        data.map((currVal) => {
            const {id} = currVal;
         return <MyAccordion key= {id} {...currVal}/>
       })
       }
      </section>
     </>
    );
}

export default Accordion;