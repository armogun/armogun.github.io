function decryptText() {
    const key = document.getElementById('fname').value;
    let input = document.getElementById('lname').value;

    let decrypted = '';

    input = input.trim().split('\n');
    text = [];
    for (const x of input) {
        text.push(x.trim().split(' ').map((x) => Number(x)));
    }
    console.log(text);

    for (const line of text) {
        for (let i = 0; i < line.length; i++) {
            decrypted += String.fromCharCode(line[i] ^ key.charCodeAt(i % key.length));
        }
        decrypted += '\n'
    }
    outputResult(decrypted);
}

function outputResult(decrypted) {
    const startToken = "STARTLIST";
    const endToken = "ENDLIST";
    const start = decrypted.indexOf(startToken);
    const end = decrypted.indexOf(endToken);
    const personOutput = document.getElementById('person');
    const targetOutput = document.getElementById('target');
    const objectiveOutput = document.getElementById('objective');
    if (start == -1 || end == -1) {
        personOutput.textContent = "ERROR: Invalid input";
        targetOutput.textContent = '';
        objectiveOutput.textContent = '';
    }
    const text = decrypted.substring(start + startToken.length, end - endToken.length);
    const array = text.split("|");
    if (array.length != 3) {
        personOutput.textContent = "ERROR: Invalid input";
        targetOutput.textContent = '';
        objectiveOutput.textContent = '';
    }
    [person, target, objective] = array;
    person = person.trim(" ");
    target = target.trim(" ");
    objective = objective.trim(" ");
    document.getElementById('person').textContent = "Your name: " + person;
    document.getElementById('target').textContent = "Your target: " + target;
    document.getElementById('objective').textContent = "Your objective: " + objective;
}

function encrypt() {
    const key = document.getElementById('fname').value;
    const input = document.getElementById('lname').value;

    let encrypted = '';
    
    for (let i = 0; i < input.length; i++) {
        encrypted += (input.charCodeAt(i) ^ key.charCodeAt(i % key.length)) + " ";
    }

    document.getElementById('output').textContent = encrypted;
}

