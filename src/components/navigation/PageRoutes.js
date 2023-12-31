import { Route, Routes } from "react-router-dom"

import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";


export default function PageRoutes({ avatar, colorFontSet, colorBgSet, colorBorderSet, colorHoverSet, themeModeSet })  {
    return (
        <Routes>
            <Route 
                path="/michel4lves-p3/" 
                element={<MainPage 
                            avatar={avatar} 
                            colorFontSet={colorFontSet} 
                            colorBorderSet={colorBorderSet}
                            colorHoverSet={colorHoverSet}
                            themeModeSet={themeModeSet}
                        />} 
            />
            <Route 
                path="/michel4lves-p3/sobre" 
                element={<AboutPage 
                            colorFontSet={colorFontSet} 
                            themeModeSet={themeModeSet}
                        />} 
            /> 
            <Route 
                path="/michel4lves-p3/portfolio" 
                element={<PortfolioPage 
                            colorFontSet={colorFontSet} 
                            colorBgSet={colorBgSet} 
                            colorBorderSet={colorBorderSet} 
                            themeModeSet={themeModeSet}
                        />} 
            /> 
            <Route 
                path="/michel4lves-p3/contato" 
                element={<ContactPage 
                            colorFontSet={colorFontSet} 
                            colorBgSet={colorBgSet} 
                            colorBorderSet={colorBorderSet} 
                            themeModeSet={themeModeSet}
                        />} 
            /> 
        </Routes>
    )
}
