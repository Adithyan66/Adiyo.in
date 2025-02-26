import LandingPage from "./pages/customer/LandingPage";
import AdminDashboard from "./components/admin/dashboard/DashBorad";
import ProductDetail from "./components/customer/ProductDetail";
import ExtraDetails from "./components/customer/ExtraDetails";
import AlsoLikeProducts from "./components/customer/AlsoLikeProducts";
import Navbar from "./components/common/Navbar";
import Newsletter from "./components/common/landingPage/NewsLetter";
import Footer from "./components/common/Footer";

function App() {
  return (
    <><Navbar />
      <ProductDetail />
      <ExtraDetails />
      <AlsoLikeProducts />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
