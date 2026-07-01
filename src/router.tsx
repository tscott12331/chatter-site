import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import OauthRedirectPage from "./pages/oauth_redirect";

export default function PageRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/oauth-redirect' element={<OauthRedirectPage />} />
            </Routes>
        </BrowserRouter>
    )
}
