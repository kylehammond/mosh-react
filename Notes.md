render() returns react elements which it keeps in memory representing actual DOM elements

when you change a react element, it updates the part of the real DOM necessary to keep it in sync

unlike vanilla js or jquery you don't need to manipulate DOM directly

react is simlar to angular in terms of component based architecture
but angular is a framework and react is a View Library and has a very small footprint - it's more a la carte

folders  
node_modules - 3rd party dependencies
public - html with react root
src - components

babel will turn all of the es6 and JSX stuff to es5

jsx expression compiles to React.createElement()
