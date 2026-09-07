function customRender(reactelement, container) {
    /*const domelement = document.createElement(reactelement.type);//creating a new DOM element based on the type of the reactelement
    domelement.innerHTML = reactelement.props.children;//setting the inner HTML of the DOM element to the children of the reactelement
    domelement.setAttribute('href', reactelement.props.href);//setting the href attribute of the DOM element to the href of the reactelement
    domelement.setAttribute('target', reactelement.props.target);//setting the target attribute of the DOM element to '_blank' to open the link in a new tab
    container.appendChild(domelement);//appending the newly created DOM element to the container
*/
    const domelement = document.createElement(reactelement.type);//creating a new DOM element based on the type of the reactelement
    domelement.innerHTML = reactelement.props.children;//setting the inner HTML of the DOM element to the children of the reactelement
    for (const prop in reactelement.props) {//iterating over the properties of the reactelement
        if (prop !== 'children') {//checking if the property is not 'children'
            domelement.setAttribute(prop, reactelement.props[prop]);//setting the attribute of the DOM element to the corresponding value of the reactelement property
        }

    }
    container.appendChild(domelement);//appending the newly created DOM element to the container
}

const reactelement= {
    type: 'a',
    props: {
        href: 'https://www.example.com',
        children: 'Click me!',
        target: '_blank'
    }

 }
 
 
 const root = document.querySelector('#root');//query selctor
root.innerHTML = '<h1>Hello, React!</h1>';//selecting the root element and setting its inner HTML to display a heading with the text "Hello, React!"
customRender(reactelement, root);//calling the customRender function to render the reactelement into the root element