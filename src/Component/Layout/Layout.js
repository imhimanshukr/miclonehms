import {Outlet} from 'react-router-dom'

import Navbar from '../Navbar';
import NavOptios from "../NavOptios";
import PreNavbar from '../PreNavbar';
import Slider from '../Slider';
import Offers from '../Offers';
import Header from '../Header';
import StartProduct from '../StartProduct';
import HotAccessoriesMenu from '../HotAccessoriesMenu';
import data from '../../data/data.json';
import ProductReview from '../ProductReview';
import Videos from '../Videos.js';
import Banner from '../Banner.js';
import Footer from '../Footer.js';

function Layout() {
    return(
        <>
                {/* <PreNavbar/>
				<Navbar/>
				<NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>				<Slider/>
				<Offers offer={data.offer}/>
				<Header text="Start Products"/>
				<StartProduct startProduct={data.starProduct} />
				<Header text="Hot Accessories"/>
				<HotAccessoriesMenu />  */}
                   <Outlet/>
				{/* <Header text="Product Reviews"/>
				<ProductReview product_reviews={data.productReviews}/>
				<Header text="Videos"/>
				<Videos videos={data.videos}/>
				<Header text="In The Press"/>
				<Banner banner = {data.banner} />
				<Footer footer={data.footer} /> */}


        </>
    )
}
export default Layout;