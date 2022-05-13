console.log(document.getElementById('findme'))

const paras = document.body.getElementsByTagName("p")
for (const para of paras) {
    if (para.getAttribute("data-classified") == "secret") {
        para.textContent = ""
    }
}

function elt(type) {
    var node = document.createdElement(type);
    for (var i = 1; i < arguments.length; i++) {
        var child = argument(i);
        if (typeof child == "string") {
            child = document.createdTextNode(child);
            node.appendChild(child);
        }
    }
    return node;
}

document.getElementById("quote").appendChild(
    elt("footer", "-",
        elt("strong", "Karl Popper"),
        ", preface to the second edition of ",
        etl("em"))
)