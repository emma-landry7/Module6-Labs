import Display from "./Display"

function Calculator() {
    const resultStyle = {
        border: '1px solid white',
        height: '1.5em'
    }

    const digits = [
        {id: 0, value: 0},
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
        {id: 4, value: 4},
        {id: 5, value: 5},
        {id: 6, value: 6},
        {id: 7, value: 7},
        {id: 8, value: 8},
        {id: 9, value: 9}
    ]

    const operators = [
        {id: 10, value: '+'},
        {id: 11, value: '-'},
        {id: 12, value: '*'},
        {id: 13, value: '/'}
    ]

    let equation = ""
    
    const handleDisplay = (char) => {
        console.log(char)
        equation = document.getElementById("result").innerHTML += char
        return equation
    }  
    const digitsList = digits.map(digit => (
        <Display
            key={digit.id}
            value={digit.value}
            onDisplay={handleDisplay}
        />
    ))

    const operatorsList = operators.map(op => (
        <Display
            key={op.id}
            value={op.value}
            onDisplay={handleDisplay}
        />
    ))
    
    const reset = () => {
        document.getElementById("result").innerHTML = ""
        equation = ""
    }
    
    const solve = () => {
        console.log(equation)
        let operator
        for (let char of equation) {
            if (char === '+') operator = char
            else if (char === '-') operator = char
            else if (char === '*') operator = char
            else if (char === '/') operator = char
        }
        const numbers = equation.split(operator)
        console.log(numbers)
        let num1 = parseInt(numbers[0])
        let num2 = parseInt(numbers[1])

        const clearScreen = () => {
            document.getElementById("result").innerHTML = ""
        }

        if (operator === '+') {
            equation = num1 + num2
            clearScreen()
            handleDisplay(equation)
        } else if (operator === '-') {
            equation = num1 - num2
            clearScreen()
            handleDisplay(equation)
        } else if (operator === '*') {
            equation = num1 * num2
            clearScreen()
            handleDisplay(equation)
        } else if (operator === '/') {
            equation = num1 / num2
            clearScreen()
            handleDisplay(equation)
        }
    }

    return (
        <div>
            <section id="result" style={resultStyle}> </section>
            <div>{digitsList}</div>
            <div>
                {operatorsList}
                <button onClick={solve}>=</button>
                <button onClick={reset}>C</button>
            </div>
        </div>
    )
}

export default Calculator;