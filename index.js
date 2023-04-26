// Code your solution here
function findMatching(driver,query){
   return  driver.filter((el) => el.toLowerCase().includes(query.toLowerCase()))
}
function fuzzyMatch(driver,query){
return driver.filter(function(name) {
   return name.startsWith(query);
 });
}

// function fuzzyMatch(driver,query){
//     return  driver.filter(function (driver) {
//       console.log(driver.toLowerCase().substring(0 , driver.lenght) === query.toLowerCase()
//     )}
//     )
//    }

function matchName (driver, query){
   return driver.filter(function (driver){
      return driver.name === query
   })
}