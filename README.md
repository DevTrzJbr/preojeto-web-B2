# Apresentação projeto web/UX

O projeto consiste em criar uma pagina fuincional contendo algumas ações pelo java script da página.
Minha página é uma página para localizar onde o usuário está e coloca-lo no mapa.

## script.js

O script possui funções que trabalham em conjunto seu proposito final, criar o mapa, emcontrar a localização do usuiário, posiciona-lo no mapa 
e apagar a posição caso precise redefinir o local.

### localizar()

Esse função está ativa no script, por definição ela é lida assim que se abre a página, pedindo acesso para pegar a geolocalização do usuário. 
Onde é usado uma ferramenta do navegador que retorna algumas informações em forma de objeto. (JSON)

Dentro dela e chamado duas outras funções showPosition() e showError().

### showPosition(pos)

Aqui é onde usamos as coordenadas do usuário.

O argumento (pos) é a geolocalização que veio da função localizar()

Através das coordenadas é criado um mapa com a visão próxima a elas.
Nela é usadas algumas APIs de mapas e layers para setar imagens de acordo com a coordenada.

### marcarLoc()

Essa função adiciona um marcador, que é a localização do usuário no mapa, com uma frese que diz "Você esta aqui!".


### removerLoc()

Essa função remove o marcador do mapa.

### showError()

Essa função retorna uma mensagem de erro caso tenho sido negado a solicitação de acesso a geolocation ou tenha demorado a receber uma resposta.


