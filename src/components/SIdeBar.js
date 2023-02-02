import { Nav } from "react-bootstrap";

export function SideBar(props) {
  return (
    <Nav defaultActiveKey="/home" className="flex-column filter">
      <Nav.Link className="filter-text1" href="/">
        <b>Filters</b>{" "}
      </Nav.Link>{" "}
      <hr style={{ marginTop: "1px" }} />
      <Nav.Link className="filter-text1" eventKey="link-1">
        CATEGORIES
      </Nav.Link>
      <ul type=">">
        <ol>Watches and Accessories </ol>
        <span style={{ padding: "20px", color: "#2874f0", marginLeft: "10px" }}>
          Men's wrist watches
        </span>
      </ul>
      <hr />
      <Nav.Link className="filter-text1" eventKey="link-2">
        Select Type
      </Nav.Link>
      <ul type=">">
        <ol>
          <input
            type="radio"
            name="watches"
            id="button1"
            onClick={() => {
              props.searchItem("digital");
            }}
          />
          Digital
        </ol>
        <ol>
          <input
            type="radio"
            name="watches"
            onClick={() => {
              props.searchItem("analog");
            }}
          />
          Analog
        </ol>
      </ul>
      <hr />
      <Nav.Link className="filter-text1" eventKey="link-2">
        Select Price range
      </Nav.Link>
      <ul type=">">
        <ol>
          <input type="radio" name="watches" />
          10000-20000
        </ol>
        <ol>
          <input type="radio" name="watches" />
          20000& above
        </ol>
      </ul>
      <hr />
      <div style={{ marginLeft: "10px" }}>
        <h6> Gender</h6>
        <input type="checkbox" />
        Male <br />
        <input type="checkbox" /> Female <br />
        <input type="checkbox" /> Male &Female <br />
        <input type="checkbox" /> Unisex <br />
      </div>{" "}
      <hr />
      <div style={{ marginLeft: "10px" }}>
        <h6>Customer Ratings</h6>
        <input type="checkbox" name="rating" />
        5★ & above <br />
        <input type="checkbox" name="rating" />
        4★ & above <br />
        <input type="checkbox" name="rating" />
        3★ & above <br />
      </div>
    </Nav>
  );
}
