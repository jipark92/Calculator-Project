function calculatorProject(){
    const prevDisplay = document.querySelector('.prev-display');
    const currDisplay = document.querySelector('.curr-display');
    const operands = document.querySelectorAll('.operands');
    const operators = document.querySelectorAll('.operators');
    const clearBtn = document.querySelector('.clear-sign');
    const deleteBtn = document.querySelector('.delete-sign');
    const equalBtn = document.querySelector('.equal-sign');
    //variables 
    let operandsA = "";
    let operatorSign = "";
    let operandsB = "";
    let totalResult = "";
    //make buttons work
    function allButtons(){
        //make operands work
        function submitOperands() {
            operands.forEach((operand) => {
                operand.addEventListener('click', ()=>{
                    if (!operatorSign){
                        operandsA += operand.value;
                        prevDisplay.textContent = operandsA;
                        // console.log(operandsA, "op1");  
                    } 
                    else if (operatorSign === "-"||operatorSign === "+"||operatorSign === "*"||operatorSign === "/"){
                        operandsB += operand.value;
                        currDisplay.textContent = operandsB;
                        // console.log(operandsB, "op2");
                    }
                })
            })
        };
        submitOperands();
        //make operators work
        function submitOperator() {
            operators.forEach((operator)=> {
                operator.addEventListener('click', ()=>{
                   
                    operatorSign = operator.value;
                    prevDisplay.textContent += operatorSign;
                 
                })
            })
        };
        submitOperator();
        //make equal/total work
        function eqaulButton(){
            equalBtn.addEventListener('click',()=>{
                // console.log(operandsB, "b")
                if (!operandsB){
                    prevDisplay.textContent = "ERROR:clear and enter 2nd number";
                } else if (operatorSign === '+'){
                    prevDisplay.textContent = parseInt(operandsA) + parseInt(operandsB) ;
                    currDisplay.textContent = "";
                    operandsA = prevDisplay.textContent;
                    operandsB = "";
                } else if (operatorSign === '-'){
                    prevDisplay.textContent = parseInt(operandsA) - parseInt(operandsB);
                    currDisplay.textContent = "";
                    operandsA = prevDisplay.textContent;
                    operandsB = "";
                } else if (operatorSign === '*'){
                    prevDisplay.textContent = parseInt(operandsA) * parseInt(operandsB);
                    currDisplay.textContent = "";
                    operandsA = prevDisplay.textContent;
                    operandsB = "";
                } else if (operatorSign === '/'){
                    prevDisplay.textContent = parseInt(operandsA) / parseInt(operandsB);
                    currDisplay.textContent = "";
                    operandsA = prevDisplay.textContent;
                    operandsB = "";
                } else if (operatorSign && !operandsB) {
                    totalResult.textContent = "error"
                    totalResult = totalResult.textContent
                }
            })
        };
        eqaulButton();
        //make clear work
        function clearButton(){
            clearBtn.addEventListener('click',()=>{
                prevDisplay.textContent = "";
                currDisplay.textContent = "";
                operandsA = "";
                operandsB = "";
                operatorSign = "";
                totalResult = "";
            })
        };
        clearButton();
        //make delete work
        function deleteButton() {
            deleteBtn.addEventListener('click',()=>{
                prevDisplay.textContent = operandsA.slice(0,-1);
                prevDisplay.textContent.slice(0,-1);
                console.log(operandsA, 'click');
                console.log(prevDisplay.textContent, 'click');
            })
        }
        deleteButton();
    }
    allButtons();
}
calculatorProject();



// function checkError(){
//     if (operandsB === ""){
//         prevDisplay.textContent = "error";
//     }
// }


    // if (!operatorSign){
    //     prevDisplay.textContent.slice(0,-1);
    //     console.log(prevDisplay.textContent, "del");
    //     // console.log(operandsA)
    //     // console.log(prevDisplay.textContent);
    // } else if (operatorSign === "-"||operatorSign === "+"||operatorSign === "*"||operatorSign === "/"){
    //     // currDisplay.textContent = operandsB.slice(0,-1);
    // }




    // function totalResult() {
    //     equalBtn.addEventListener('click', ()=>{
    //         if (currDisplay.textContent.includes('+')) {
    //             return operandsA + operandsB;
    //         } else if (currDisplay.textContent.includes('-')){
    //             return operandsA - operandsB;
    //         } else if (currDisplay.textContent.includes('*')){
    //             return operandsA * operandsB;
    //         } else if (currDisplay.textContent.includes('/')){
    //             return operandsA / operandsB;
    //         }
    //         console.log(operatoSign)
    //     })
    // }
    // totalResult();