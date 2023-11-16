//const URL_INSTAGRAM = /*"https://www.instagram.com/karlosalbertorv"


let compartilharButton = document.getElementById("compartilhar-perfil-button")

//forma mais comun de adicionar eventos aos botôes ;
compartilharButton.addEventListener('click', compartilharPerfilFn)

// aqui começa o botão compartilhar 
//  <!----------------------------------->    
async function compartilharPerfilFn() {
    let shareData = 
    {
        title: "Instagram Jornada de Programador",
        text: "Conheça a Jornada de Programador",
        url:"https://www.instagram.com/karlosalbertorv",
    }

    try {
        await navigator.share(shareData)

    } catch (err) {
        console.log(err)
        if (!(err instanceof DOMException && err.name === "AbortError")) {

            window.open(URL_INSTAGRAM)

        }

    }
}

//  aqui contém animção no botão copiar 
function copiarLink() {

    navigator.clipboard.writeText("https://www.instagram.com/karlosalbertorv")
    // Mudar o texto do botão para " Link copiado!" e em negrito
    let copiarLinkText = document.getElementById("copiar-link-text")
    copiarLinkText.innerHTML = "<strong> Link copiado! </strong>"
    //Adicionar animação no botão (Feedback)
    let copiarLinkButton = document.getElementById("copiar-link-btn")
    copiarLinkButton.classList.add('animate__animated', 'animate__pulse')
    copiarLinkButton.addEventListener('animationend', () => {
        copiarLinkText.innerText = "Copiar Link"
        copiarLinkButton.classList.remove('animate__pulse')
    })
}
