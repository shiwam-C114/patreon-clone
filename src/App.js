import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
=======
import CreatorHome from "./pages/dashboard/Creator/CreatorHome";
>>>>>>> master
import Home from "./pages/main/Home";
import { AllPlansComponents } from "./pages/products/AllPlansComponents";
import Pricing from "./pages/pricing/Pricing"
import Lite from "./pages/products/Lite";
import Premium from "./pages/products/Premium";
import Pro from "./pages/products/Pro";
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
<<<<<<< HEAD
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/products/lite" element={<Lite/>}/>
    <Route path="/products/premium" element={<Premium/>}/>
    <Route path="/products/pro" element={<Pro/>}/>
=======
    <Route path="/creatorhome" element={<CreatorHome />} />
>>>>>>> master
   </Routes>
   </>
  );
}

export default App;
