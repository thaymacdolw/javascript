



const list = [
    {name: 'Rodolfo', vip: true},
    {name: 'Maria', vip: false},
    {name: 'Joao', vip: true},
    {name: 'Bruno', vip: true},
    {name: 'Carla', vip: false},
    {name: 'Ana', vip: true},
    {name: 'Julio', vip: false},
]

const newList = list.map( user => {
   let braceletColor 

   if(braceletColor === true) {
    braceletColor = 'black'
   } else {
    braceletColor = 'green'
   }
   const newUser = {
    name: user.name,
    braceletColor: braceletColor
   }

    return newUser
})

console.log(newList)