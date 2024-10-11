const paragrafos = document.querySelector('#paragrafos')
const ps = paragrafos.querySelectorAll('p')

for (i=0; i<ps.length; i++  ){
    console.log(ps)
    ps[i].style.backgroundColor = '#005662'
    ps[i].style.color = 'white'
}