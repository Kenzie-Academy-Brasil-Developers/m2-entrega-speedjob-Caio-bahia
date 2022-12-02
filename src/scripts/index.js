const containerFrontEnd = document.querySelector(".scroll-container-fe")
const containerBackEnd = document.querySelector(".scroll-container-be")

function addFront(){
    for(let i = 0; i<frontEndJobs.length;i++){
        
        const LiCard = document.createElement("li")
        LiCard.classList.add("card")
        
        const DivHeader = document.createElement("div")
        DivHeader.classList.add("card-header")

        const imgHeader = document.createElement("img")
        imgHeader.src = "./src/images/icon.svg"

        const DivHeaderTitle = document.createElement("div")
        DivHeaderTitle.classList.add("card-header-title")
        
        const h3Header = document.createElement("h3")

        const pHeader = document.createElement("p")

        const pCardText = document.createElement("p")

        const divJobType = document.createElement("div")
        divJobType.classList.add("job-type")

        const pJobtype0 = document.createElement("P")

        const pJobtype1 = document.createElement("P")

    
        DivHeaderTitle.append(h3Header,pHeader)
        DivHeader.append(imgHeader,DivHeaderTitle)
        divJobType.append(pJobtype0,pJobtype1)
        
        LiCard.append(DivHeader,pCardText,divJobType)
        
        containerFrontEnd.append(LiCard) 
        
        
        h3Header.innerHTML = frontEndJobs[i].title
        pHeader.innerHTML =  frontEndJobs[i].city
        pCardText.innerHTML = frontEndJobs[i].descrription
        pJobtype0.innerHTML = frontEndJobs[i].modality[0]
        pJobtype1.innerHTML = frontEndJobs[i].modality[1]
        
    
    }
}

addFront()

function addBack(){
    for(let i = 0; i<backEndJobs.length;i++){
        
        const LiCard = document.createElement("li")
        LiCard.classList.add("card")
        
        const DivHeader = document.createElement("div")
        DivHeader.classList.add("card-header")

        const imgHeader = document.createElement("img")
        imgHeader.src = "./src/images/icon.svg"

        const DivHeaderTitle = document.createElement("div")
        DivHeaderTitle.classList.add("card-header-title")
        
        const h3Header = document.createElement("h3")

        const pHeader = document.createElement("p")

        const pCardText = document.createElement("p")

        const divJobType = document.createElement("div")
        divJobType.classList.add("job-type")

        const pJobtype0 = document.createElement("P")

        const pJobtype1 = document.createElement("P")

    
        DivHeaderTitle.append(h3Header,pHeader)
        DivHeader.append(imgHeader,DivHeaderTitle)
        divJobType.append(pJobtype0,pJobtype1)
        
        LiCard.append(DivHeader,pCardText,divJobType)
        
        containerBackEnd.append(LiCard) 
        
        
        h3Header.innerHTML = backEndJobs[i].title
        pHeader.innerHTML =  backEndJobs[i].city
        pCardText.innerHTML = backEndJobs[i].descrription
        pJobtype0.innerHTML = backEndJobs[i].modality[0]
        pJobtype1.innerHTML = backEndJobs[i].modality[1]
        
    
    }
}

addBack()