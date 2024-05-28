import DirectorSection from "@/components/DirectorSection";
import Header from "@/components/Header";
import LatestProject from "@/components/LatestProject";
import PageBanner from "@/components/PageBanner";
import ServiceTabs from "@/components/ServiceTabs";
import Banner from '../public/landingBanner.webp'

export default function Home() {
  return (
    <main className="">
     <PageBanner image={Banner}/>
      <DirectorSection/>
      <ServiceTabs/>
      <LatestProject/>
    </main>
  );
}
