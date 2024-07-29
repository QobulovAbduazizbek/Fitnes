import React from 'react'
import Home from './pages/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PageNotFaund from './pages/PageNotFaund'
import MainLayout from './layout/MainLayout'
import Kontakt from './pages/Kontakt'
import Okompany from './pages/Okompany'
import Profillar from './pages/Profillar'
import Uy from './pages/Uy'
import BizgaYozing from './pages/BizgaYozing'
import MaqolalarVaMaslahatlar from './pages/MaqolalarVaMaslahatlar'
import TolovUsullari from './pages/TolovUsullari'
import Bolim1 from './pages/Bolim1'
import MaqolalarVaMaslahatlar2 from './pages/MaqolalarVaMaslahatlar2'
import MaqolalarVaMaslahatlar3 from './pages/MaqolalarVaMaslahatlar3'
import MaqolalarVaMaslahatlar4 from './pages/MaqolalarVaMaslahatlar4'
import Bolim2 from './pages/Bolim2'
import Bolim3 from './pages/Bolim3'
import Bolim4 from './pages/Bolim4'
import Bolim5 from './pages/Bolim5'
import Bolim6 from './pages/Bolim6'
import Bolim7 from './pages/Bolim7'
import Bolim8 from './pages/Bolim8'
import Yangiliklar from './pages/Yangiliklar'
import BizningOqituvchilarimiz from './pages/BizningOqituvchilarimiz'
import BizHaqimizda from './pages/BizHaqimizda'
import SignUp from './pages/SingUp'
import Registration from './pages/RoyxatdanOt'
const App = () => {

  const roter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFaund />} />
        <Route path='okompany' element={<Okompany/>}/>
        <Route path='Profillar' element={<Profillar/>}/>
        <Route path='Kontakt' element={<Kontakt/>}/>
        <Route path='Uy' element={<Uy/>}/>
        <Route path='BizgaYozing' element={<BizgaYozing/>}/>
        <Route path='MaqolalarVaMaslahatlar' element={<MaqolalarVaMaslahatlar/>}/>
        <Route path='MaqolalarVaMaslahatlar2' element={<MaqolalarVaMaslahatlar2/>}/>
        <Route path='MaqolalarVaMaslahatlar3' element={<MaqolalarVaMaslahatlar3/>}/>
        <Route path='MaqolalarVaMaslahatlar4' element={<MaqolalarVaMaslahatlar4/>}/>
        <Route path='TolovUsullari' element={<TolovUsullari/>}/>
        <Route path='Bolim1' element={<Bolim1/>}/>
        <Route path='Bolim2' element={<Bolim2/>}/>
        <Route path='Bolim3' element={<Bolim3/>}/>
        <Route path='Bolim4' element={<Bolim4/>}/>
        <Route path='Bolim5' element={<Bolim5/>}/>
        <Route path='Bolim6' element={<Bolim6/>}/>
        <Route path='Bolim7' element={<Bolim7/>}/>
        <Route path='Bolim8' element={<Bolim8/>}/>
        <Route path='Yangiliklar' element={<Yangiliklar/>}/>
        <Route path='BizningOqituvchilarimiz' element={<BizningOqituvchilarimiz/>}/>
        <Route path='BizHaqimizda' element={<BizHaqimizda/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='RoyhatdanOt' element={<Registration/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={roter} />
  )
}


export default App
