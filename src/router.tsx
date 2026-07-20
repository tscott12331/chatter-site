import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import OauthRedirectPage from "./pages/oauth_redirect";
import MissingFeaturesPage from "./pages/unsupported_features";
import Header from "./components/header";
import Footer from "./components/footer";

export default function PageRouter() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/oauth-redirect' element={<OauthRedirectPage />} />
                <Route path='/missing-features' element={<MissingFeaturesPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
