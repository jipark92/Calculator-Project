//title of project for fun
function calculatorProject(){
    const prevDisplay = document.querySelector('.prev-display');
    const currDisplay = document.querySelector('.curr-display');
    const operands = document.querySelectorAll('.operands');
    const operators = document.querySelectorAll('.operators');
    const clearBtn = document.querySelector('.clear-sign');
    const deleteBtn = document.querySelector('.delete-sign');
    const equalBtn = document.querySelector('.equal-sign');
    const decimalBtn = document.querySelector('.decimal-button');

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
                        console.log(operandsA, "op1");  
                    } 
                    else if (operatorSign === "-"||operatorSign === "+"||operatorSign === "*"||operatorSign === "/"){
                        operandsB += operand.value;
                        currDisplay.textContent = operandsB;
                        console.log(operandsB, "op2");
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
                    prevDisplay.textContent = "you can't divide by 0 or empty input!";
                    currDisplay.textContent = "";
                    operandsA = "";
                    operandsB = "";
                    operatorSign = "";
                    totalResult = "";
                    setTimeout(()=>{
                        prevDisplay.textContent = "";
                    },2000)
                } else if (operatorSign === '+'){
                    prevDisplay.textContent = parseFloat(operandsA) + parseFloat(operandsB);
                    currDisplay.textContent = "";
                    operandsA = prevDisplay.textContent;
                    operandsB = "";
                } else if (operatorSign === '-'){
                    prevDisplay.textContent = parseFloat(operandsA) - parseFloat(operandsB);
                    currDisplay.textContent = "";
                    operandsA = prevDisplay.textContent;
                    operandsB = "";
                } else if (operatorSign === '*'){
                    prevDisplay.textContent = parseFloat(operandsA) * parseFloat(operandsB);
                    currDisplay.textContent = "";
                    operandsA = prevDisplay.textContent;
                    operandsB = "";
                } else if (operatorSign === '/'){
                    prevDisplay.textContent = parseFloat(operandsA) / parseFloat(operandsB);
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
                prevDisplay.textContent = "";s
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
        };
        deleteButton();

        //make decimal work
        function decimalButton() {
            decimalBtn.addEventListener('click',()=>{
                if (!operatorSign){
                    if(prevDisplay.textContent.includes(".")) return
                    operandsA += decimalBtn.value;
                    prevDisplay.textContent = operandsA;
                }  
                else if (operatorSign === "-"||operatorSign === "+"||operatorSign === "*"||operatorSign === "/"){
                    if(currDisplay.textContent.includes(".")) return
                    operandsB += decimalBtn.value;
                    currDisplay.textContent = operandsB;
                };
            })
        };
        decimalButton();
    }
    allButtons();
}
calculatorProject();