import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoursesPage from "./pages/CoursesPage";
import Home from "./pages/Home";
import StudentsCarousel from "./pages/StudentsCarousel";
import Cards from "./pages/Cards";
import AboutUs from "./pages/AboutUs";
import PlacementTestModal from "./components/PlacementTestModal";
import CourseDetailsModal from "./components/CourseDetailsModal";
import CheckoutModal from "./components/CheckoutModal";
import { CATALOG_ITEMS } from "./data/CatalogeData";
import ScrollToTop from "./components/ScrollToTop";

function HomePage({ onOpenPlacementQuiz, onNavigate }) {
  return (
    <>
      <Home onOpenPlacementQuiz={onOpenPlacementQuiz} onNavigate={onNavigate} />
      <Cards />
      <StudentsCarousel onOpenPlacementQuiz={onOpenPlacementQuiz} />
    </>
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [quizOpen, setQuizOpen] = useState(false);
  const [detailsItem, setDetailsItem] = useState(null);
  const [checkoutItem, setCheckoutItem] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const activePage =
    location.pathname === "/courses"
      ? "courses"
      : location.pathname === "/about"
      ? "about"
      : "home";

  const handleNavigate = (page) => {
    if (page === "courses") navigate("/courses");
    else if (page === "about") navigate("/about");
    else navigate("/");
  };

  const handleEnrollRecommended = (recommendedTrackTitle) => {
    const matched =
      CATALOG_ITEMS.find((item) =>
        recommendedTrackTitle.includes(item.title.split(" ")[0])
      ) || CATALOG_ITEMS[0];
    setCheckoutItem(matched);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B]">
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      <div className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenPlacementQuiz={() => setQuizOpen(true)}
                onNavigate={handleNavigate}
              />
            }
          />
          <Route
            path="/courses"
            element={
              <CoursesPage
                onOpenPlacementQuiz={() => setQuizOpen(true)}
                onSelectItemDetails={(item) => setDetailsItem(item)}
                onSelectItemSubscribe={(item) => setCheckoutItem(item)}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutUs onOpenPlacementQuiz={() => setQuizOpen(true)} />}
          />
        </Routes>
      </div>

      <Footer onNavigate={handleNavigate} />

      {/* النوافذ التفاعلية */}
      <PlacementTestModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onEnrollRecommended={handleEnrollRecommended}
      />

      <CourseDetailsModal
        item={detailsItem}
        onClose={() => setDetailsItem(null)}
        onSubscribe={(item) => setCheckoutItem(item)}
      />

      <CheckoutModal
        selectedItem={checkoutItem}
        onClose={() => setCheckoutItem(null)}
      />

      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-lg">تسجيل الدخول</h3>
              <button
                type="button"
                onClick={() => setLoginModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-500">
              أدخل بيانات حسابك للوصول إلى منصة Bee Academy.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoginModalOpen(false);
              }}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="البريد الإلكتروني"
                className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
              />
              <input
                type="password"
                required
                placeholder="كلمة المرور"
                className="w-full border border-slate-300 rounded-xl px-3.5 py-2 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-[#F47B35] hover:bg-[#e06a26] text-white font-bold py-2.5 rounded-xl cursor-pointer"
              >
                دخول
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}