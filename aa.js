const freelancers = [
    { name: "Dr. Slice", price: 25, service: "gardener" },
    { name: "Dr. Pressure", price: 51, service: "programmer" },
    { name: "Prof. Possibility", price: 43, service: "teacher" },
    { name: "Prof. Prism", price: 81, service: "teacher" },
    { name: "Dr. Impulse", price: 43, service: "teacher" },
    { name: "Prof. Spark", price: 76, service: "programmer" },
    { name: "Dr. Wire", price: 47, service: "teacher" },
    { name: "Prof. Goose", price: 72, service: "driver" },
  ];



function createTableRow( freelancer ) {
     const row = document.createElement('tr')


    //  const name = document.createElement('td')
    //         name.textContent = freelancer.name

    //  const service = document.createElement('td')
    //         service.textContent = freelancer.service

    //  const price = document.createElement('td')
    //         price.textContent = freelancer.price

    // row.append(name)
    // row.append(service)
    // row.append(price)
    
    row.innerHTML = 
    `
    <td>${freelancer.name}</td>
    <td>${freelancer.service}</td>
    <td>${freelancer.price}</td> 
    `
    return row
}
  
function setAveragePrice(index) {
    console.log(index)


    let sum = 0
    for (let i = 0; i < index; i++) {
        sum += freelancers[i].price
    }

    let answer = Math.round((sum/index) * 100) / 100

    console.log("avg price", sum / index)
    return answer

}

let index = 0
let interval = setInterval(() => {
    
// if (index === freelancers.length - 1) {
//     clearInterval(interval)
// }

let nextRow = createTableRow(  freelancers[index] )
index += 1

const table = document.querySelector('table')
table.append(nextRow)

let avgPrice = setAveragePrice(index)
    const priceSpan = document.querySelector('#price')
    priceSpan.textContent = avgPrice

    generateNewFreelancer()

}, 1000)

function generateNewFreelancer () {

    let nums = []
    for (let i = 0; i < 5; i++){
        nums.push((Math.random() * 26) + 97)
    }

    let name = String.fromCharCode(... nums)

    
    nums = []
    for (let i = 0; i < 5; i++){
        nums.push((Math.random() * 26) + 97)
    }

    let service = String.fromCharCode(... nums)

   let price = Math.round(Math.random() * 100) 
    freelancers.push({name: name, price: price, service: service,})

} 