//colors config
const colorsConfig = {
  blue: {
    bgBackground: "#6C8CE2",
    btnBackground: "#2600FF",
    activeBtn: "#050D31",
    btnBorder: "#2600FF",
  },
  yellow: {
    bgBackground: "#fcce03",
    btnBackground: "#ebb852",
    activeBtn: "#ad871d",
    btnBorder: "#ebb852",
  },
  pink: {
    bgBackground: "pink",
    btnBackground: "#f003fc",
    activeBtn: "#97089e",
    btnBorder: "#f003fc",
  },
};

//show hide config when clicking on buttons
const showHideConfig = {
  inputBtn: {
    show: "#input",
    hide: [".diaryEntries", ".importExport"],
  },
  recordsBtn: {
    show: ".diaryEntries",
    hide: ["#input", ".importExport"],
  },
  importExportBtn: {
    show: ".importExport",
    hide: ["#input", ".diaryEntries"],
  },
};

//selectors
const mainInputs = Array.from(document.querySelectorAll(".mainInput"));
const colorBtns = Array.from(document.querySelectorAll(".color"));
const tabs = ["input", "diaryEntries", "importExport"];

let themeColor = checkLocalStore("themeColor");
let activeSelector = checkLocalStore("activeSelector", "");

mainInputs.forEach((i) => i.addEventListener("click", () => activateTab(i)));
colorBtns.forEach((i) => i.addEventListener("click", () => changeColor(i)));

styleBody(themeColor);
styleMainButtons(themeColor);
styleActiveBtn(themeColor);
showCurrentTabElements(activeSelector);

function styleMainButtons(color) {}

function styleActiveBtn(color) {}

function showCurrentTabElements(activeSelector) {}

function hideObsoleteTabElements(tab) {}

function styleBody(themeColor) {}

function checkLocalStore(key, defaultVal = "blue") {}

function activateTab(tab) {}

function changeColor(color) {}

const showAlert = (msg) => {};
