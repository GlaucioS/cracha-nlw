/**
 * Declaração do objeto myLinks com os atributos das redes sociais
 */
const myLinks = {
  github: 'GlaucioS',
  youtube: 'glarije',
  facebook: 'glauciofs',
  instagram: 'glaucioschultz',
  twitter: 'glauciofs'
}
/**
 * Declaração da função changeSocialMediaLinks que será responsável em
 * percorrer os links das mídias sociais e sibstituir pelos atributos do
 * objeto myLinks
 */
function changeSocialMediaLinks() {
  //Método DOM onde retorna todas as tags que estão implementadas dentro da UL
  //socialLinks equivalente ao document.getElementByID('sociallinks')
  for (let li of socialLinks.children) {
    //declaração a variável social atribuinto o valor contido dentro do atributo claass do li. Este atributo é equivalente ao identificador do atributo do objeto myLinks
    const social = li.getAttribute('class')
    //Manipula o atributo href do primeiro filho contido dentro do li que é justamente a tag A e sobstitui pela variável social concatenado com o atributo do objeto myLinks
    li.children[0].href = `https://${social}.com/${myLinks[social]}`
  }
}

//Chama a função
changeSocialMediaLinks()

/**
 * Função para retornar os dados do usuário
 */
function getGitHubProfileInfos() {
  //Atribui na variável a rota da api concatenando (tamplate string) o atributo github do objeto myLinks
  const apiGitUrl = `https://api.github.com/users/${myLinks.github}`

  //Executa a variável com a rota da API
  fetch(apiGitUrl)
    //Promisse da execução da URL. Imolementado através de arrow function o tratamento do retorno. Parâmetro response recebe o JSON de retorno e encoda como json.
    .then(response => response.json())
    //Promisse do retorno após a execução do arrow function anterior retornando os dados no parâmetro data já encodado em JSON.
    .then(data => {
      //Seta a imagem do avatar (Método DOM).
      avatarimg.src = data.avatar_url
      //Seta o nome
      avatarname.textContent = data.name
      //Seta o link para o Git
      avatarurl.href = data.html_url
      //Seta o identificador do login
      avatarlogin.textContent = data.login
      //Seta a biografia
      avatarbio.textContent = data.bio
    })
}

//Chama a função
getGitHubProfileInfos()
