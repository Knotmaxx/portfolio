import {skillDados} from "../script/skills.js"


const body = document.querySelector("body")
const h3 = document.querySelector(".home-h3")
const letters = ["K","n","o","t"," M","a","x","x"]

const imgs = document.querySelectorAll("main img")
const header = document.querySelector(".header")
const menu = document.querySelector(".ul-header")
const li = document.querySelectorAll(".ul-header")
const menubtn = document.querySelector(".btn-menu")

const skills = document.querySelectorAll(".c-habilidades div")
const descriptionSkill = document.querySelector(".descricao-skill")
const btnDescription = document.querySelector(".descricao-skill button")
const fade = document.querySelector(".fade")


function createDescription(dateSkill){
  descriptionSkill.children[0].children[0].src = skillDados[dateSkill][0].src
  descriptionSkill.children[0].children[1].innerHTML = skillDados[dateSkill][0].name
  descriptionSkill.children[1].innerHTML = skillDados[dateSkill][0].description
}

function description(datesetSkill){
  createDescription(datesetSkill)
}

function stylesSkills(headerZindex,fadeDisplay,descriptionDisplay,bodyHidden){
  header.style.zIndex = headerZindex
  fade.style.display = fadeDisplay
  body.style.overflowY = bodyHidden
  descriptionSkill.style.display = descriptionDisplay
}

function Observer(imgs){
  const windowHeight = window.innerHeight; 
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].getBoundingClientRect().top < (windowHeight+100) && imgs[i].dataset.src && !imgs[i].src) {
      imgs[i].src = imgs[i].dataset.src;
    }
  }
}

menubtn.addEventListener("click", () => {
  if (!menu.classList.contains('open')) {
    menu.classList.remove('close')
    menu.classList.add('open')
    menubtn.style.transform = 'rotate(180deg)'
    menubtn.src = "assets/close.svg"
    menubtn.classList.remove('uil-bars')
    menubtn.classList.add('uil-times')
  } else {
    menu.classList.remove('open')
    menu.classList.add('close')
    menubtn.style.transform = 'rotate(0deg)'
    menubtn.src = "assets/menu.svg"
    menubtn.classList.add('uil-bars')
    menubtn.classList.remove('uil-times')
  }
})

li.forEach((li) => {
  li.addEventListener("click",()=>{
    menu.classList.remove('open')
    menu.classList.add('close')
    menubtn.src = "assets/menu.svg"
    menubtn.style.transform = 'rotate(0deg)'
    menubtn.classList.add('uil-bars')
    menubtn.classList.remove('uil-times')
  })
})

skills.forEach((skill) => {
  skill.addEventListener("click", (event) => {
    stylesSkills("1","block","flex","hidden")
    description(event.target.dataset.skill)
  })
})

btnDescription.addEventListener("click",()=>{
  stylesSkills("999999","none","none","visible")
})

window.addEventListener("load", ()=>{
  Observer(imgs)
})

window.addEventListener("scroll", ()=>{
  Observer(imgs)
})

window.addEventListener("resize", function() {
  if (window.matchMedia("(orientation: landscape)").matches ){
    menu.classList.remove('close')
    menu.classList.remove('open')
    menubtn.style.transform = 'rotate(0deg)'
    menubtn.src = "assets/menu.svg"
  }
})

letters.forEach((item, index)=>{
  setTimeout(()=>{
    h3.innerHTML += item
  }, 200 * index)
})


