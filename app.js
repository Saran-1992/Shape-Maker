let button = document.getElementById("button");
var numberInshape = 1;
var Oldvalue = 0;

button.onclick = () => {
    let n = document.getElementById("number").value;
    const circle = document.getElementById("circle");
    const square = document.getElementById("square");
    const rect = document.getElementById("rect");
    const box = document.getElementById("box");

    n=Number(n) + Number(Oldvalue);
    
    for(let j = numberInshape; j<=n; j++)
    {
        let shape = document.createElement("div");
        shape.innerHTML += numberInshape;
        if(circle.checked)
            shape.classList.add("circle");
        else if (square.checked)
            shape.classList.add("square");
        else if (rect.checked)
            shape.classList.add("rectangle");
        else
            document.write("Invalid Input");

            numberInshape++;
            box.appendChild(shape);
            Oldvalue = document.getElementById("box").lastElementChild.innerHTML;
    }
};