import React from "react";
import Navbar from "./navbar";
import Banner from "./banner"; 
import Card from "./cardholder";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (    

<>
			<Navbar/>
			<Banner/>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<Card/>
					</div>
				</div>
				
			</div>	
			<Footer/>

</>
			
	);
};

export default Home;