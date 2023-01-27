export function SideBar(props) {
  return (
    <div className="filter">
      <div className="container">
        <div className="row">
          <div className="filter-text1">
            <h5>Filters</h5>
          </div>
        </div>
        <hr style={{ marginTop: "5px" }} />
        <span>
          <h6>CATEGORIES</h6>
        </span>
        <ul type=">">
          <ol>Watches and Accessorie</ol>
          <span
            style={{ padding: "20px", color: "#2874f0", marginLeft: "10px" }}
          >
            Men's wrist watches
          </span>
        </ul>
        <hr />
        <span>
          <h6>Select type</h6>
        </span>
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
        <span>
          <h6>Select Price Range</h6>
        </span>
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
        </div>
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
      </div>
    </div>
  );
}
