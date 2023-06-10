export function readMore(wrapper){
    let el = document.querySelector(`${wrapper}`)
    let div = el.querySelectorAll(".read-more")
   
    if(div){
        div.forEach(textDiv=>{
            let stringArray = textDiv.innerText.split(" ");
        let oldString = stringArray.join(" ");
        let newString = stringArray.splice(0,21).join(" ")
            if(stringArray.length > 20){
                textDiv.innerHTML = `${newString}...<span class="read-more-btn">Read More</span>`;
                let btn = textDiv.querySelector(".read-more-btn")
                btn.addEventListener("click",()=>{
                       textDiv.innerHTML = oldString
                })
            }
       
        })
    }

}