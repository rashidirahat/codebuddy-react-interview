import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form1 from '../set1/Form1';
import Form2 from '../set1/Form2';
import Form3 from '../set1/Form3';

const TabedForm = () =>{
    const [key, setKey] = useState('form1');

    const handleTab = (name)=>{
      if(name=="next-form1"){
        setKey("form2")
      }else if(name=="save-form1"){
        setKey("form2")
      }else if(name == "next-form2"){
        setKey("form3")
      }else if(name == "back-form2"){
        setKey("form1")
      }else if(name == "save-form2"){
        setKey("form3")
      }else if(name == "back-form3"){
        setKey("form2")
      }
    }

    return (
        <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="form1" title="Form1">
          <Form1 handleTab={handleTab}/>
        </Tab>
        <Tab eventKey="form2" title="Form2">
          <Form2 handleTab={handleTab}/>
        </Tab>
        <Tab eventKey="form3" title="Form3" >
          <Form3 handleTab={handleTab}/>
        </Tab>
      </Tabs>
    )
}

export default TabedForm;
