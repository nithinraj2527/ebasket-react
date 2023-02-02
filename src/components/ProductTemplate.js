import Card from "react-bootstrap/Card";
export function WatchesTemplate(props) {
  const p = props.prod;
  return (
    <div className="main-container">
      <Card style={{ width: "15rem", border: "0.1px solid #e0dede" }}>
        <div class=" box1">
          <a href={p.linkUrl} target="blank" rel="noopener noreferrer">
            {" "}
            <Card.Img variant="top" src={p.imageUrl} />
          </a>
          <div class="card-body">
            <span class="box2">
              <b>{p.title}</b>
            </span>{" "}
            <br />
            <span class="IRpwTa text-description">{p.description}</span>
            <div class="box3">
              {" "}
              <b>'{p.price}</b>{" "}
              <span style={{ color: "#878787", padding: "5px" }}>
                <strike>{p.strikeprice}</strike>
              </span>{" "}
              <span class="offer">
                {" "}
                <b>{p.offer}OFF</b>
              </span>
            </div>
          </div>
        </div>{" "}
      </Card>
    </div>
  );
}
