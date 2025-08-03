import Header from './Header/Header.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Footer from './Footer/Footer.jsx';
import DesignPic from './assets/TheBest.png';
import ignatVideo from "./assets/media/IgnatIsTheBestAnimated.mp4";
import galaxyVideo from "./assets/media/galaxy.mp4";
import IgnatPicCropped from './assets/TheBestCropped.png';

const imageMedia = { type: "image", src: DesignPic, alt: "Design 3" };
const videoMedia = {
  type: "video",
  poster: DesignPic,
  src: galaxyVideo,
  autoPlay: true,
  muted: true,    
  loop: true,
  playsInline: true,
  controls: false    
};

const videoIgnatAnimated = {
  type: "video",
  poster: IgnatPicCropped,
  src: ignatVideo,
  autoPlay: true,
  muted: true,
  loop: true,
  playsInline: true,
  controls: false
}

const cards = [
  { cardName: "Design 1", listOfTags: ["Tag1", "Tag2", "Tag3"], media: videoMedia },
  { cardName: "Design 2", listOfTags: ["Tag4", "Tag5"], media: videoIgnatAnimated },
  { cardName: "Design 3", listOfTags: ["Tag6", "Tag7", "Tag8"], media: imageMedia },
  { cardName: "Design 1", listOfTags: ["Tag1", "Tag2", "Tag3"], media: videoMedia },
  { cardName: "Design 2", listOfTags: ["Tag4", "Tag5"], media: videoIgnatAnimated },
  { cardName: "Design 3", listOfTags: ["Tag6", "Tag7", "Tag8"], media: imageMedia }, 
  { cardName: "Design 1", listOfTags: ["Tag1", "Tag2", "Tag3"], media: videoMedia },
  { cardName: "Design 2", listOfTags: ["Tag4", "Tag5"], media: videoIgnatAnimated },
  { cardName: "Design 3", listOfTags: ["Tag6", "Tag7", "Tag8"], media: imageMedia }, 
  { cardName: "Design 1", listOfTags: ["Tag1", "Tag2", "Tag3"], media: videoMedia },
  { cardName: "Design 2", listOfTags: ["Tag4", "Tag5"], media: videoIgnatAnimated },
  { cardName: "Design 3", listOfTags: ["Tag6", "Tag7", "Tag8"], media: imageMedia }, 
  { cardName: "Design 1", listOfTags: ["Tag1", "Tag2", "Tag3"], media: videoMedia },
  { cardName: "Design 2", listOfTags: ["Tag4", "Tag5"], media: videoIgnatAnimated },
  { cardName: "Design 3", listOfTags: ["Tag6", "Tag7", "Tag8"], media: imageMedia }, 
  { cardName: "Design 1", listOfTags: ["Tag1", "Tag2", "Tag3"], media: videoMedia },
  { cardName: "Design 2", listOfTags: ["Tag4", "Tag5"], media: videoIgnatAnimated },
  { cardName: "Design 3", listOfTags: ["Tag6", "Tag7", "Tag8"], media: imageMedia }

];

function App() {
  return (
    <>
      <Header />
      <Gallery listOfCards={cards} />
      <Footer />
    </>
  );
}

export default App
