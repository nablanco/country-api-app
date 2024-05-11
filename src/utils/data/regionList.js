import data from "./data.json";

let regionListDuplicates = data.map(({ region }) => region);
let regionList = [...new Set(regionListDuplicates)];

export default regionList;
