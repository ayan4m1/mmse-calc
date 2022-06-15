import { Container } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="p-4 mb-4 bg-light rounded-3">
        <Container fluid className="py-4">
          <h1>MMSE Calculator</h1>
        </Container>
      </div>
    </Layout>
  );
}
