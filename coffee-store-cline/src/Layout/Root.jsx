import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div >
            <div className="max-w-7xl w-[87%] mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div >
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;