import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CategoryPage from './pages/CategoryPage'
import NotFoundPage from './pages/NotFoundPage'
import { CATEGORIES } from './config/images'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produse" element={<ProductsPage />} />
          {CATEGORIES.map((cat) => (
            <Route
              key={cat.slug}
              path={`/produse/${cat.slug}`}
              element={<CategoryPage category={cat} />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
