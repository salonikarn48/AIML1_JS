// selecting with id
const result = document.getElementById("para");
result.innerHTML = "myself";
result.title = "myname";

// selecting with class
const result2 = document.getElementsByClassName("heading");
result2[0].innerHTML = "hii";

// selecting with tag
const result3 = document.getElementsByTagName("p");
result3[2].innerHTML = "this is a pet";
result3[1].style.color = "blue";
result3[1].innerText = "my paragraph";

// query selector
const test = document.querySelector("ul li:nth-child(3)");
test.style.background = "green";
test.style.padding = "10px";

// querySelectorAll
const test2 = document.querySelectorAll("ul li");
for(let i = 0; i < test2.length; i++){
    test2[i].style.backgroundColor = "green";
    test2[i].style.margin = "10px";
    test2[i].style.color = "blue";
}