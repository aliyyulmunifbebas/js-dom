//DOM manipulation
//buat elemen baru
const pbaru = document.createElement(`p`)
const textp = document.createTextNode(`paragraf baru`)
//simpan teks kedalam paragraf (tag p)
pbaru.appendChild(textp)
//simpan pbaru di akhir section a
const sectiona = document.getElementById(`a`)
sectiona.appendChild(pbaru)





const lbaru = document.createElement('li')
const isi = document.createTextNode(`item baru`)
lbaru.appendChild(isi)
const ul = document.querySelector(`section#b ul`)
const li2 = document.querySelector(`section#b ul li:nth-child(2)`)
ul.insertBefore(lbaru, li2)




//cara hapus node
const link = sectiona.getElementsByTagName(`a`)[0]
sectiona.removeChild(link)

//cara replace node

const sectionB = document.getElementById(`b`)
const p4 = sectionB.querySelector(`p`)
const h2 = document.createElement(`h2`)
const isih2 = document.createTextNode(`judul baru`)
h2.appendChild(isih2)
sectionB.replaceChild(h2,p4)

pbaru.style.backgroundColor=`lightgreen`
lbaru.style.backgroundColor=`lightgreen`
h2.style.backgroundColor=`lightgreen`



//tantanganchatgpt
const judul = document.getElementById(`judul`)
const h1 = document.createElement(`h1`)
const isih1 = document.createTextNode('DOM Manipulation Berhasil')

h1.appendChild(isih1)
document.body.replaceChild(h1, judul)