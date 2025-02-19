// function customRender (reactElement,container) {
//     const domElement = document.createElement
//     (reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.propes.href)
//     domElement.setAttribute('target',reactElement.propes.target)
//     container.appendChild(domElement)
// }

const reactElement = {
    type: 'a',
    props: {  // Fixed typo: "propes" → "props"
        href:  'https://google.com',
        target: '_blank' // Fixed typo: "-blank" → "_blank"
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector("#root");

function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {  // Fixed typo: "propes" → "props"
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

// Call the function after defining everything
customRender(reactElement, mainContainer);
