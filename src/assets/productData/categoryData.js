import category from "./productCategory";
import routes from "config/routes";

const categoryName = {
  ruouQuocTuu: "RƯỢU QUỐC TỬU",
  ruouSam: "RƯỢU SÂM",
  dichChietSam: "DỊCH CHIẾT SÂM",
  samMatOng: "SÂM MẬT ONG",
  traSam: "TRÀ SÂM",
  samYen: "SÂM YẾN",
  giftCombo: "COMBO QUÀ TẶNG",
  tpcn: "THỰC PHẨM CHỨC NĂNG",
  nuocTangLuc: "NƯỚC TĂNG LỰC",
  collagenDrink: "NƯỚC UỐNG COLLAGEN",
  suaDe: "SỮA DÊ",
};

const details = (
  ingredients = "",
  uses = "",
  instructionsForUse = "",
  storageInstructions = "",
  volumeAndPackaging = ""
) => {
  return [
    {
      title: "Thành phần",
      contents: ingredients.split(";"),
    },
    {
      title: "Công Dụng",
      contents: uses.split(";"),
    },
    {
      title: "Hướng dẫn sử dụng",
      contents: instructionsForUse.split(";"),
    },
    {
      title: "Cách bảo quản",
      contents: storageInstructions.split(";"),
    },
    {
      title: "Thể tích & quy cách đóng gói",
      contents: volumeAndPackaging.split(";"),
    },
  ];
};

const productInformation = (
  productPath,
  imgPaths = [],
  category,
  productName,
  quantitySold,
  rating,
  price,
  descriptions = "",
  details = []
) => {
  return {
    productPath: productPath,
    productLinkAddress: `${routes.productLink}/${productPath}`,
    imgPaths: imgPaths,
    category: category,
    productName: productName,
    quantitySold: quantitySold,
    rating: rating,
    price: price,
    descriptions: descriptions.split(";"),
    details: details,
  };
};

const categoryData = {
  // [`${category.ruouQuocTuu}`]: {
  //   title: categoryName.ruouQuocTuu,
  //   productList: [
  //     productInformation(
  //       "ruou-quoc-tuu-k5", // product link
  //       [
  //         require("assets/images/product/ruou-quoc-tuu-k5.jpg"),
  //         require("assets/images/product/quoc-tuu-900x900-07-600x600.jpg"),
  //         require("assets/images/product/quoc-tuu-900x900-08-600x600.jpg"),
  //         require("assets/images/product/quoc-tuu-900x900-09-600x600.jpg"),
  //         require("assets/images/product/quoc-tuu-900x900-10-600x600.jpg"),
  //         require("assets/images/product/quoc-tuu-900x900-11-600x600.jpg"),
  //         require("assets/images/product/quoc-tuu-900x900-12-600x600.jpg"),
  //         require("assets/images/product/quoc-tuu-900x900-13-600x600.jpg"),
  //         require("assets/images/product/quoc-tuu-900x900-14-600x600.jpg"),
  //         require("assets/images/product/quoc-tuu-900x900-15-600x600.jpg"),
  //       ],
  //       categoryName.ruouQuocTuu, // product category name
  //       "Rượu Quốc Tửu K5", // product name
  //       459, // quantity sold
  //       5, // rating from 0 to 5
  //       "5,200,000,// ric
  //       "Rượu Quốc Tửu K5 là loại rượu được phối chế từ rượu whisky K5( một loại rượu đặc sắc được ủ trên 10 năm tuổi với công thức độc đáo bí truyền của riêng K5) cùng với củ Sâm Ngọc Linh trên 12 năm tuổi (10g/l). Qua nhiều công đoạn tinh chế cầu kỳ và độc nhất đã cho ra dòng rượu QUỐC TỬU K5 đặc biệt khó lẫn với bất kỳ loại rượu nào và đảm bảo khi thưởng thức sẽ nhớ mãi không quên.;Sản phẩm rất thích hợp dùng để làm quà tặng bạn bè, gia đình, đối tác hoặc để trưng bày,…nhằm thể hiện sự tinh tế, sự quan tâm chu đáo của người tặng đối với người nhận.",
  //       details(
  //         "Rượu Whisky K5, Sâm Ngọc Linh 12 năm tuổi (10g/l)", // ingredients
  //         "Tăng thể lực, chống mệt mỏi;Kích thích ăn uống;Tăng cường sinh lý", // uses
  //         "Càng ngon hơn khi để lâu. Ngày sản xuất, lô sản xuất được in trên nắp chai.", // instructions for use
  //         "Bảo quản nơi khô ráo và thoáng mát. Tránh tiếp xúc với ánh nắng mặt trời.", // storage instructions
  //         "Thể tích: 750ml/29% ALC.;Quy cách đóng gói: Như trên bao bì." // volume and packaging
  //       )
  //     ),
  //   ],
  // },

  // ---------------------------------------------------------------------------------------------------

  [`${category.ruouSam}`]: {
    title: categoryName.ruouSam,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/premium-gold-2-600x600.jpg")],
        categoryName.ruouSam,
        "Rượu Sâm Ngọc Linh K5 Premium",
        245,
        5,
        1860000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/gold2-600x600.png")],
        categoryName.ruouSam,
        "Rượu Sâm Ngọc Linh K5 (nhãn Vàng)",
        2958,
        5,
        1760000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/blue2-600x600.png")],
        categoryName.ruouSam,
        "Rượu Sâm Ngọc Linh K5 (nhãn Xanh)",
        1326,
        5,
        1200000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.dichChietSam}`]: {
    title: categoryName.dichChietSam,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/chai-dich-chiet-600x600.jpg")],
        categoryName.dichChietSam,
        "TPBVSK Dịch chiết Sâm Ngọc Linh K5 – 50ml",
        4845,
        5,
        135000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/dich-chiet-10-600x600.png")],
        categoryName.dichChietSam,
        "TPBVSK Dịch chiết Sâm Ngọc Linh K5 – 50ml – 10 chai/hộp",
        5202,
        5,
        1320000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/dich-chiet-5-600x600.png")],
        categoryName.dichChietSam,
        "TPBVSK Dịch chiết Sâm Ngọc Linh K5 – 50ml – 05 chai/hộp",
        1326,
        5,
        660000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.samMatOng}`]: {
    title: categoryName.samMatOng,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/matong-600x600.png")],
        categoryName.samMatOng,
        "TPBS K5 Sâm Ngọc Linh Mật Ong 250ml",
        3213,
        5,
        3390000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.traSam}`]: {
    title: categoryName.traSam,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/tra20-600x600.png")],
        categoryName.traSam,
        "TPBVSK K5 Vina Giseng Tea (hộp 20 gói)",
        3366,
        5,
        650000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.samYen}`]: {
    title: categoryName.samYen,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/900x900-BO-kidnest-600x600.jpg")],
        categoryName.samYen,
        "Tổ Yến Sâm Ngọc Linh K5 Kids",
        969,
        5,
        45000
      ),
    ],
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/chai-sam-yen-600x600.jpg")],
        categoryName.samYen,
        "Tổ yến Sâm Ngọc Linh 100ml",
        510,
        5,
        105000
      ),
    ],
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/hop-yen-sam2-600x600.png")],
        categoryName.samYen,
        "Tổ yến Sâm Ngọc Linh 100ml – 5 hủ/hộp",
        7905,
        4,
        525000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.giftCombo}`]: {
    title: categoryName.giftCombo,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/09_Hop-qua-Loc-Xuan-600x600.jpg")],
        categoryName.giftCombo,
        "Hộp Quà Lộc Xuân",
        357,
        5,
        1850000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/08_Hop-qua-Hung-Thinh-600x600.jpg")],
        categoryName.giftCombo,
        "Hộp Quà Hưng Thịnh",
        153,
        5,
        2100000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/07_Hop-qua-An-Khang-600x600.jpg")],
        categoryName.giftCombo,
        "Hộp Quà An Khang",
        102,
        5,
        2150000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/06_Hop-qua-Dai-Phu-600x600.jpg")],
        categoryName.giftCombo,
        "Hộp Quà Đại Phú",
        459,
        5,
        2450000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/05_Hop-qua-Thinh-Phat-600x600.jpg")],
        categoryName.giftCombo,
        "Hộp Quà Thịnh Phát",
        459,
        5,
        2650000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/04_Hop-qua-Thinh-Vuong-600x600.jpg")],
        categoryName.giftCombo,
        "Hộp Quà Thịnh Vượng",
        459,
        5,
        2700000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/03_Hop-qua-Tan-Tai-600x600.jpg")],
        categoryName.giftCombo,
        "Hộp Quà Tấn Tài",
        459,
        5,
        2700000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/02_Hop-qua-Dai-Quy-600x600.jpg")],
        categoryName.giftCombo,
        "Hộp Quà Đại Quý",
        153,
        5,
        3000000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/01_Hop-qua-Tan-Loc-600x600.jpg")],
        categoryName.giftCombo,
        "Hộp Quà Tấn Lộc",
        51,
        5,
        3250000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/Combo-phu-quy-600x598.jpg")],
        categoryName.giftCombo,
        "Combo Phú Quý",
        51,
        5,
        4390000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/combo-loc-phat-3-600x600.jpg")],
        categoryName.giftCombo,
        "Combo Lộc Phát",
        51,
        5,
        750000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/Combo-sac-xuan-600x598.jpg")],
        categoryName.giftCombo,
        "Combo Sắc Xuân",
        204,
        5,
        750000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/com-bo-cat-tuong-3-600x600.jpg")],
        categoryName.giftCombo,
        "Combo Cát Tường",
        204,
        5,
        1310000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/combo-dai-cat-600x600.jpg")],
        categoryName.giftCombo,
        "Combo Đại Cát",
        459,
        5,
        3070000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/Combo-tan-loc-600x598.jpg")],
        categoryName.giftCombo,
        "Combo Tấn Lộc",
        459,
        5,
        2510000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/Combo-tan-tai-600x598.jpg")],
        categoryName.giftCombo,
        "Combo Tấn Tài",
        51,
        5,
        2410000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/combo-dai-loc-3-600x600.jpg")],
        categoryName.giftCombo,
        "Combo Đại Lộc",
        357,
        5,
        1850000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/combo-thinh-vuong-3-600x600.jpg")],
        categoryName.giftCombo,
        "Combo Thịnh Vượng",
        57,
        5,
        2420000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/combo-an-khang-3-600x600.jpg")],
        categoryName.giftCombo,
        "Combo An Khang",
        57,
        5,
        1860000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.tpcn}`]: {
    title: categoryName.tpcn,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/tpbvsk-for-women.png")],
        categoryName.ruouQuocTuu,
        "TPBVSK LOVE GOOD FOR WOMEN’S HEALTH 20",
        6996,
        1,
        900000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/tpbvsk-for-men.png")],
        categoryName.ruouQuocTuu,
        "TPBVSK LOVE GOOD FOR MEN’S HEALTH 20 GOOD GOOD GOOD GOOD",
        9669,
        2,
        900000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/tpbvsk-for-women.png")],
        categoryName.ruouQuocTuu,
        "TPBVSK LOVE GOOD FOR WOMEN’S HEALTH",
        6969,
        3,
        1500000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/tpbvsk-for-men.png")],
        categoryName.ruouQuocTuu,
        "TPBVSK LOVE GOOD FOR MEN’S HEALTH",
        9696,
        4,
        1500000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.nuocTangLuc}`]: {
    title: categoryName.nuocTangLuc,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [
          require("assets/images/product/post-thao-duoc-900x900-nen-trang-600x600.jpg"),
        ],
        categoryName.nuocTangLuc,
        "Thực Phẩm Bổ Sung Nước Tăng Lực Sâm Ngọc Linh K5",
        1530,
        5,
        12000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/nightwolf245-thung-600x600.png")],
        categoryName.nuocTangLuc,
        "[Thùng/24Lon]Nước tăng lực Night Wolf vị nguyên bản 320ml",
        153,
        5,
        472000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/loc6nw-600x600.jpg")],
        categoryName.nuocTangLuc,
        "[Pack/6Lon]Nước tăng lực Night Wolf vị nguyên bản 320ml",
        51,
        5,
        120000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/NW-320-600x600.jpg")],
        categoryName.nuocTangLuc,
        "Thực Phẩm Bổ Sung Nước Tăng Lực Night Wolf 320ml",
        663,
        5,
        20000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/NW-250-600x600.jpg")],
        categoryName.nuocTangLuc,
        "Thực phẩm bổ sung Nước tăng lực Night Wolf 245ml",
        459,
        5,
        16000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/nwcf245-600x600.jpg")],
        categoryName.nuocTangLuc,
        "Thực phẩm bổ sung Nước tăng lực Night Wolf vị cà phê 245ml",
        459,
        5,
        16000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/nightwolf245-thung-600x600.png")],
        categoryName.nuocTangLuc,
        "[Thùng/24Lon]Nước tăng lực Night Wolf vị nguyên bản 245ml",
        459,
        5,
        384000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/nightwolfcf-thung-600x600.png")],
        categoryName.nuocTangLuc,
        "[Thùng/24Lon]Nước tăng lực Night Wolf vị cà phê 245ml",
        459,
        5,
        384000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/loc6cf-600x600.jpg")],
        categoryName.nuocTangLuc,
        "[Pack/6Lon]Nước tăng lực Night Wolf vị cà phê 245ml",
        459,
        5,
        96000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/loc6nw-600x600.jpg")],
        categoryName.nuocTangLuc,
        "[Pack/6Lon]Nước tăng lực Night Wolf vị nguyên bản 245ml",
        459,
        5,
        96000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.collagenDrink}`]: {
    title: categoryName.collagenDrink,
    productList: [
      productInformation(
        "to-yen-noliko",
        [require("assets/images/product/hoop-10-1-600x600.jpg")],
        categoryName.collagenDrink,
        "TPBS Collagen – Sâm Ngọc Linh – Tổ Yến Noliko",
        663,
        5,
        90000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/Noliko-600x600.jpg")],
        categoryName.collagenDrink,
        "Thực phẩm bổ sung Nước uống dưỡng da Sâm Ngọc Linh Collagen NOLIKO 240ml_lon",
        3366,
        5,
        20000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/noliko-thung-600x600.png")],
        categoryName.collagenDrink,
        "[Thùng/24Lon]Nước dưỡng da NOLIKO 240ml",
        1224,
        5,
        480000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/noliko-pack6-600x600.png")],
        categoryName.collagenDrink,
        "[Pack/6Lon]Nước uống dưỡng da Sâm Ngọc Linh Collagen NOLIKO 240ml",
        357,
        5,
        120000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.suaDe}`]: {
    title: categoryName.suaDe,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/de-say-nguyen-ban-600x600.jpg")],
        categoryName.suaDe,
        "Sữa chua dê nguyên bản sấy thăng hoa",
        459,
        5,
        76000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/de-say-viet-quat-600x600.jpg")],
        categoryName.suaDe,
        "Sữa chua dê việt quất sấy thăng hoa",
        459,
        5,
        76000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/de-say-sau-rieng-600x600.jpg")],
        categoryName.suaDe,
        "Sữa chua dê sầu riêng sấy thăng hoa",
        459,
        5,
        76000
      ),
      productInformation(
        "ruou-quoc-tuu-k5",
        [require("assets/images/product/de-say-cherry-600x600.jpg")],
        categoryName.suaDe,
        "Sữa chua dê cherry sấy thăng hoa",
        459,
        5,
        76000
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.ruouQuocTuu}`]: {
    title: categoryName.ruouQuocTuu,
    productList: [
      productInformation(
        "ruou-quoc-tuu-k5", // product link
        [
          // product images
          require("assets/images/product/ruou-quoc-tuu-k5.jpg"), // appear in product grid
          require("assets/images/product/quoc-tuu-900x900-07-600x600.jpg"),
          require("assets/images/product/quoc-tuu-900x900-08-600x600.jpg"),
          require("assets/images/product/quoc-tuu-900x900-09-600x600.jpg"),
          require("assets/images/product/quoc-tuu-900x900-10-600x600.jpg"),
          require("assets/images/product/quoc-tuu-900x900-11-600x600.jpg"),
          require("assets/images/product/quoc-tuu-900x900-12-600x600.jpg"),
          require("assets/images/product/quoc-tuu-900x900-13-600x600.jpg"),
          require("assets/images/product/quoc-tuu-900x900-14-600x600.jpg"),
          require("assets/images/product/quoc-tuu-900x900-15-600x600.jpg"),
        ],
        categoryName.ruouQuocTuu, // product category name
        "Rượu Quốc Tửu K5", // product name
        459, // quantity sold
        5, // rating from 0 to 5
        5200000, // price
        "Rượu Quốc Tửu K5 là loại rượu được phối chế từ rượu whisky K5( một loại rượu đặc sắc được ủ trên 10 năm tuổi với công thức độc đáo bí truyền của riêng K5) cùng với củ Sâm Ngọc Linh trên 12 năm tuổi (10g/l). Qua nhiều công đoạn tinh chế cầu kỳ và độc nhất đã cho ra dòng rượu QUỐC TỬU K5 đặc biệt khó lẫn với bất kỳ loại rượu nào và đảm bảo khi thưởng thức sẽ nhớ mãi không quên.;Sản phẩm rất thích hợp dùng để làm quà tặng bạn bè, gia đình, đối tác hoặc để trưng bày,…nhằm thể hiện sự tinh tế, sự quan tâm chu đáo của người tặng đối với người nhận.",
        details(
          "Rượu Whisky K5, Sâm Ngọc Linh 12 năm tuổi (10g/l)", // ingredients
          "Tăng thể lực, chống mệt mỏi;Kích thích ăn uống;Tăng cường sinh lý", // uses
          "Càng ngon hơn khi để lâu. Ngày sản xuất, lô sản xuất được in trên nắp chai.", // instructions for use
          "Bảo quản nơi khô ráo và thoáng mát. Tránh tiếp xúc với ánh nắng mặt trời.", // storage instructions
          "Thể tích: 750ml/29% ALC.;Quy cách đóng gói: Như trên bao bì." // volume and packaging
        )
      ),
    ],
  },
};

export default categoryData;
