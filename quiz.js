const quizQuestions = [
  {
    id: 1,
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: ["String", "Boolean", "Object", "Number"],
    answer: "Object"
  },
  {
    id: 2,
    question: "What is the correct way to write a multi-line comment in JavaScript?",
    options: ["// comment //", "/* comment */", "<!-- comment -->", "** comment **"],
    answer: "/* comment */"
  },
  {
    id: 3,
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.objectify()", "JSON.parse()", "JSON.convert()"],
    answer: "JSON.parse()"
  },
  {
    id: 4,
    question: "What is the output of the expression: '5' + 2?",
    options: ["7", "52", "NaN", "Error"],
    answer: "52"
  },
  {
    id: 5,
    question: "Which array method removes the first element from an array?",
    options: ["pop()", "shift()", "unshift()", "splice()"],
    answer: "shift()"
  },
  {
    id: 6,
    question: "What does the 'NaN' value represent in JavaScript?",
    options: ["Not a Number", "Null and Nullify", "No Available Name", "New Array Node"],
    answer: "Not a Number"
  },
  {
    id: 7,
    question: "Which method is used to select an HTML element by its unique ID attribute?",
    options: ["querySelector()", "getElementsByClassName()", "getElementById()", "getElement()"],
    answer: "getElementById()"
  },
  {
    id: 8,
    question: "What is the output of the expression: 3 === '3'?",
    options: ["true", "false", "undefined", "null"],
    answer: "false"
  },
  {
    id: 9,
    question: "Which built-in object contains methods for mathematical constants and functions?",
    options: ["Math", "Mathematics", "Calc", "Numbers"],
    answer: "Math"
  },
  {
    id: 10,
    question: "Which operator is used to check if a property exists within an object?",
    options: ["exists", "inside", "has", "in"],
    answer: "in"
  },
  {
    id: 11,
    question: "What does the 'this' keyword refer to inside a standard object method context?",
    options: ["The global window object", "The host object itself", "The root document", "The execution function"],
    answer: "The host object itself"
  },
  {
    id: 12,
    question: "Which function schedule execution of a callback precisely once after a set millisecond delay?",
    options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
    answer: "setTimeout()"
  },
  {
    id: 13,
    call: 13,
    question: "How do you declare an arrow function expression in JavaScript?",
    options: ["function => {}", "() => {}", "let function() => {}", "call => {}"],
    answer: "() => {}"
  },
  {
    id: 14,
    question: "Which array method joins all elements of an array into a single string?",
    options: ["concat()", "join()", "push()", "split()"],
    answer: "join()"
  },
  {
    id: 15,
    question: "What is the default initial value of a variable that has been declared but not assigned?",
    options: ["null", "void", "0", "undefined"],
    answer: "undefined"
  },
  {
    id: 16,
    question: "Which statement stops the execution of a loop entirely and jumps out of it?",
    options: ["break", "continue", "return", "exit"],
    answer: "break"
  },
  {
    id: 17,
    question: "What does DOM stand for in web development?",
    options: ["Data Object Management", "Document Object Model", "Digital Optimal Matrix", "Document Order Module"],
    answer: "Document Object Model"
  },
  {
    id: 18,
    question: "Which method removes the last element from an array and returns that element?",
    options: ["pop()", "push()", "shift()", "splice()"],
    answer: "pop()"
  },
  {
    id: 19,
    question: "Which symbol is used to access properties or methods from an object instance?",
    options: ["Dot (.)", "Arrow (->)", "Colon (:)", "Hash (#)"],
    answer: "Dot (.)"
  },
  {
    id: 20,
    question: "What is the output of the logical expression: true && false?",
    options: ["true", "false", "null", "undefined"],
    answer: "false"
  }
];

var answerlist=Array(20).fill(0);
var current=0;

function showmcq()
{
    clearselection();
    var x=quizQuestions[current];
    document.getElementById("qbox").innerText=x['question'];
    document.getElementById("opt1").innerText=x["options"][0];
    document.getElementById("opt2").innerText=x["options"][1];
    document.getElementById("opt3").innerText=x["options"][2];
    document.getElementById("opt4").innerText=x["options"][3];
    var y=answerlist[current];
    if(y>0)
        document.getElementById("opt"+y).classList.add('selectedbox');
}
function shownext()
{
    if(current<19)
        current++;
    showmcq();
}

function showprev()
{
    if(current>0)
        current--;
    showmcq();
}

function generatenumberbox()
{
    for(var i=0;i<20;i++)
    {
        var x=document.createElement('div');
        x.className="qnumber";
        x.innerText=i+1;
        x.addEventListener('click',showselected);
        document.getElementById("numberbox").appendChild(x);

    }
}

function setup()
{
    generatenumberbox();
    showmcq();
}

function showselected()
{
    current=parseInt(event.target.innerText)-1;
    showmcq();
}

function makeselect(num)
{
    clearselection();
    document.getElementById("opt"+num).classList.add("selectedbox");
    answerlist[current]=num;
}
function clearselection()
{
    for(i=1;i<5;i++)
        document.getElementById("opt"+i).classList.remove("selectedbox");
}