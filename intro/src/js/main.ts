/**
 * Created by Oshevchuk on 21.07.2017.
 * http://oshevchuk2016.16mb.com/
 */
declare let React;
declare let ReactDOM;

console.log(React);
console.log(ReactDOM);

let photos=['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];

ReactDOM.render(
    React.createElement('h1', null, 'hello'),
    document.getElementById('root')
);