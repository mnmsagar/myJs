const rootNode = document.getRootNode();
console.log(rootNode);
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);
const htmlchildNode = htmlElementNode.childNodes;
console.log(htmlchildNode);

const headElement = htmlElementNode.childNodes[0];
const textElement = htmlElementNode.childNodes[1];
const bodyElement = htmlElementNode.childNodes[2];
console.log(headElement);
console.log(textElement);
console.log(bodyElement);
console.log(headElement.parentNode);
const headpearts = headElement.childNodes;
console.log(headpearts);

// sibling relation


