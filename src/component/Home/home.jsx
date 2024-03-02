
import Navbar from './navbar';
import DatingSites from './trending_list/datingSites';
import OnlineTherapy2 from './trending_list/onlineTherapy2';
import BackgroundCheck from './trending_list/backgroundCheck';
import TVServices from './trending_list/tVServices';
import MealDelivery from './trending_list/mealDelivery'
import WebsiteBuilders from './trending_list/websiteBuilders';
import DNATesting from './trending_list/dNATesting'
import HomeSecurity from './trending_list/homeSecurity';
import HomeWarranty from './trending_list/homeWarranty';
import MovingCompanies from './trending_list/movingCompanies';
import Growbusinesspage from './growbusinesspage';
import  Footer1 from './footer1'
import Allcategories from './Allcategories';
import OurStory from './ourStory';
function Home() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <DatingSites></DatingSites>
      <OnlineTherapy2></OnlineTherapy2>
      <BackgroundCheck></BackgroundCheck>
      <TVServices></TVServices>
      <MealDelivery></MealDelivery>
      <WebsiteBuilders></WebsiteBuilders>
      <DNATesting></DNATesting>
      <HomeSecurity></HomeSecurity>
      <HomeWarranty></HomeWarranty>
      <MovingCompanies></MovingCompanies>
      <Growbusinesspage></Growbusinesspage>
      <Allcategories></Allcategories>
      {/* <OurStory/> */}
      <Footer1></Footer1>
    </div>  
  );
}

export default Home; 


