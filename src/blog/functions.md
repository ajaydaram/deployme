# What is a component
components represent the layout of the React Application. It contains a root component which usally calls a app component. 
! [component image] ()
All other components are created and used according to the needs. for example see the above image.
Component code is  saved in js file. 
component is a simply a JS code in a component file.

##  Types of components
1. Stateless Functional component
2. Stateful class component

### Stateless Functional component
SImply a Javascript function that returns HTML which describes UI

```
function Hello(props)  {
   return <h1>Welcome, {props.name}</h1>;

}
```
### Stateful Class component
These are ES6 classes that extend the component class from the react library.
They must contain a render method which in turns return method
```
class Hello extends React.Component  {
   render() {
   return <h1>Welcome, {this.props.name}</h1>;
     }

}
```

# Creating a functional component

Functional components are javascript functions which receives the objects as properties(props)and returns html(jsx) describe UI

```
function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}
```
This is unconventional way of writing functional component and the prefer way is write using es6 arrow functions. 






#  JavaScript Functions

## Creating a function:

Many ways to create a JS function

1. with function *declaration*
2. with function *expression*
3. using function *constructor*
4. Using IIFE (immediately invocable function expression)

### construction of a function

#### Syntax:

**Keyword**: function


## Different type of functions
1. Function without parameters and without returning value
2. Function without parameters and with returning value
3. Function with  parameters and without returning value
4. Function with parameters and with returning value

###  Function without parameters and without returning value
#### Syntax : 

```
function  sayHi ()
  
  {
    document.write("Hi", "<br/>");

  }
sayHi();

```
### A function without parameters and with returning value

#### Syntax 

```

function sayHi()

 {
     return "Hi";  
  
 }

 document.write(sayHi());

 ```

 ### Function with  parameters and without returning value

 #### Syntax

 ```
 function playMusic(what) {
     document.write(what, "<br/>")
 }
  play("bollywood songs")
  play("rock song')
 ```

 functions can have more than one parameter

 ```
 function add(num1 num2) {

     document.write(num1+num2), "<br/>");   
 
 }

add(2,3);
add(5,5); 
 ```

 ### Function with parameters and with returning value

 #### Syntax

 ```
 function add(num1 num2) {

     return num1+num2;  
 
 }

document.write(add(3,3) , "<br/>);
document.write(add(9,10), "<br/>);
 
 ```



