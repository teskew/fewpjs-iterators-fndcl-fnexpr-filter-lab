// Code your solution here
 const dri = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
 const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(driverList, string) {
  
    return driverList.filter(dri => dri.toLowerCase() === string.toLowerCase())
    
        }
      
function fuzzyMatch(array, query){

   return array.filter(dri => {
   return dri.toLowerCase().indexOf(query.toLowerCase()) === 0
 })
 
}

function matchName(object, string){
   const stringName = object.filter(driver => driver.name.toLowerCase() === string.toLowerCase() )
   return stringName
}