import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}
