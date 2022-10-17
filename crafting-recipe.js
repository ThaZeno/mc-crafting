// Insert your own query here or prompt a user to enter one 
let rawQuery = `chestplates`

// Getting all characters to lower case (all formatted that way on crafting website)
let refQuery = rawQuery.toLowerCase()

// Similar to above, removing all spaces.
let finalQuery = refQuery.split(' ').join('')

// Array of images that should be returned as gif rather than png
let gifArr = [
  `wood`,    
  `furnace`,     
  `fence`,   
  `woodenslabs`,      
  `stoneslabs`,     
  `doors`,      
  `woodenstairs`,      
  `stonestairs`,      
  `cobblestonewall`,      
  `stainedclay`,     
  `mossstone`,      
  `mossystonebrick`,      
  `pickaxes`,      
  `axes`,    
  `shovels`,    
  `swords`,    
  `hoes`,    
  `helmets`,    
  `chestplates`,    
  `leggings`,    
  `boots`,    
  `pressureplates`,    
  `weightedpressureplates`,    
  `fencegate`,    
  `buttons`,    
  `lightgraydye`,    
  `rosered`,    
  `orangedye`,    
  `dandelionyellow`,    
  `lightbluedye`,    
  `magentadye`,    
  `pinkdye`,    
  `whitedye`,    
  `bluedye`,    
  `browndye`,     
  `blackdye`
]

// This is if the query is found in the gif array 
try {
if (gifArr.indexOf(finalQuery) !== -1) {
    let imgLink = `https://www.minecraftcrafting.info/imgs/craft_${finalQuery}.gif`
    console.log(imgLink)
}

// If it is not found in the gif array (meaning it is a png)
else {
    let imgLink = `https://www.minecraftcrafting.info/imgs/craft_${finalQuery}.png`
    connsole.Log(imgLink)
}
} catch (e) {
    
    // Error management
    console.log(e)
}