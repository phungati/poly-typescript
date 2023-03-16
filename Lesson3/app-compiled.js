const root = ReactDOM.createRoot(document.getElementById('app'));
const products = [{
  name: "San pham 1",
  price: 100
}, {
  name: "San pham 2",
  price: 200
}, {
  name: "San pham 3",
  price: 300
}, {
  name: "San pham 4",
  price: 400
}];
const element = /*#__PURE__*/React.createElement(React.Fragment, null, products.map(item => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, item.name), /*#__PURE__*/React.createElement("p", null, item.price))));
root.render(element);
