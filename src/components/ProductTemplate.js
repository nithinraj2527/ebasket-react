export function ProductTemplate(props) {
  const p = props.prod;
  return (
    <div className="card box1">
      <a href={p.linkUrl} target="blank" rel="noopener noreferrer">
        {" "}
        <img src={p.imageUrl} className="product-img card-img-top" alt="..." />
      </a>
      <div className="card-body">
        <span className="box2">
          <b>{p.title}</b>
        </span>{" "}
        <br />
        <span className="IRpwTa text">{p.description}</span>
        <div className="box3">
          {" "}
          <b>'{p.price}</b>{" "}
          <span className="product-span">
            <strike>{p.strikeprice}</strike>
          </span>{" "}
          <span className="offer">
            {" "}
            <b>{p.offer}</b>
          </span>
        </div>
      </div>
    </div>
  );
}
