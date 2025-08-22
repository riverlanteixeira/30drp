Plano de Ação

  Fase 1: Estrutura e Ambiente Inicial

   1. Criar Arquivo Principal: Desenvolver o index.html, que servirá como a base do jogo.
   2. Importar Bibliotecas: Incluir as bibliotecas essenciais no index.html:
       * A-Frame: Para a criação de cenas 3D e WebXR.
       * AR.js: Para habilitar as funcionalidades de realidade aumentada baseada em marcadores.
   3. Tela de Início:
       * Configurar uma tela de boas-vindas com o emblema da Polícia Civil (assets/img/emblema.png).
       * Adicionar o botão "Entrar na Investigação" para iniciar a experiência.

  Fase 2: Implementação das Pistas em Realidade Aumentada

  Para cada pista, será criado um marcador de AR que, ao ser escaneado, exibirá um objeto 3D ou imagem.

   1. Pista 1: Pegada
       * Ao mirar no marcador, exibir a imagem da pegada (assets/img/pegada.png).
       * Ao clicar, registrar a pista "Sapato nº 42" no inventário.
   2. Pista 2: Testemunha 1
       * Exibir o modelo 3D de um homem (assets/models/homem.glb).
       * Ao clicar, tocar o áudio (assets/audio/testemunha1.mp3) e adicionar a pista "Altura 1,90m" ao inventário.
   3. Pista 3: Testemunha 2
       * Exibir o modelo 3D de uma mulher (assets/models/mulher.glb).
       * Ao clicar, tocar o áudio (assets/audio/testemunha2.mp3) e adicionar a pista "Luva" ao inventário.
   4. Pista 4: Câmera de Segurança
       * Exibir o modelo 3D da câmera (assets/models/camera.glb).
       * Ao clicar, mostrar a imagem dos três suspeitos (assets/img/suspeitos.png).

  Fase 3: Cena Final e Lógica de Dedução

   1. Cena da Delegacia:
       * Criar um marcador final que exibirá os três suspeitos em 3D: Drácula, Frankenstein e Lobisomem.
       * Implementar painéis flutuantes ao lado de cada suspeito com suas informações (altura e número do sapato).
   2. Mecânica de Acusação:
       * Permitir que o jogador clique em um dos suspeitos para acusá-lo.
       * Lógica de Vitória: Se o jogador clicar no Frankenstein, exibe uma tela de vitória.
       * Lógica de Erro: Se clicar em outro suspeito, exibe uma mensagem de erro, incentivando a revisão das pistas.

  Fase 4: Interface do Usuário (UI) e Scripts

   1. Inventário de Pistas:
       * Adicionar um ícone de mochila (🎒) fixo na tela.
       * Ao ser clicado, ele abrirá uma janela mostrando as pistas já coletadas.
   2. Notificações:
       * Criar um sistema de feedback visual (ex: "Pista coletada!") para informar o jogador sobre suas ações.
   3. Gerenciamento de Estado:
       * Desenvolver o código JavaScript (main.js) para controlar o estado do jogo: quais pistas foram coletadas, qual tela exibir e a lógica da cena final.

  Fase 5: Testes e Publicação

   1. Configuração para GitHub Pages: Organizar todos os arquivos (HTML, JS, CSS, assets) em uma estrutura que funcione corretamente no GitHub Pages.
   2. Testes Funcionais:
       * Publicar o jogo em um repositório no GitHub e ativar o GitHub Pages.
       * Realizar testes em um celular Android com Chrome para garantir que a detecção de marcadores, os cliques, os áudios e a interface funcionam como esperado.
   3. Lançamento: Após a validação, o jogo estará pronto para ser compartilhado e utilizado nos eventos.