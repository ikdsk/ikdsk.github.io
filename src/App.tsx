import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AwardsListPage from './pages/AwardsListPage';
import AwardDetailPage from './pages/AwardDetailPage';
import RecommendationsPage from './pages/RecommendationsPage';
import MonthlyPage from './pages/MonthlyPage';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/awards" element={<AwardsListPage />} />
          <Route path="/award/:id" element={<AwardDetailPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/monthly" element={<MonthlyPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
