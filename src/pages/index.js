import { Container, Jumbotron } from 'react-bootstrap';

import Layout from '~components/Layout';
import SEO from '~components/SEO';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Jumbotron variant="info">
        <Container>
          <h1>RCMAS Calculator</h1>
        </Container>
      </Jumbotron>
    </Layout>
  );
}
