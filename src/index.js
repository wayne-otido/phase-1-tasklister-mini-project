document.addEventListener('DOMContentLoaded',()=>{
  let form =document.querySelector('form')
  form.addEventListener('submit',(event)=>{
    event.preventDefault()
   // console.log(event.target.newtask.value)
   // console.log(event.target.user.value)
    let newTodo=event.target.newtask.value
    let user=event.target.user.value
    let priority=event.target.priority.value
    console.log(priority)
    Todo(newTodo,user,priority)
    console.log(newTodo,user)
    form.reset()
  })
})

function Todo(todo,user2,prioritY){
const li=document.createElement('li')
const btn=document.createElement('button')
const user=document.createElement('span')
btn.addEventListener('click',handleDelete)
li.addEventListener('mouseover',setColor)
btn.innerText='x'
li.innerHTML=`${todo} ${user2} ${prioritY} 
 `
 
li.appendChild(btn)


function setColor(prioritY){
  if(prioritY==='Urgent'){
   prioritY=document.getElementsByTagName('li').style.color = "#cccfffggg";
  }else if(prioritY==='Less Urgent'){
   prioritY= document.getElementsByTagName('li').style.color = "green";
  }
  return prioritY
}
setColor()
document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}