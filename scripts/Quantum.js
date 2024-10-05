const fourthYearContainer = document.querySelector(".fourth-year")
const pgContainer = document.querySelector(".pg")
const phdContainer = document.querySelector(".phd")
const alumniContainer = document.querySelector(".alumni")
const thirdYearContainer = document.querySelector(".third-year")
const otherContainer = document.querySelector(".others")
const studentsContainer = document.querySelector(".students")
const visitorsContainer = document.querySelector(".visiting-scholars")
const internsContainer = document.querySelector(".intern")
// import students from "../data/students.json" assert { type: "json" }
let students = []
fetch("../data/students.json")
    .then(response => response.json())
    .then(data => {
        students=data
        renderPeople()
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });
let fys=0
let asc=0
let vsc=0
let ic=0
function renderPeople () {
    students.forEach(student => {
        if(student.domain === "Quantum" || student.domainWorked === "Quantum") {
            if(student.year !== "others") {
                let parentDiv = document.createElement("div");
                parentDiv.classList.add("student-member-card")
                let face1Div = document.createElement("div");
                face1Div.classList.add("face")
                face1Div.classList.add("face1")
                let face1Content = document.createElement("div");
                face1Content.classList.add("content")
                if(student.position){
                    face1Content.innerHTML = `
                                            <img src="${student.img}" alt="${student.name}" />
                                            <div class="content-details">
                                                <h3>${student.name}</h3>
                                                <h4>${student.position}</h4>
                                                <a class="h3-mail" href="mailto:${student.mail}">${student.mail}</a>
                                                <a href="${student.linkedin}" class="linkedin-img" target="_blank">Linkedin</a>
                                            </div>
                `
                }
                else
                {
                    face1Content.innerHTML = `
                                            <img src="${student.img}" alt="${student.name}" />
                                            <div class="content-details">
                                                <h3>${student.name}</h3>
                                                <a class="h3-mail" href="mailto:${student.mail}">${student.mail}</a>
                                                <a href="${student.linkedin}" class="linkedin-img" target="_blank">Linkedin</a>
                                            </div>
                `
                }
                face1Div.appendChild(face1Content)
                let socialMedia = document.createElement("div")
                socialMedia.classList.add("social-media")
                let face2Div = document.createElement("div")
                face2Div.classList.add("face")
                face2Div.classList.add("face2")
                let face2Content = document.createElement("div")
                face2Content.classList.add("content")
                let face2Name = document.createElement("div")
                face2Name.innerText = "Domains"
                let face2Domain = document.createElement("div")
                face2Domain.classList.add("role")
                let domains = student.domain.split(", ")
                if(domains.length > 1) {
                    domains = domains.join(" | ")
                }
                face2Domain.innerText = domains
                socialMedia.innerHTML = `
                <div class="role">${student.currentPosition}</div>
                <div class="name">${student.batch}</div>`
    
                face2Content.appendChild(socialMedia)                
                face2Content.appendChild(face2Name)
                face2Content.appendChild(face2Domain)
                face2Div.appendChild(face2Content)
                parentDiv.appendChild(face1Div)
                parentDiv.appendChild(face2Div)
                if(student.year === "present"){
                    if(fys==0){
                        fys=1
                        let astc = document.querySelector(".fourth-year")
                        astc.style.display="grid"
                        let fyst=document.querySelector(".fourth-year-text")
                        fyst.style.display="flex"
                        // fyst.classList.add("fourth-year-text")
                        // fyst.innerText="4th year"
                        // studentsContainer.appendChild(fyst)
                    }
                    fourthYearContainer.appendChild(parentDiv)
                }
                    
                // if(student.year === "third-year")
                //     thirdYearContainer.appendChild(parentDiv)
                
                if(student.year === "alumni") {
                    
                    if(asc==0){
                        asc=1
                        let astc = document.querySelector(".alumni")
                        astc.style.display="grid"
                        let ast=document.querySelector(".undergrad-text")
                        ast.style.display="flex"
                        // fyst.classList.add("fourth-year-text")
                        // fyst.innerText="4th year"
                        // studentsContainer.appendChild(fyst)
                    }
                    alumniContainer.appendChild(parentDiv)
                }
    
                if(student.year === "visiting-scholars") {
                    if(vsc == 0) {
                        vsc = 1
                        let vstc = document.querySelector(".visiting-scholars")
                        vstc.style.display="grid"
                        let vst=document.querySelector(".visiting-scholars-text")
                        vst.style.display="flex"
                    }
                    visitorsContainer.appendChild(parentDiv)
                }
                if(student.year === "intern") {
                    if(ic == 0) {
                        ic = 1
                        let itc = document.querySelector(".intern")
                        itc.style.display="grid"
                        let ist=document.querySelector(".intern-text")
                        ist.style.display="flex"
                    }
                    internsContainer.appendChild(parentDiv)
                }
                // if(student.year === "pg")
                //     pgContainer.appendChild(parentDiv)
                // if(student.year === "phd")
                //     phdContainer.appendChild(parentDiv)
            }
        }
        // if(student.year === "others") {
        //     let stud = `<div class="student-member-card">
        //                     <div class="face face1">
        //                         <div class="content">
        //                             <img src="${student.img}" alt="${student.name}" />
        //                             <div class="content-details">
        //                                 <h3>${student.name}</h3>
        //                                 <a href="mailto:${student.mail}">${student.mail}</a>
        //                                 <a href="${student.linkedin}" class="linkedin-img" target="_blank">Linkedin</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div class="face face2">
        //                         <div class="content">
        //                             <div class="social-media">
        //                                 <div class="role">${student.currentPosition}</div>
        //                                 <div class="name">${student.batch}</div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>`
        //     otherContainer.innerHTML += stud
        // }
    })
}
