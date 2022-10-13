const txt_first_name = document.querySelector("#txt-first-name");
const txt_last_name = document.querySelector("#txt-last-name");
const span_full_name = document.querySelector("#span-full-name");

/* txt_first_name.addEventListener("keyup",()=>{
    span_full_name.innerHTML = txt_first_name.value
})

txt_first_name.addEventListener("keyup",(event)=>{
    console.log(event.target)
    console.log(event.target.value)
}) */

function updateName(){
    span_full_name.innerHTML = `${txt_first_name.value} ${txt_last_name.value}`
}


txt_first_name.addEventListener("keyup", updateName)
txt_last_name.addEventListener("keyup", updateName)

