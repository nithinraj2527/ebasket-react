import { ProductTemplate } from "./ProductTemplate";

export function ProductWrapper(props) {
  const products = [
    {
      title: "1Emporio Armani",
      description: "Giovanni Analog Black Dial Men's Watch-AR11349",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61RnYP3i2TL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹27500",
      strikeprice: "₹35000",
      offer: "23%",
    },
    {
      title: "2Emporio Armani",
      description: "Analog Black Dial Men's Watch-AR11275",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71JCB7IigDL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹22446",
      strikeprice: "₹28700",
      offer: "34%",
    },
    {
      title: "3Emporio Armani",
      description: "Mega Chief Digital Black Dial Men's Watch-DZ4593",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51Bm-3xmTyL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹35898",
      strikeprice: "₹36997",
      offer: "22%",
    },
    {
      title: "4Emporio Armani",
      description: "Mega Chief Analog Black Dial Men's Watch-DZ4593",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71o1ZFkrocL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹26777",
      strikeprice: "₹29887",
      offer: "12%",
    },
    {
      title: "5Emporio Armani",
      description: "Mega Chief Digital Black Dial Men's Watch-DZ4593",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81bE2ZvX2YL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹26879",
      strikeprice: "₹29889",
      offer: "28%",
    },
    {
      title: "6Emporio Armani",
      description: "Axial Analog Black Dial Men's Watch-DZT2014",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81fC2HJ8c6L._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹21474",
      strikeprice: "₹23564",
      offer: "12%",
    },
    {
      title: "7Emporio Armani",
      description: "Axial Analog Black Dial Men's Watch-DZT2014",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81FACb8jcOL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹12747",
      strikeprice: "₹17395",
      offer: "32%",
    },
    {
      title: "8Armani Exchange",
      description: "Digital Black Dial Men's Watch-AX2952",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51Rm8vaDvtL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹12235",
      strikeprice: "₹17395",
      offer: "32%",
    },
    {
      title: "9Armani Exchange",
      description: "Digital Blue Dial Men's Watch-AX7128",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81a3np4-3aL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹19747",
      strikeprice: "₹25395",
      offer: "32%",
    },
    {
      title: "10Emporio Armani",
      description: "Mega Chief Analog Black Dial Men's Watch-DZ4593",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61+Ucd9XRvL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹12656",
      strikeprice: "₹17395",
      offer: "32%",
    },
    {
      title: "11Emporio Armani",
      description: "Axial Digital Black Dial Men's Watch-DZT2014",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61hydM2nx0L._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹13457",
      strikeprice: "₹17395",
      offer: "32%",
    },
    {
      title: "12Emporio Armani",
      description: "Axial Digital Black Dial Men's Watch-DZT2014",
      imageUrl:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51W9AhhJjvL._AC_UL320_.jpg",
      linkUrl:
        "https://www.amazon.in/Emporio-Armani-Giovanni-Analog-Watch-AR11349/dp/B08V3TK36Z/ref=sr_1_1?pf_rd_i=2563504031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=c0043bd7-04fa-4e5e-ab5b-3c68c27b9dd6&pf_rd_r=EYG65HJZ7C706713G0FE&pf_rd_s=merchandised-search-9&qid=1672737947&refinements=p_n_feature_fourteen_browse-bin%3A11142592031%2Cp_89%3AEmporio+Armani&rnid=3837712031&s=watches&sr=1-1",
      price: "₹17399",
      strikeprice: "₹19500",
      offer: "25%",
    },
  ];

  const filtered = products.filter((product) => {
    return product.description.toLowerCase().includes(props.searchText);
  });
  return (
    <>
      <div class="conatainer d-flex flex-wrap" id="productsContainer">
        {filtered.map((product) => {
          return <ProductTemplate prod={product} />;
        })}
      </div>
    </>
  );
}
