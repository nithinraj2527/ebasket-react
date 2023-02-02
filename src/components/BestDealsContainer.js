import Card from "react-bootstrap/Card";

export function BestDealsContainer(props) {
  const products = [
    {
      title: "Top mirrorless Cameras ",
      description: "Canon, Soni, fuji..",
      imageUrl:
        "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
      linkUrl:
        "https://www.flipkart.com/french-connection-men-checkered-casual-blue-shirt/p/itmfevf4qaejk7gh?pid=SHTFEURJEW53HQDW&lid=LSTSHTFEURJEW53HQDWYFFJ9A&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_12&otracker=browse&fm=organic&iid=be205d74-2cb8-4bb7-a12d-e153bd0f00b7.SHTFEURJEW53HQDW.SEARCH&ppt=browse&ppn=browse&ssid=19h4szwc000000001675233568317",
      price: "₹1499",
      strikeprice: "₹3523",
      offer: "53%",
    },
    {
      title: "Top deals of Washing machines ",
      description: "Samsung, Whirlpool",
      imageUrl:
        "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
      linkUrl:
        "https://www.flipkart.com/french-connection-men-checkered-casual-blue-shirt/p/itmfevf4qaejk7gh?pid=SHTFEURJEW53HQDW&lid=LSTSHTFEURJEW53HQDWYFFJ9A&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_12&otracker=browse&fm=organic&iid=be205d74-2cb8-4bb7-a12d-e153bd0f00b7.SHTFEURJEW53HQDW.SEARCH&ppt=browse&ppn=browse&ssid=19h4szwc000000001675233568317",
      price: "₹2244",
      strikeprice: "₹3562",
      offer: "34%",
    },
    {
      title: "Monitor ",
      description: "Dell",
      imageUrl:
        "https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70",
      linkUrl:
        "https://www.flipkart.com/french-connection-men-checkered-casual-blue-shirt/p/itmfevf4qaejk7gh?pid=SHTFEURJEW53HQDW&lid=LSTSHTFEURJEW53HQDWYFFJ9A&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_12&otracker=browse&fm=organic&iid=be205d74-2cb8-4bb7-a12d-e153bd0f00b7.SHTFEURJEW53HQDW.SEARCH&ppt=browse&ppn=browse&ssid=19h4szwc000000001675233568317",
      price: "₹1898",
      strikeprice: "₹3666",
      offer: "22%",
    },
    // {
    //   title: "Best of Shavers ",
    //   description: "Philips & Syska",
    //   imageUrl:
    //     "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/v/y/o/m-s23hmwt118-tommy-hilfiger-original-imaghq3ephhcshgg.jpeg?q=70",
    //   linkUrl:
    //     "https://www.flipkart.com/french-connection-men-checkered-casual-blue-shirt/p/itmfevf4qaejk7gh?pid=SHTFEURJEW53HQDW&lid=LSTSHTFEURJEW53HQDWYFFJ9A&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_12&otracker=browse&fm=organic&iid=be205d74-2cb8-4bb7-a12d-e153bd0f00b7.SHTFEURJEW53HQDW.SEARCH&ppt=browse&ppn=browse&ssid=19h4szwc000000001675233568317",
    //   price: "₹2677",
    //   strikeprice: "₹2988",
    //   offer: "12%",
    // },
    // {
    //   title: "Printers",
    //   description: "Brother",
    //   imageUrl:
    //     "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/v/y/o/m-s23hmwt118-tommy-hilfiger-original-imaghq3ephhcshgg.jpeg?q=70",
    //   linkUrl:
    //     "https://www.flipkart.com/french-connection-men-checkered-casual-blue-shirt/p/itmfevf4qaejk7gh?pid=SHTFEURJEW53HQDW&lid=LSTSHTFEURJEW53HQDWYFFJ9A&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_12&otracker=browse&fm=organic&iid=be205d74-2cb8-4bb7-a12d-e153bd0f00b7.SHTFEURJEW53HQDW.SEARCH&ppt=browse&ppn=browse&ssid=19h4szwc000000001675233568317",
    //   price: "₹2677",
    //   strikeprice: "₹2988",
    //   offer: "12%",
    // },
    // {
    //   title: "2Printers",
    //   description: "Brother",
    //   imageUrl:
    //     "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/v/y/o/m-s23hmwt118-tommy-hilfiger-original-imaghq3ephhcshgg.jpeg?q=70",
    //   linkUrl:
    //     "https://www.flipkart.com/french-connection-men-checkered-casual-blue-shirt/p/itmfevf4qaejk7gh?pid=SHTFEURJEW53HQDW&lid=LSTSHTFEURJEW53HQDWYFFJ9A&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_12&otracker=browse&fm=organic&iid=be205d74-2cb8-4bb7-a12d-e153bd0f00b7.SHTFEURJEW53HQDW.SEARCH&ppt=browse&ppn=browse&ssid=19h4szwc000000001675233568317",
    //   price: "₹2677",
    //   strikeprice: "₹2988",
    //   offer: "12%",
    // },
    // {
    //   title: "3Printers",
    //   description: "Brother",
    //   imageUrl:
    //     "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/v/y/o/m-s23hmwt118-tommy-hilfiger-original-imaghq3ephhcshgg.jpeg?q=70",
    //   linkUrl:
    //     "https://www.flipkart.com/french-connection-men-checkered-casual-blue-shirt/p/itmfevf4qaejk7gh?pid=SHTFEURJEW53HQDW&lid=LSTSHTFEURJEW53HQDWYFFJ9A&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_12&otracker=browse&fm=organic&iid=be205d74-2cb8-4bb7-a12d-e153bd0f00b7.SHTFEURJEW53HQDW.SEARCH&ppt=browse&ppn=browse&ssid=19h4szwc000000001675233568317",
    //   price: "₹2677",
    //   strikeprice: "₹2988",
    //   offer: "12%",
    // },
  ];
  return (
    <>
      {products.map((p) => {
        return (
          <div className="bestdeals-container">
            <Card
              style={{
                width: "14rem",
                border: "0.1px solid #e0dede",
                margin: "5px",
              }}
            >
              <div class=" box1">
                <a href={p.linkUrl} target="blank" rel="noopener noreferrer">
                  {" "}
                  <Card.Img variant="top" src={p.imageUrl} />
                </a>
                <div class="card-body">
                  <span>
                    <b>{p.title}</b>
                  </span>{" "}
                  <br />
                  <span class="IRpwTa text-description">{p.description}</span>
                  <div class="box3">
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
      })}
    </>
  );
}
