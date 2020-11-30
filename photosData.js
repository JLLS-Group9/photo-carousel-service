// 8097 8128,
// 8129 8157,
// 8158 8180,
// 8181, 8215,
// 8216, 8246
// https://housephotostrulia.s3-us-west-1.amazonaws.com/House5/IMG_8241.JPG

// eslint-disable-next-line func-names
const houseUrls = function (start, end, houseNumber) {
  const urls = [];
  for (let i = start; i <= end; i += 1) {
    urls.push(`https://housephotostrulia.s3-us-west-1.amazonaws.com/House${houseNumber}/IMG_${i}.JPG`);
  }
  return urls;
};

const housesUrls = [
  houseUrls(8097, 8128, 1),
  houseUrls(8129, 8157, 2),
  houseUrls(8158, 8180, 3),
  houseUrls(8181, 8215, 4),
  houseUrls(8216, 8246, 5),
];

module.exports.housesPhotos = housesUrls;
