import {Outlet} from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const MainLayout = () => {
	return (
		<>
			<Header/>
			<Outlet/>
			<Footer/>
		</>
	)
}