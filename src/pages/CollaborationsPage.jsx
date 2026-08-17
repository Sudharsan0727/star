import CollaborationsView from '../components/collaborations/CollaborationsView';

export default function CollaborationsPage({ activeTab = 'ongoing', onOpenContact }) {
  return <CollaborationsView initialTab={activeTab} onOpenContact={onOpenContact} />;
}
