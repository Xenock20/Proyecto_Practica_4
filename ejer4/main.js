const form = document.querySelector('.cont')
const res = document.getElementById('res')
const arr = []

form.addEventListener('click', evento=>{
  evento.preventDefault()

  const n1 = document.getElementById('n1').value
  const n2 = document.getElementById('n2').value
  let resul = 0

  //console.log(evento.target.matches("input[name=suma]"))
  
  if(n1 && n2){
    if(evento.target.matches("input[name=suma]")){
      resul = parseInt(n1) + parseInt(n2)
      arr.push(`${n1} + ${n2} = ${resul}`)
    }
    
    if(evento.target.matches("input[name=resta]")){
      resul = parseInt(n1) - parseInt(n2)
      arr.push(`${n1} - ${n2} = ${resul}`)
    }
  
    if(evento.target.matches("input[name=multiplicar]")){
      resul = parseInt(n1) * parseInt(n2)
      arr.push(`${n1} * ${n2} = ${resul}`)
    }
    
    if(evento.target.matches("input[name=dividir]")){
      try{
        resul = parseInt(n1) / parseInt(n2)
        arr.push(`${n1} / ${n2} = ${resul}`)
      }catch{
        resul = 0;
      }
    }
  
    document.getElementById('list').innerHTML = ""
  
    arr.forEach(elemt=>{
      document.getElementById('list').innerHTML += `<li>${elemt}</li>`
    })
  
    
  
    res.value = String(resul)
  }
})

