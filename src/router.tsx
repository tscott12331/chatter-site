import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import OauthRedirectPage from "./pages/oauth_redirect";
import Header from "./components/header";
import Footer from "./components/footer";

export default function PageRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/oauth-redirect' element={<OauthRedirectPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
