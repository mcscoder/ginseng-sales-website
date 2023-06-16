import routes from "config/routes";

export const headerToggleLinkItems = [
  {
    label: "Sâm Ngọc Linh củ tươi",
    path: "/",
  },
  {
    label: "Rượu củ tươi Sâm Ngọc Linh ngâm bình",
    path: "/",
  },
  {
    label: "Rượu quốc tửu",
    path: routes.categoryLink.ruouQuocTuu,
  },
  {
    label: "Rượu sâm",
    path: routes.categoryLink.ruouSam,
  },
  {
    label: "Dịch chiết sâm",
    path: routes.categoryLink.dichChietSam,
  },
  {
    label: "Sâm mật ong",
    path: routes.categoryLink.samMatOng,
  },
  {
    label: "Trà sâm",
    path: routes.categoryLink.traSam,
  },
  {
    label: "Sâm yến",
    path: routes.categoryLink.samYen,
  },
];

export const headerLinkItems = [
  {
    label: "Combo quà tặng",
    path: routes.categoryLink.giftCombo,
  },
  {
    label: "Thực phẩm chức năng",
    path: routes.categoryLink.tpcn,
  },
  {
    label: "Nước tăng lực",
    path: routes.categoryLink.nuocTangLuc,
  },
  {
    label: "Nước uống collagen",
    path: routes.categoryLink.collagenDrink,
  },
  {
    label: "Sữa dê",
    path: routes.categoryLink.suaDe,
  },
];
