import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carrossel from '../components/Carrossel';
import Cards from '../components/Cards';


function Home() {

  return (
    <>
      <Carrossel />

      <Row>
        <Col><Cards titulo="fiugw8riuo" texto="3u8 rhfcio uenfcf" /></Col>
        <Col><Cards titulo="rsthndg" texto="zfmzzznxfx" /></Col>
        <Col><Cards titulo="fxm" texto="Tgmtxd,uk,k" /></Col>
      </Row>
    </>
  );
}

export default Home;
