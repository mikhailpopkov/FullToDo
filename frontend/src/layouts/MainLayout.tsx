import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../scss/layouts.scss";

const MainLayout: React.FC = () => {
  return (
    <div className="l-layout">
        <div className="layout__wrap">
            <div className="l-header">
                <div className="header__wrapper">
                    <Header/>
                </div>
            </div>
            <div className="l-main">
                <div className="main__wrapper">
                    <Outlet/>
                </div>
            </div>
            <div className="l-footer">
                <div className="footer__wrapper">
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainLayout;
