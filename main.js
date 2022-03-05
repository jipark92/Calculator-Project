//title of project for fun
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
                    prevDisplay.textContent = prevDisplay.textContent.slice(0,-1);
                })
            })
        };
        submitOperator();
        //make equal/total work
        function eqaulButton(){
            equalBtn.addEventListener('click',()=>{
                // console.log(operandsB, "b")
                // checks for error and operate total result
                if (operatorSign === "/"  && operandsB === "0" || operatorSign === "+" && operandsB === "" || operatorSign === "-" && operandsB === ""  || operatorSign === "*" && operandsB === "" || operatorSign === "/" && operandsB === ""){
                    prevDisplay.textContent = "you can't do that!";
                    currDisplay.textContent = "";
                    operandsA = "";
                    operandsB = "";
                    operatorSign = "";
                    totalResult = "";
                    setTimeout(()=>{
                        prevDisplay.textContent = "";
                    },300)
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
                if (!operatorSign){
                    //deletes operandA text
                    prevDisplay.textContent = prevDisplay.textContent.slice(0,-1);
                    operandsA = prevDisplay.textContent ;
                }   //deletes operandB text
                    else if (operatorSign === "-"||operatorSign === "+"||operatorSign === "*"||operatorSign === "/"){
                    currDisplay.textContent =currDisplay.textContent.slice(0,-1);
                    operandsB = currDisplay.textContent;
                }
            })
        }
        deleteButton();
    }
    allButtons();
}
calculatorProject();