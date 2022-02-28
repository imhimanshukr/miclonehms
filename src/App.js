import React from 'react'
import Navbar from './Component/Navbar';
import PreNavbar from './Component/PreNavbar';
import NavOptios from "./Component/NavOptios";
import Slider from './Component/Slider';
import Offers from './Component/Offers';
import Header from './Component/Header';
import StartProduct from './Component/StartProduct';
import HotAccessoriesMenu from './Component/HotAccessoriesMenu';
import HotAccessories from './Component/HotAccessories.js';
import ProductReview from './Component/ProductReview';
import Videos from './Component/Videos.js';
import Banner from './Component/Banner.js';
import Footer from './Component/Footer.js';
import data from './data/data.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<BrowserRouter>
				<PreNavbar/>
				<Navbar/>
				<NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
				<Slider/>
				<Offers offer={data.offer}/>
				<Header text="Start Products"/>
				<StartProduct startProduct={data.starProduct} />
				<Header text="Hot Accessories"/>
				<HotAccessoriesMenu />

				<Routes>
				
						<Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
						<Route exact path="/smartdevices" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartCover={data.hotAccessoriesCover.smartDevice} />} />
						<Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.music} />} />
						<Route exact path="/lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
						<Route exact path="/mobile_accessories" element={<HotAccessories mobile_accessories={data.hotAccessories.mobileAccessories} mobile_accessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
					
				</Routes>

				<Header text="Product Reviews"/>
				<ProductReview product_reviews={data.productReviews}/>
				<Header text="Videos"/>
				<Videos videos={data.videos}/>
				<Header text="In The Press"/>
				<Banner banner = {data.banner} />
				<Footer footer={data.footer} />

		</BrowserRouter>
	)
}

export default App;
