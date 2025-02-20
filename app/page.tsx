import Banner from './components/Banner/index';
import Work from './components/Work/index';
import PortraitGallery from './components/Features/index';
import Simple from './components/Simple/index';
import Faq from './components/Faq/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <PortraitGallery />
      <Work />
      {/* <Simple /> */}
      {/* <Faq /> */}
    </main>
  )
}
