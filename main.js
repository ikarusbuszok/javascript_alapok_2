window.addEventListener("load",init)
function init() { 
      
    document.getElementById("tartalom").innerHTML = '<p>Scriptből írok ide</p>'
    const kedvencszavak = ["gép", "alkohol", "ivás"];
    for (let index = 0; index < kedvencszavak.length; index++){
        document.getElementById("tartalom").innerHTML =(`<p>kedvencszavak[index]</p>`)

    }
}



