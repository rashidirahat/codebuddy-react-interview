import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';


import Posts from './pages/Posts';


import Form1 from './pages/set1/Form1';


import Form2 from './pages/set1/Form2';
import Form3 from './pages/set1/Form3';
import TabedForm from './pages/set1/TabedForm';


const Router = () => (

  <BrowserRouter>

    <Routes>
    <Route path="/" element={<TabedForm />} />
      <Route path="/form1" element={<Form1 />} />
      <Route path="/form2" element={<Form2 />} />
      <Route path="/form3" element={<Form3 />} />

    </Routes>

  </BrowserRouter>

);


export default Router;

