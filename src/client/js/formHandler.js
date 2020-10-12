import { validateUrl } from "./validateUrl"

async function handleSubmit(event) {
    event.preventDefault();
    //Get text from input and validate that is a URL with regex
    let formUrl = document.getElementById('url').value;


    // if (!validateUrl(formUrl)) {
    //     document.getElementById("error-message").innerHTML = "Please, enter a valid URL, like: www.google.com";
    //     return;

    // } else {
    //     document.getElementById("error-message").innerHTML = "";
    // }

    var result = await fetch('http://localhost:8080/evaluate-articles', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ formUrl }),
    })

    var jsonResult = await result.json()

    updateUI(jsonResult)
}

async function handleSubmit2(event) {
    const formText = document.getElementById("textBox");

    var result = await fetch('http://localhost:8080/evaluate-articles', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ formText }),
    })

    var jsonResult = await result.json()

    updateUI(jsonResult)

}


// P+: strong positive
// P: positive
// NEU: neutral
// N: negative
// N+: strong negative
// NONE: without sentiment


// Dynamic UI
const updateUI = (data) => {
    document.getElementById("score-tag").innerHTML = `Score tag retrieved: ${data.score_tag}`;
    document.getElementById("agreement").innerHTML = `Agreement retrieved: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity retrieved: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence retrieved: ${data.confidence}`;
    document.getElementById("irony").innerHTML = `Irony retrieved: ${data.irony}`;
}

// Get the text input field
var textInput = document.getElementById("textBox")
var textInputValue = "";

if (textInput) {
    textInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("textBox").click();
        }
    });
    textInputValue = textInput.value;
}

// Get the url input field
var urlInput = document.getElementById("url");
var urlInputValue = "";

if (urlInput) {
    // Execute a function when the user releases a key on the keyboard
    urlInput.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("url").click();
        }
    });
    urlInputValue = urlInput.value;
}

export { handleSubmit }
export { handleSubmit2 }