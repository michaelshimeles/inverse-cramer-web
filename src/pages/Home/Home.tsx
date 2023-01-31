import HeroSection from "../../components/HeroSection/HeroSection";
import Layout from "../../components/Layout/Layout";
import LiveSignals from "../../components/LiveSignals/LiveSignals";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <LiveSignals />
    </Layout>
  );
}

export default Home;
