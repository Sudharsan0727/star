import ExpertiseView from '../components/expertise/ExpertiseView';

export default function ExpertisePage({ activeTab = 'domains', onOpenContact }) {
  return <ExpertiseView initialTab={activeTab} onOpenContact={onOpenContact} />;
}
