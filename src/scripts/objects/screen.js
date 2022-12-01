
const screen = {
    userProfile : document.querySelector('.profile-data'),
    renderUser(user) {
       this.userProfile.innerHTML =         `<div class="info">
                                                <img src="${user.avatarUrl}" alt="Foto de perfil do usuario"/>
                                                <div class="data">
                                                    <h1>${user.name ?? 'não possui nome cadastrado :('}</h1>
                                                    <p>${user.bio ?? 'não possui Bio Cadastrado ;('}</p>
                                                    <p> Seguidores ${ user.followers}-Seguindo ${user.following}</p> 
                                                </div>
                                            </div>`  
                                           

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <br><br> <span>🐱‍🏍${repo.forks}</span> - <span>✨${repo.stargazers_count
        }</span> - <span>👀${repo.watchers}</span> - <span>💷${repo.language}<span> </a></li>`)
        if (user.repositories.length > 0 ){
            this.userProfile.innerHTML += `  <div class="repositories section">
                                                <h2>Repositorios</h2>
                                                <ul>${repositoriesItens} </ul>
                                              
                                            </div>`
                             
        }

        let eventosItens = ''
        user.events.forEach(eventos => eventosItens += `<li> Tipo : ${ eventos.type } <br><br> </li>`)
    
        this.userProfile.innerHTML += `  <div class="eventos section">
                                            <h2>Eventos</h2>
                                            <ul>${eventosItens} </ul>                                      
                                        </div>`  
                                    
          
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3> Usuario Não Encontrado ! </h3>'
    }
}

export { screen }