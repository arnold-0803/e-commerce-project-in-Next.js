import HomeGallery from "./components/HomeGallery";
import PopularProducts from "./components/PopularProducts";
import AchievementElementor from "./components/AchievementElementor";
import SlideCarousel from "./components/SlideCarousel";
import SubscribeButton from "./components/SubscribeButton";
import TestimonialReviews from "./components/TestimonialCarousel";
import { galleryData, productData } from "../../data/db";
import { achievementData, homeSlideData, reviewsData } from "../../data/data";
import PartnerLogoSlide from "./components/PartnerLogoSlide";

// fetch function below is for in case API endpoints are provided
async function getGallery(){
  // placholder for fetching data from external api

  // try{
  //   const response = await fetch("for example; https://pixabay.com/api/?key=43296904-a69d2147a6885fcb843b07884&q=yellow+flowers&image_type=photo", {
  //     next: {revalidate: 0,}
  //   });

  //   if(!response.ok){
  //     throw new Error("There was an error while fetching data");
  //   }

  //   const data = await response.json();
  //   return data.hits;

  // }catch(error) {
  //   console.error("Faild to fetch gallery data");
  //   return [];
  // }

  // current implementation using local data
  return galleryData;
}


// fetch function below is for in case API endpoints are provided
async function getPopular(){
  // placholder for fetching data from external api

  // const response = await fetch("URL from external API", {
  //   next: {revalidate: 0,}
  // });

  // const data = await response.json();
  // return data;

  // current implementation using local data
  return productData;
}

export default async function Home() {

  const galleries = await getGallery();
  const popular = await getPopular();

  return (
    <div className="px-[20px] max-[640px]:px-[5px] mt-[10px]">
      <div className="relative">
        <SlideCarousel
          info={homeSlideData}
          SubscribeComponent={SubscribeButton}
          spaceBetween={10}
          navigation={true}
          pagination={true}
          loop={true}
          autoplay={false}
          customClass="home-hero-swiper"
        />
      </div>
      <div>
        <PopularProducts popularData={popular}/>
      </div>
      <div>
        <HomeGallery galleryData={galleries}/>
      </div>
      <div>
        <PartnerLogoSlide/>
      </div>
      <div>
        <AchievementElementor data={achievementData}/>
      </div>
      <div>
        <TestimonialReviews data={reviewsData}/>
      </div>
    </div>
  );
}
