
const customRender =(reactElement,container)=>{

    //First Method TO Create Custom React
// const dom=document.createElement(reactElement.type);
// dom.innerHTML=reactElement.children;
// dom.setAttribute("href",reactElement.href);
// dom.setAttribute("target",reactElement.target);
// container.appendChild(dom)


//Second and Efficient method to create React Library

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
    }




const reactElement ={
    type: 'a',
    props: {
        href:"https://google.com",
        target:"_blank"
    },
    children: 'Click me to visit google'
}



const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)