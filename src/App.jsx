import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail';
import ContactUS from './pages/ContactUS';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Transactions from './pages/Transaction/Transactions';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import ProductComparison from './pages/ProductComparison';
import CheckOut from './pages/CheckOut';
function App() {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/contactUs' element={<ContactUS />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/checkOut' element={<CheckOut/>} />
        <Route path='/productComparison' element={<ProductComparison/>} />
        ProductComparison
        <Route path="/transactions"element={<Transactions />}/>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
