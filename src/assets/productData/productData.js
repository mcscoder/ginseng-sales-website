import category from "./productCategory";

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

const productInformation = (
  imgPath,
  category,
  productName,
  quantitySold,
  rating,
  price
) => {
  return {
    imgPath: imgPath,
    category: category,
    productName: productName,
    quantitySold: quantitySold,
    rating: rating,
    price: price,
  };
};

const productData = {
  [`${category.ruouQuocTuu}`]: {
    title: categoryName.ruouQuocTuu,
    information: [
      productInformation(
        require("assets/images/product/ruou-quoc-tuu-k5.jpg"),
        categoryName.ruouQuocTuu,
        "Rượu Quốc Tửu K5",
        459,
        5,
        "5,200,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.ruouSam}`]: {
    title: categoryName.ruouSam,
    information: [
      productInformation(
        require("assets/images/product/premium-gold-2-600x600.jpg"),
        categoryName.ruouSam,
        "Rượu Sâm Ngọc Linh K5 Premium",
        245,
        5,
        "1,860,000"
      ),
      productInformation(
        require("assets/images/product/gold2-600x600.png"),
        categoryName.ruouSam,
        "Rượu Sâm Ngọc Linh K5 (nhãn Vàng)",
        2958,
        5,
        "1,760,000"
      ),
      productInformation(
        require("assets/images/product/blue2-600x600.png"),
        categoryName.ruouSam,
        "Rượu Sâm Ngọc Linh K5 (nhãn Xanh)",
        1326,
        5,
        "1,200,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.dichChietSam}`]: {
    title: categoryName.dichChietSam,
    information: [
      productInformation(
        require("assets/images/product/chai-dich-chiet-600x600.jpg"),
        categoryName.dichChietSam,
        "TPBVSK Dịch chiết Sâm Ngọc Linh K5 – 50ml",
        4845,
        5,
        "135,000"
      ),
      productInformation(
        require("assets/images/product/dich-chiet-10-600x600.png"),
        categoryName.dichChietSam,
        "TPBVSK Dịch chiết Sâm Ngọc Linh K5 – 50ml – 10 chai/hộp",
        5202,
        5,
        "1,320,000"
      ),
      productInformation(
        require("assets/images/product/dich-chiet-5-600x600.png"),
        categoryName.dichChietSam,
        "TPBVSK Dịch chiết Sâm Ngọc Linh K5 – 50ml – 05 chai/hộp",
        1326,
        5,
        "660,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.samMatOng}`]: {
    title: categoryName.samMatOng,
    information: [
      productInformation(
        require("assets/images/product/matong-600x600.png"),
        categoryName.samMatOng,
        "TPBS K5 Sâm Ngọc Linh Mật Ong 250ml",
        3213,
        5,
        "3,390,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.traSam}`]: {
    title: categoryName.traSam,
    information: [
      productInformation(
        require("assets/images/product/tra20-600x600.png"),
        categoryName.traSam,
        "TPBVSK K5 Vina Giseng Tea (hộp 20 gói)",
        3366,
        5,
        "650,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.samYen}`]: {
    title: categoryName.samYen,
    information: [
      productInformation(
        require("assets/images/product/900x900-BO-kidnest-600x600.jpg"),
        categoryName.samYen,
        "Tổ Yến Sâm Ngọc Linh K5 Kids",
        969,
        5,
        "45,000"
      ),
    ],
    information: [
      productInformation(
        require("assets/images/product/chai-sam-yen-600x600.jpg"),
        categoryName.samYen,
        "Tổ yến Sâm Ngọc Linh 100ml",
        510,
        5,
        "105,000"
      ),
    ],
    information: [
      productInformation(
        require("assets/images/product/hop-yen-sam2-600x600.png"),
        categoryName.samYen,
        "Tổ yến Sâm Ngọc Linh 100ml – 5 hủ/hộp",
        7905,
        4,
        "525,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.giftCombo}`]: {
    title: categoryName.giftCombo,
    information: [
      productInformation(
        require("assets/images/product/09_Hop-qua-Loc-Xuan-600x600.jpg"),
        categoryName.giftCombo,
        "Hộp Quà Lộc Xuân",
        357,
        5,
        "1,850,000"
      ),
      productInformation(
        require("assets/images/product/08_Hop-qua-Hung-Thinh-600x600.jpg"),
        categoryName.giftCombo,
        "Hộp Quà Hưng Thịnh",
        153,
        5,
        "2,100,000"
      ),
      productInformation(
        require("assets/images/product/07_Hop-qua-An-Khang-600x600.jpg"),
        categoryName.giftCombo,
        "Hộp Quà An Khang",
        102,
        5,
        "2,150,000"
      ),
      productInformation(
        require("assets/images/product/06_Hop-qua-Dai-Phu-600x600.jpg"),
        categoryName.giftCombo,
        "Hộp Quà Đại Phú",
        459,
        5,
        "2,450,000"
      ),
      productInformation(
        require("assets/images/product/05_Hop-qua-Thinh-Phat-600x600.jpg"),
        categoryName.giftCombo,
        "Hộp Quà Thịnh Phát",
        459,
        5,
        "2,650,000"
      ),
      productInformation(
        require("assets/images/product/04_Hop-qua-Thinh-Vuong-600x600.jpg"),
        categoryName.giftCombo,
        "Hộp Quà Thịnh Vượng",
        459,
        5,
        "2,700,000"
      ),
      productInformation(
        require("assets/images/product/03_Hop-qua-Tan-Tai-600x600.jpg"),
        categoryName.giftCombo,
        "Hộp Quà Tấn Tài",
        459,
        5,
        "2,700,000"
      ),
      productInformation(
        require("assets/images/product/02_Hop-qua-Dai-Quy-600x600.jpg"),
        categoryName.giftCombo,
        "Hộp Quà Đại Quý",
        153,
        5,
        "3,000,000"
      ),
      productInformation(
        require("assets/images/product/01_Hop-qua-Tan-Loc-600x600.jpg"),
        categoryName.giftCombo,
        "Hộp Quà Tấn Lộc",
        51,
        5,
        "3,250,000"
      ),
      productInformation(
        require("assets/images/product/Combo-phu-quy-600x598.jpg"),
        categoryName.giftCombo,
        "Combo Phú Quý",
        51,
        5,
        "4,390,000"
      ),
      productInformation(
        require("assets/images/product/combo-loc-phat-3-600x600.jpg"),
        categoryName.giftCombo,
        "Combo Lộc Phát",
        51,
        5,
        "750,000"
      ),
      productInformation(
        require("assets/images/product/Combo-sac-xuan-600x598.jpg"),
        categoryName.giftCombo,
        "Combo Sắc Xuân",
        204,
        5,
        "750,000"
      ),
      productInformation(
        require("assets/images/product/com-bo-cat-tuong-3-600x600.jpg"),
        categoryName.giftCombo,
        "Combo Cát Tường",
        204,
        5,
        "1,310,000"
      ),
      productInformation(
        require("assets/images/product/combo-dai-cat-600x600.jpg"),
        categoryName.giftCombo,
        "Combo Đại Cát",
        459,
        5,
        "3,070,000"
      ),
      productInformation(
        require("assets/images/product/Combo-tan-loc-600x598.jpg"),
        categoryName.giftCombo,
        "Combo Tấn Lộc",
        459,
        5,
        "2,510,000"
      ),
      productInformation(
        require("assets/images/product/Combo-tan-tai-600x598.jpg"),
        categoryName.giftCombo,
        "Combo Tấn Tài",
        51,
        5,
        "2,410,000"
      ),
      productInformation(
        require("assets/images/product/combo-dai-loc-3-600x600.jpg"),
        categoryName.giftCombo,
        "Combo Đại Lộc",
        357,
        5,
        "1,850,000"
      ),
      productInformation(
        require("assets/images/product/combo-thinh-vuong-3-600x600.jpg"),
        categoryName.giftCombo,
        "Combo Thịnh Vượng",
        57,
        5,
        "2,420,000"
      ),
      productInformation(
        require("assets/images/product/combo-an-khang-3-600x600.jpg"),
        categoryName.giftCombo,
        "Combo An Khang",
        57,
        5,
        "1,860,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.tpcn}`]: {
    title: categoryName.tpcn,
    information: [
      productInformation(
        require("assets/images/product/tpbvsk-for-women.png"),
        categoryName.ruouQuocTuu,
        "TPBVSK LOVE GOOD FOR WOMEN’S HEALTH 20",
        6996,
        1,
        "900,000"
      ),
      productInformation(
        require("assets/images/product/tpbvsk-for-men.png"),
        categoryName.ruouQuocTuu,
        "TPBVSK LOVE GOOD FOR MEN’S HEALTH 20 GOOD GOOD GOOD GOOD",
        9669,
        2,
        "900,000"
      ),
      productInformation(
        require("assets/images/product/tpbvsk-for-women.png"),
        categoryName.ruouQuocTuu,
        "TPBVSK LOVE GOOD FOR WOMEN’S HEALTH",
        6969,
        3,
        "1,500,000"
      ),
      productInformation(
        require("assets/images/product/tpbvsk-for-men.png"),
        categoryName.ruouQuocTuu,
        "TPBVSK LOVE GOOD FOR MEN’S HEALTH",
        9696,
        4,
        "1,500,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.nuocTangLuc}`]: {
    title: categoryName.nuocTangLuc,
    information: [
      productInformation(
        require("assets/images/product/post-thao-duoc-900x900-nen-trang-600x600.jpg"),
        categoryName.nuocTangLuc,
        "Thực Phẩm Bổ Sung Nước Tăng Lực Sâm Ngọc Linh K5",
        1530,
        5,
        "12,000"
      ),
      productInformation(
        require("assets/images/product/nightwolf245-thung-600x600.png"),
        categoryName.nuocTangLuc,
        "[Thùng/24Lon]Nước tăng lực Night Wolf vị nguyên bản 320ml",
        153,
        5,
        "472,000"
      ),
      productInformation(
        require("assets/images/product/loc6nw-600x600.jpg"),
        categoryName.nuocTangLuc,
        "[Pack/6Lon]Nước tăng lực Night Wolf vị nguyên bản 320ml",
        51,
        5,
        "120,000"
      ),
      productInformation(
        require("assets/images/product/NW-320-600x600.jpg"),
        categoryName.nuocTangLuc,
        "Thực Phẩm Bổ Sung Nước Tăng Lực Night Wolf 320ml",
        663,
        5,
        "20,000"
      ),
      productInformation(
        require("assets/images/product/NW-250-600x600.jpg"),
        categoryName.nuocTangLuc,
        "Thực phẩm bổ sung Nước tăng lực Night Wolf 245ml",
        459,
        5,
        "16,000"
      ),
      productInformation(
        require("assets/images/product/nwcf245-600x600.jpg"),
        categoryName.nuocTangLuc,
        "Thực phẩm bổ sung Nước tăng lực Night Wolf vị cà phê 245ml",
        459,
        5,
        "16,000"
      ),
      productInformation(
        require("assets/images/product/nightwolf245-thung-600x600.png"),
        categoryName.nuocTangLuc,
        "[Thùng/24Lon]Nước tăng lực Night Wolf vị nguyên bản 245ml",
        459,
        5,
        "384,000"
      ),
      productInformation(
        require("assets/images/product/nightwolfcf-thung-600x600.png"),
        categoryName.nuocTangLuc,
        "[Thùng/24Lon]Nước tăng lực Night Wolf vị cà phê 245ml",
        459,
        5,
        "384,000"
      ),
      productInformation(
        require("assets/images/product/loc6cf-600x600.jpg"),
        categoryName.nuocTangLuc,
        "[Pack/6Lon]Nước tăng lực Night Wolf vị cà phê 245ml",
        459,
        5,
        "96,000"
      ),
      productInformation(
        require("assets/images/product/loc6nw-600x600.jpg"),
        categoryName.nuocTangLuc,
        "[Pack/6Lon]Nước tăng lực Night Wolf vị nguyên bản 245ml",
        459,
        5,
        "96,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.collagenDrink}`]: {
    title: categoryName.collagenDrink,
    information: [
      productInformation(
        require("assets/images/product/hoop-10-1-600x600.jpg"),
        categoryName.collagenDrink,
        "TPBS Collagen – Sâm Ngọc Linh – Tổ Yến Noliko",
        663,
        5,
        "90,000"
      ),
      productInformation(
        require("assets/images/product/Noliko-600x600.jpg"),
        categoryName.collagenDrink,
        "Thực phẩm bổ sung Nước uống dưỡng da Sâm Ngọc Linh Collagen NOLIKO 240ml_lon",
        3366,
        5,
        "20,000"
      ),
      productInformation(
        require("assets/images/product/noliko-thung-600x600.png"),
        categoryName.collagenDrink,
        "[Thùng/24Lon]Nước dưỡng da NOLIKO 240ml",
        1224,
        5,
        "480,000"
      ),
      productInformation(
        require("assets/images/product/noliko-pack6-600x600.png"),
        categoryName.collagenDrink,
        "[Pack/6Lon]Nước uống dưỡng da Sâm Ngọc Linh Collagen NOLIKO 240ml",
        357,
        5,
        "120,000"
      ),
    ],
  },

  // ---------------------------------------------------------------------------------------------------

  [`${category.suaDe}`]: {
    title: categoryName.suaDe,
    information: [
      productInformation(
        require("assets/images/product/de-say-nguyen-ban-600x600.jpg"),
        categoryName.suaDe,
        "Sữa chua dê nguyên bản sấy thăng hoa",
        459,
        5,
        "76,000"
      ),
      productInformation(
        require("assets/images/product/de-say-viet-quat-600x600.jpg"),
        categoryName.suaDe,
        "Sữa chua dê việt quất sấy thăng hoa",
        459,
        5,
        "76,000"
      ),
      productInformation(
        require("assets/images/product/de-say-sau-rieng-600x600.jpg"),
        categoryName.suaDe,
        "Sữa chua dê sầu riêng sấy thăng hoa",
        459,
        5,
        "76,000"
      ),
      productInformation(
        require("assets/images/product/de-say-cherry-600x600.jpg"),
        categoryName.suaDe,
        "Sữa chua dê cherry sấy thăng hoa",
        459,
        5,
        "76,000"
      ),
    ],
  },
};

export default productData;
