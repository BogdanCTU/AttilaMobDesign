import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CategoryPage from './pages/CategoryPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import NotFoundPage from './pages/NotFoundPage'
import { CATEGORIES } from './config/images'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <HashRouter>
      <a href="#main-content" className="skip-link">
        Sari la conținutul principal
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" tabIndex={-1}>
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
          <Route path="/politica-de-confidentialitate" element={<PrivacyPolicyPage />} />
          <Route path="/politica-de-cookies" element={<CookiePolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
