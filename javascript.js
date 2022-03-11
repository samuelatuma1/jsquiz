const jsquestions = [
    {
        type: 'basic',
        quest : "Which of the following quotation should you use if you wish to mix JavaScript code with strings",
        a : "''",
        b: '""',
        c: '**',
        d: '``',
        ans: 'd'
    },

    {
        type: 'basic',
        quest : "Which of the following is not true about JavaScript?",
        a : "JavaScript can be both object oriented, functional and/or procedural",
        b: 'JavaScript is strongly typed',
        c: 'JavaScript is dynamically typed',
        d: 'JavaScript treats empty primitive data as Falsies',
        ans: 'b'
    },
    {
        type: 'basic',
        quest : "What is the difference betweeen let and var",
        a : "let has a block scope whereas var has a function scope",
        b: 'let is used for declaring variables whereas var is used for declaring classes',
        c: 'let is out dated, whereas var is the more modern version of let',
        d: 'None of the above',
        ans: 'a'
    },
    {
        type: 'basic',
        quest : "___________ is something that returns a single value no matter how complex it looks",
        a : "a function",
        b: 'a class',
        c: 'an expression',
        d: 'a statement',
        ans: 'c'
    },
    {
        type: 'basic',
        quest :    `
            What is the output of the following code
            <code>
                <pre>
                    const first_true = false || null || 16 || 'hey'
                    console.log(first_true)
                </pre>
            </code>
        `,
        a : "false",
        b: 'null',
        c: '16',
        d: 'hey',
        ans: 'c'
    },
    {
        type: 'basic',
        quest :    `
            What is the output of the following code
            <code>
                <pre>
                    const first_true = false && null && 16 && 'hey'
                    console.log(first_true)
                </pre>
            </code>
        `,
        a : "false",
        b: 'null',
        c: '16',
        d: 'hey',
        ans: 'a'
    },
    {
        type: 'basic',
        quest : `
            Which is the correct output for the following code? <br>
            <code>
                <pre>
                    let x = [1, 2]
                    let y = x
                    y.push('modified')
                    console.log(x)
                </pre>
            </code>
        `,
        a : "[1, 2]",
        b: 'Error: Circular import',
        c:"[1, 2, 'modified']",
        d: '[1]',
        ans: 'c'
    },
    {
        type: 'basic',
        quest :    `
            What is the output of the following code
            <code>
                <pre>
                    let num = 11
                    let num_type = num % 2 == 0 ? 'even' : 'odd'
                    console.log(num_type)
                </pre>
            </code>
        `,
        a : "even",
        b: 'odd',
        c: 'true',
        d: 'false',
        ans: 'b'
    },
    {
        type: 'basic',
        quest :    `
            What is the output of the following code
            <code>
                <pre>
                   let stringData = "Hello, How are you today?"
                   let splitString = stringData.split(' ')
                   console.log(splitString)
                </pre>
            </code>
        `,
        a : "['Hello,', 'How', 'are', 'you', 'today?']",
        b: 'h,e,l,l,o, ,h,o,w, ,a,r,e, ,y,o,u, ,t,o,d,a,y',
        c: '',
        d: 'None of the above',
        ans: 'a'
    }

]

export default jsquestions;