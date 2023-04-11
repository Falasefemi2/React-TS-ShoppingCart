import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const StoreItem = ({ id, title, price, thumbnail }: StoreItem) => {
  const quanity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={thumbnail}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{title}</span>
          <span className="ms-2 muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quanity === 0 ? (
            <Button className="w-100">+ Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "5rem" }}
              >
                <Button>-</Button>
                <div>
                <span className="fs-3">{quanity}</span> In Cart
                </div>
                <Button>+</Button>
              </div>
            <Button variant="danger" size="sm">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
