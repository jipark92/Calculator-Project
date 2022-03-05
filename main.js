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
                    prevDisplay.textContent += operatorSign.slice(0,-1);
                })
            })
        };
        submitOperator();
        //make equal/total work
        function eqaulButton(){
            equalBtn.addEventListener('click',()=>{
                // console.log(operandsB, "b")
                // checks for error and operate total result
                if (!operandsB){
                    prevDisplay.textContent = "ERROR:clear and enter proper number";
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