// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
//$(document).ready(function());\
//project plan beforehand-customer database//
//what is the user interface? 
//use image placeholders http://placehold.it/<"dimensions300x300">
//

var customers = document.querySelector('.customers');

var promise = $.get('https://randomuser.me/api/?results=12')

//for(var i = 0; i <data.length; i++){

function buildCustomers(customersData) {

  for(var i = 0; i <customersData.length; i++){
  var customer = customersData[i];

  console.log(customer);
  console.log(customer.picture.large);
  console.log(customer.name.first);
  console.log(customer.name.last);
  console.log(customer.email);
  console.log(customer.location.street);
  console.log(customer.location.city);
  console.log(customer.location.state);
  console.log(customer.location.postcode);
  console.log(customer.cell);
  console.log(customer.id);

  var customerIndividualDiv = document.createElement('div');
  customerIndividualDiv.className = "customer";

  var customerImage = document.createElement('img');
  customerImage.src = customer.picture.large;
  customerIndividualDiv.appendChild(customerImage);

  var customerName = document.createElement('div');
  var customerNameSpan = document.createElement('span');
  customerNameSpan.innerHTML = customer.name.first + " " + customer.name.last;
  customerName.appendChild(customerNameSpan);
  customerIndividualDiv.appendChild(customerName);
  customerName.classList.add("names");

  var customerEmail = document.createElement('div');
  customerEmail.innerHTML = customer.email;
  customerIndividualDiv.appendChild(customerEmail);
  customerEmail.classList.add("email");

  var customerLocation = document.createElement('div');
  customerLocation.innerHTML = customer.location.street + " " + customer.location.city + " " + customer.location.state + " " + customer.location.postcode;
  customerIndividualDiv.appendChild(customerLocation);
  customerLocation.classList.add("location");

  var customerCell = document.createElement('div');
  customerCell.innerHTML = customer.cell;
  customerIndividualDiv.appendChild(customerCell);
  customerCell.classList.add("cell");

  var customerId = document.createElement('div');
  customerId.innerHTML = customer.id.value;
  customerIndividualDiv.appendChild(customerId);
  customerId.classList.add("Id");


  customers.appendChild(customerIndividualDiv);

}}

  promise.then(function (data) {

  buildCustomers(data.results);

})

/*
  for(var i = 0; i <data.length+1; i++) {
  var person = data.results[0];

  console.log(data);

  var nameElement = document.createElement('div');
  nameElement.innnerHTML = data.name;
  customerIndividualDiv.appendChild(nameElement);
}
*/