import Hero from '../components/home/Hero';
import Updates from '../components/home/Updates';
import WhoWeAre from '../components/home/WhoWeAre';
import Expertise from '../components/home/Expertise';
import ApplicationAreas from '../components/home/ApplicationAreas';
import Workflow from '../components/home/Workflow';
import Institutions from '../components/home/Institutions';
import Voices from '../components/home/Voices';
import Insights from '../components/home/Insights';
import ContactSection from '../components/home/ContactSection';
import CallToAction from '../components/home/CallToAction';

export default function HomePage({ onOpenContact }) {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <Updates />
      <WhoWeAre onOpenContact={onOpenContact} />
      <Expertise onOpenContact={onOpenContact} />
      <ApplicationAreas />
      <Workflow />
      <Institutions />
      <Voices />
      <Insights />
      <ContactSection />
      <CallToAction onOpenContact={onOpenContact} />
    </>
  );
}
