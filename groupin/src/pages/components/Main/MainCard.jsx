import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../CSS/MainCard.css';

function BasicExample({ category, content, src }) {
  return (
    <Card style={{ width: '18rem' }} class="shadow">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title style={{ fontSize: "20px", color: "#fc7100" }}>{category}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Link to = "/reviewboard"><Button variant="primary" style={{ fontSize: "15px" }}>리뷰 보러가기</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;