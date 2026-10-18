import {Routes, Route} from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'


function App(){
  return(
    <Routes>
      <Route element = {<Layout />}>
      <Route index element= {<HomePage/>}/>
      <Route path="products" element = {<ProductsPage/>}/>
      <Route path = "cart" element = {<CartPage/>} />
      <Route path ="*" element = {<NotFoundPage />} /> 
      </Route>
    </Routes>
  )
}

export default App