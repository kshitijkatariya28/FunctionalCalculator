let equalBtn = document.getElementById("equalBtn")
let input = document.getElementById("input");

 equalBtn.addEventListener("click",()=>{
      let expression = input.value;
      let sum = eval(expression);
      input.value = sum;
 })

    let btn = document.getElementsByTagName("button")
    Array.from(btn).forEach((button)=>{
        button.addEventListener("click",()=>{
            if(button.innerText === "="){
                return
            }else if(button.innerText === "AC"){
                input.value = ""
                return
            }else if(button.innerText === "Del"){
                input.value = input.value.slice(0,-1)
                return
            }
            value = button.innerText
            input.value = input.value + value
        })
    })

    // btn.addEventListener("click",()=>{
    //      let input = document.getElementById("input");
    //      Array.from(btn).forEach((element)=>{
    //         input.value = btn.value
    //      })
    // })


