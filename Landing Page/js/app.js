const startingTime = performance.now();

/*creating the elements of the navigation bar dynamically*/
let navbarList = document.getElementById('navbar__list');
navbarList.classList.add('d')
let sections = document.querySelectorAll('section')
let numberOfSections=sections.length;
let ActiveSectionId = sections[0].id;
let VD = document.createDocumentFragment();
for (let i = 0;i<numberOfSections;i++){
    let sectionName=sections[i].getAttribute('data-nav');
    let sectionId=sections[i].getAttribute('id');
    sectionId+='-nav'

    let navbarElement = document.createElement('li')
    navbarElement.textContent=sectionName;
    navbarElement.id=sectionId;

    VD.appendChild(navbarElement)
}
navbarList.appendChild(VD);

/*The activation of the section in view right now and also the navbar no display after Stoping Scroll for a while */
window.addEventListener('scroll',function(){
    navbarList.classList.add('d')
    navbarList.classList.remove('nd')
    console.log(navbarList.classList)
    let screenHeight=window.innerHeight;
    for (let i = 0;i<numberOfSections;i++){
        let section = sections[i];
        sectionData = section.getBoundingClientRect();
        if(sectionData.bottom>0 && sectionData.bottom<=screenHeight && sectionData.top>=0){
        let k = i;
        section.classList.add('active')
        ActiveSectionId = section.id;    
        for (let j = 0;j<numberOfSections;j++){
            if(j!==k){
            sections[j].classList.remove('active')}
        }
    }}
    //highlighting the selected section in the navbar
    setTimeout(()=>{
         let navBarElements = navbarList.children;
    let lengthOfnavbarElements = navBarElements.length;
    for (let i = 0;i<lengthOfnavbarElements;i++){
        if(navBarElements[i].id == ActiveSectionId+'-nav'){
            navBarElements[i].classList.add("activeNavBar")
        }
        else{navBarElements[i].classList.remove('activeNavBar');}
    }
    
    }

,800)
//disble displaying the navbar when stop scrolling for 30 seconds
    this.setTimeout(()=>{
        navbarList.classList.add('nd')
        navbarList.classList.remove('d')
    },30000 )
})

/*function to be called on click on any item on the naviagation bar*/
navbarList.addEventListener('click',function(event){
    pressedElement = event.target.id;
    let SectionId = pressedElement.split('-')[0];
    theSectionElement = document.getElementById(SectionId);      
    theSectionElement.scrollIntoView({block:'start',behavior :'smooth'});
})





const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');



