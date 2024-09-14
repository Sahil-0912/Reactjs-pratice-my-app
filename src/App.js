import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import React from 'react';
import './assets/css/style.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Counter from './pages/Counter';
import ClassSate from './pages/ClassState';
import UseEffectHook from './pages/UseEffectHook';

function App() {
  return (
   <>
   <Header></Header>
    {/* <Home></Home> */}
    {/* <About></About> */}
    {/* <Contact></Contact> */}
    {/* <Counter></Counter> */}
    {/* <ClassSate></ClassSate> */}
    <UseEffectHook></UseEffectHook>
   <Footer></Footer>
   </>
  );
}

export default App;
