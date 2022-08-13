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

 ```js
 function add(num1 num2) {

     document.write(num1+num2), "<br/>");   
 
 }

add(2,3);
add(5,5); 
 ```

 ### Function with parameters and with returning value

 #### Syntax

 ```js
 function add(num1 num2) {

     return num1+num2;  
 
 }

document.write(add(3,3) , "<br/>);
document.write(add(9,10), "<br/>);
 
 ```

 # Anonymous function:

 ```js
 function (num1,num2) {
      return num1+num2
 }

 ```
 *we can't execute the function and even we did the anonymous function will lead to error, so we will store it by assigning a variable. 

 ## This is called function expression

 ```js
 var sum = function (num1,num2) {
      return num1+num2
 }
   sum(5,6);  //function call


 ```

 # Immediately invoked functions

The main use of function is reusability by writing the code once but IIFE dont have reusability

```js
   (
    var sum = function (num1,num2) {
      return num1+num2
    }); (5,8);
```

# Arrow functions

The ES6 introduced the different way of defining a function which is called as the arrow function and let's see it syntax

The simple way of writing a function is 
```js
var multiplyTwoNum = (num1,num2) => {
    return num1*num2
}
 multiplyTwoNum(5,6);

```
## Arrow function forms

1. If the function body consists of only one statement

```js
var multiplyTwoNum = (num1,num2)  => num1*num2

document.write(multiplyTwoNum(2,5););

```
2. If the function consists of one parameter 

```js
   var multiplySameNum = num => num*num 

   document.write(multiplySameNum(2,3););

   // var multiplySameNum = (num) => num*num
   // var multiplySameNum = num => return num*num
   The above two are other ways of writing parameter consists of one number

```
3. if there are  no arguments

     with single statement 

   ```js
   var greet = () => console.log("Good Morning");

   ```
    no argument with more than one statement


 ```js
   var greet = () => { 
    console.log("Good Morning")
     console.log("<br> Welcome")

   }

   greet();

   ```