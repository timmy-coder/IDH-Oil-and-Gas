import DirectorSection from "@/components/DirectorSection";
import Header from "@/components/Header";
import LatestProject from "@/components/LatestProject";
import PageBanner from "@/components/PageBanner";
import ServiceTabs from "@/components/ServiceTabs";


export default function Home() {
  return (
    <main className="mx-5">
     <PageBanner/>
      <DirectorSection/>
      <ServiceTabs/>
      <LatestProject/>
    </main>
  );
}
