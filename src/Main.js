import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero/Hero';
import About from "./pages/About/About"
import Creditcard from './pages/Cards/Creditcard';
import Aucard from './pages/Cards/Aucard';
import IdfcCards from './pages/Cards/IdfcCards'; 
import Sbicards from './pages/Cards/Sbicards';
import YesCards from './pages/Cards/YesCards';
// import Cibilstr from './pages/Hero/Cibilstr';
import Cibil from './pages/Cibil/Cibil';
import Calculators from './pages/Calculators/Calculators';
import Refine from './pages/Refine/Refine';
import Bloan from './pages/Loans/Bloan';
import Hloan from './pages/Loans/Hloan';
import Ploan from './pages/Loans/Ploan';
import Error from './components/Error';
import Blogs from './pages/Blogs/Blogs';
import Cibilhero from "./pages/Cibil/Cibilhero"
import Contact from './pages/Contact';
import Login from './pages/Hero/Login';
import Privacy from './pages/Privacy/Privacy';
import StepFirst from './pages/Auth/StepFirst';
import StepSecond from './pages/Auth/StepSecond';
import StepThird from './pages/Auth/StepThird';
import AuGrid from './pages/Blogs/GridBlogs/AuGrid';
import SbiGrid from './pages/Blogs/GridBlogs/SbiGrid';
import IdfcGrid from './pages/Blogs/GridBlogs/IdfcGrid';
import YesGrid from './pages/Blogs/GridBlogs/YesGrid';
import CreditCardBlogs from './pages/Blogs/GridBlogs/AuGrid';
import Homecalc from './pages/Calculators/Homecalc';
import Aucalc from './pages/Calculators/Aucalc';
import IDFCcalc from './pages/Calculators/IDFCcalc';
import SBIsave from './pages/Calculators/SBIsave';
import SBIclick from './pages/Calculators/SBIclick';
import YEScalc from './pages/Calculators/YEScalc';
import Payout from './pages/Refine/Payout';
import Payment from './pages/Refine/Payment';
import ToTop from './components/ToTop';
// import Stripehead from './components/Stripehead';
const Main = () => {
  return (
    <div > 
     <BrowserRouter>
        <Header/>
       
<Routes>
  <Route path='/' exact element={<Hero/>}/>
  <Route path="/Creditcards" exact element={<Creditcard/>}/>
  <Route path='/Aucards' exact element={<Aucard/>}/>
  <Route path='/IdfcCards' exact element={<IdfcCards/>}/>
  <Route path='/Sbicards' exact element={<Sbicards/>}/>
  <Route path='/Yescards' exact element={<YesCards/>}/>
  <Route path='/Credit-score' exact element={<Cibil/>}/>
  <Route path='/Calculators' exact element={<Calculators/>}/>
  <Route path="/Refine" exact element={<Refine/>}/>
  <Route path="/Businessloan" exact element={<Bloan/>}/>
  <Route path="/Homeloan" exact element={<Hloan />}/>
  <Route path="/Personalloan" exact element={<Ploan/>}/>
  <Route path="/CreditklickFamily" exact element={<About/>}/>
  <Route path="/Blogs" exact element={<Blogs/>}/>
  <Route path='*' exact element={<Error/>}/>
  <Route path="/Creditklick" exact element={<Login/>}/>
  <Route path="/report-analysis" exact element={<Cibilhero/>}/>
  <Route path="/connectwithus" exact element={<Contact/>}/>
  <Route path="/Privacy-policies" exact element={<Privacy/>}/>

  <Route path="/au-calculator" exact element={<Aucalc />}/>  
  <Route path="/idfc-calculator" exact element={<IDFCcalc />}/>
  <Route path="/sbisave-calculator" exact element={<SBIsave />}/>
  <Route path="/sbiclick-calculator" exact element={<SBIclick />}/>
  <Route path="/yes-calculator" exact element={<YEScalc />}/>  
  {/* <Route path="/emi-calculator" exact element={<Homecalc />}/> */}
  
  <Route path="/queries" exact element={<Payout/>}/>
  <Route path="/payments" exact element={<Payment/>}/>

  {/* Auth Routing */}

  <Route path="/Personal-Information" exact element={<StepFirst />}/>
  <Route path="/Adress" exact element={<StepSecond/>}/>
  <Route path="/Working-Information" exact element={<StepThird/>}/>
  {/* Auth Routing End */}


{/* Blogs Grid */}
<Route path="/All-about-Cards-Blogs" exact element={<CreditCardBlogs />}/>
  <Route path="/All-about-Loans-Blogs" exact element={<SbiGrid/>}/>
  <Route path="/All-about-IdfcBlogs" exact element={<IdfcGrid/>}/>
  <Route path="/All-about-YesBlogs" exact element={<YesGrid/>}/>
{/* Blogs Grid End */}

</Routes>
<Footer/>
<ToTop />
</BrowserRouter>
{/* <About/> */}
   
    </div>
  )
}

export default Main