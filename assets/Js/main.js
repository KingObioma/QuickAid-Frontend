const sidebar = document.getElementById("sidebar-js");
// const logoContainer = document.getElementById("logo-container-js");
// const bottomSidebar = document.getElementById("bottom-sidebar-js");
// const documentation = document.getElementById("documentation-js");
// const sidebarIcons = document.querySelectorAll(".sidebar-icons");
const sectionTitle = document.getElementById("section-title-js");
const logoImage = document.getElementById("logo-image-js");
const hamburger1 = document.getElementById("hamburger1-js");
const hamburger2 = document.getElementById("hamburger2-js");
const settingsIcon = document.getElementById("settings-icon-js");
const settingsSidebar = document.getElementById("settings-sidebar-js");
const closeSidebar = document.getElementById("close-sidebar-js");
const settingsIcon2 = document.getElementById("settings-icon2-js");
const colorBtnPink = document.getElementById("color-btn-pink-js");
const colorBtnBlack = document.getElementById("color-btn-black-js");
const colorBtnNavy = document.getElementById("color-btn-navy-js");
const colorBtnBlue = document.getElementById("color-btn-blue-js");
const colorBtnGreen = document.getElementById("color-btn-green-js");
const colorBtnOrange = document.getElementById("color-btn-orange-js");
const colorBtnRed = document.getElementById("color-btn-red-js");
// const activeSidebar = document.querySelector(".active-sidebar");
const typeDarkBtn = document.getElementById("type-btn-dark-js");
const typeTransBtn = document.getElementById("type-btn-trans-js");
const typeWhiteBtn = document.getElementById("type-btn-white-js");

const activeSidebar1 = document.getElementById("active-sidebar-js1");
const activeSidebar2 = document.getElementById("active-sidebar-js2");

const fixNavbar = document.getElementById("fix-navbar-js");
const lightDarkMode = document.getElementById("light-dark-js");





hamburger1.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.classList.add("display");
    hamburger1.classList.add("hide");
    hamburger2.classList.add("display");
});
hamburger2.addEventListener("click", (event) => {
    event.stopPropagation(); 
    sidebar.classList.remove("display");
    hamburger1.classList.remove("hide");
    hamburger2.classList.remove("display");
});
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target)) {
        sidebar.classList.remove('display');
        hamburger1.classList.remove('hide');
        hamburger2.classList.remove('display');
    }
});
settingsIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    settingsSidebar.classList.add("display2");
});
settingsIcon2.addEventListener("click", (event) => {
    event.stopPropagation();
    settingsSidebar.classList.add("display2");
});
closeSidebar.addEventListener("click", (event) => {
    event.stopPropagation();
    settingsSidebar.classList.remove("display2");
});
document.addEventListener('click', (event) => {
    if (!settingsSidebar.contains(event.target)) {
        settingsSidebar.classList.remove("display2");
    }
});
colorBtnPink.addEventListener("click", () => {
    activeSidebar1.classList.value = "active-sidebar pink";
    activeSidebar2.classList.value = "active-sidebar pink";
});
colorBtnBlack.addEventListener("click", () => {
    activeSidebar1.classList.value = "active-sidebar black";
    activeSidebar2.classList.value = "active-sidebar navy";
});
colorBtnNavy.addEventListener("click", () => {
    activeSidebar1.classList.value = "active-sidebar black";
    activeSidebar2.classList.value = "active-sidebar navy";
});
colorBtnBlue.addEventListener("click", () => {
    activeSidebar1.classList.value = "active-sidebar blue";
    activeSidebar2.classList.value = "active-sidebar blue";
});
colorBtnGreen.addEventListener("click", () => {
    activeSidebar1.classList.value = "active-sidebar green";
    activeSidebar2.classList.value = "active-sidebar green";
});
colorBtnOrange.addEventListener("click", () => {
    activeSidebar1.classList.value = "active-sidebar orange";
    activeSidebar2.classList.value = "active-sidebar orange";
});
colorBtnRed.addEventListener("click", () => {
    activeSidebar1.classList.value = "active-sidebar red";
    activeSidebar2.classList.value = "active-sidebar red";
});
typeDarkBtn.addEventListener("click", () => {
    sidebar.classList.add("dark");
    typeDarkBtn.classList.add("active");
    typeTransBtn.classList.remove("active");
    typeWhiteBtn.classList.remove("active");
    logoImage.src = "assets/images/logo-ct.png";
});
typeWhiteBtn.addEventListener("click", () => {
    sidebar.classList.remove("dark");
    sidebar.classList.remove("trans");
    typeDarkBtn.classList.remove("active");
    typeTransBtn.classList.remove("active");
    typeWhiteBtn.classList.add("active");
    logoImage.src = "assets/images/logo-ct-dark.png";
});
typeTransBtn.addEventListener("click", () => {
    sidebar.classList.remove("dark");
    sidebar.classList.add("trans");
    typeDarkBtn.classList.remove("active");
    typeTransBtn.classList.add("active");
    typeWhiteBtn.classList.remove("active");
    logoImage.src = "assets/images/logo-ct-dark.png";
});
fixNavbar.addEventListener("change", () => {
    if (fixNavbar.checked) {
        document.body.classList.add("nav-fixed");
    } else {
        document.body.classList.remove("nav-fixed");
    }
});

lightDarkMode.addEventListener("change", () => {
    if (lightDarkMode.checked) {
        document.body.classList.add("darkMode");
        document.documentElement.style.setProperty("--light-gray", "#eae6e6bb");
    } else {
        document.body.classList.remove("darkMode");
        document.documentElement.style.setProperty("--light-gray", "#737373");
    }
    updateSidebarVisibility();
});

window.addEventListener('DOMContentLoaded', () => {
    fixNavbar.checked = false;
    lightDarkMode.checked = false;
});

function updateSidebarVisibility(){
    if(document.body.classList.contains("darkMode")){
        activeSidebar1.style.display = "none";
        activeSidebar2.style.display = "inline";
    }else{
        activeSidebar1.style.display = "inline";
        activeSidebar2.style.display = "none";
    } 
}
updateSidebarVisibility();
