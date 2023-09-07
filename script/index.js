const toggle = document.querySelector("#toggle");
const asideBar = document.querySelector(".aside-bar");
let setToggle = false;

toggle.addEventListener("click" , () =>{
    if(setToggle === false){
        asideBar.style.width = "200px";
        asideBar.style.padding = "20px";
        setToggle = true;
    }else if(setToggle === true){
        asideBar.style.width = "0px";
        asideBar.style.padding = "0px";
        setToggle = false;
    }
});