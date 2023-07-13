// import data from './data.json' assert {type: 'json'};




let data = `
[
  {
      "productName":"LCD",
      "productPrice": 5600,
      "productRattings": 4.5,
      "productColor": ["Red", "Green", "Black"]
  },
  {
      "productName":"Mouse",
      "productPrice": 4300,
      "productRattings": 3.2,
      "productColor": ["White", "Blue", "Black"],
      "productAvailability": true
    },
    {
      "productName":"Keyboard",
      "productPrice": 5600,
      "productRattings": 4.5,
      "productColor": ["Red", "Green", "Black"],
      "productAvailability": {
          "karachi": "North Nazimabad",
          "Lahore": "South",
          "Abbotabad": "East"
        }
      }
      
    ]
`;


let data1 = 
[
  {
      productName:"LCD",
      productPrice: 5600,
      productRattings: 4.5,
      productColor: ["Red", "Green", "Black"]
  },
  {
      productName:"Mouse",
      productPrice: 4300,
      productRattings: 3.2,
      productColor: ["White", "Blue", "Black"],
      productAvailability: true
    },
    {
      productName:"Keyboard",
      productPrice: 5600,
      productRattings: 4.5,
      productColor: ["Red", "Green", "Black"],
      productAvailability: {
          karachi: "North Nazimabad",
          Lahore: "South",
          "Abbotabad": "East"
        }
      }
      
    ]
;


console.log(data);
// console.log(JSON.stringify(data1));
// console.log(JSON.parse(data));



let a = JSON.parse(data);






productName.innerHTML = a[0].productName;


// for (let i = 0; i < data.length; i++) {
//     document.getElementById('root').innerHTML += `
//     <div class="card" style="width: 18rem;">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${data[i].productName}</h5>
//         <p class="card-text">${data[i].productPrice}</p>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">${data[i].productRattings}</li>
//         <li class="list-group-item">${data[i].productColor[i]}</li>
//       </ul>
//       <div class="card-body">
//         <a href="#" class="card-link">Card link</a>
//         <a href="#" class="card-link">Another link</a>
//       </div>
//     </div>
//     `;
    
// }




