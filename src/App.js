//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import StateExample from './StateExample'
//import FuncProps from './FuncProps'
//import Demo from './Demo'
//import Events from './Events'
//import JSX from './JSX'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'
function App(){
  return(
    <section>
    <BrowserRouter>
            <Navbar/>
            <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    {/*<StateExample/>
    <JSX/>
    <Events/>
    <Demo price="1st price"/>
    FuncProps carname="rolls royce" year="1989"/>
    <h1>Hello guru</h1>
      <PropsExample name="Gopinadh" age="19"/>
      <PropsExample name="Phani" age="20"/>
        <p>Good afternoon</p>
        <h1>heading tag</h1>
        <img src="https://images.hindustantimes.com/img/2022/11/16/1600x900/dhoni_1668591485783_1668591486123_1668591486123.jpg"alt="image"width="10%"/>
        <ClassComponent/>*/}
    </section>
  )
}
export default App