import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/home";
import OauthRedirectPage from "./pages/oauth_redirect";
import MissingFeaturesPage from "./pages/unsupported_features";
import Header from "./components/header";
import Footer from "./components/footer";

export default function PageRouter() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <PageLayout />
        </BrowserRouter>
    )
}

function PageLayout() {
    const { pathname } = useLocation();
    const isOauthRedirect = pathname === '/oauth-redirect';

    return (
        <>
            {!isOauthRedirect && <Header />}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/oauth-redirect' element={<OauthRedirectPage />} />
                <Route path='/missing-features' element={<MissingFeaturesPage />} />
            </Routes>
            {!isOauthRedirect && <Footer />}
        </>
    );
}
