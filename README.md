# 📄 PRD – Jogo de Realidade Aumentada: **Caça ao Ladrão da Joia**

## 1. Visão Geral
O jogo é uma experiência educativa em **Realidade Aumentada (AR)** desenvolvida para crianças em eventos da **Polícia Civil de Santa Catarina**.  
O objetivo é ensinar noções básicas de investigação policial de forma lúdica, usando o navegador do celular para explorar pistas em AR e deduzir o culpado entre três suspeitos.

---

## 2. Objetivos
- Criar uma experiência **divertida e educativa** para crianças.  
- Ensinar a lógica de investigação: **coleta de pistas → análise → dedução**.  
- Promover a aproximação da **Polícia Civil de SC** com a comunidade.  

---

## 3. Público-Alvo
- Crianças entre **7 e 12 anos**.  
- Famílias em eventos comunitários da Polícia Civil.  
- Acessível em celulares Android modernos (Chrome/Edge).  

---

## 4. Fluxo do Jogo e Assets

1. **Cena do Crime (marcador no chão)**  
   - Ao mirar → aparece a **pegada em PNG**.  
   - Arquivo: `assets/img/pegada.png`  
   - Ao clicar → pista coletada.  
   - Informação coletada: **Sapato nº 42**  

---

2. **Testemunha 1 (marcador na parede)**  
   - Aparece personagem 3D (homem).  
   - Arquivo modelo: `assets/models/homem.glb`  
   - Arquivo áudio: `assets/audio/testemunha1.mp3`  
   - Ao clicar → áudio toca:  
     > “Vi alguém correndo com algo dourado na mão. Ele tinha **1,90m de altura**!”  
   - Informação coletada: **Altura 1,90m**  

---

3. **Testemunha 2 (marcador na parede)**  
   - Aparece personagem 3D (mulher).  
   - Arquivo modelo: `assets/models/mulher.glb`  
   - Arquivo áudio: `assets/audio/testemunha2.mp3`  
   - Ao clicar → áudio toca:  
     > “Vi alguém usando **luvas**! Ele jogou uma delas no chão.”  
   - Informação coletada: **Luva**  

---

4. **Câmera de Segurança (marcador na parede)**  
   - Aparece uma câmera de vigilância em 3D.  
   - Arquivo modelo: `assets/models/camera.glb`  
   - Ao clicar → aparece monitor em AR exibindo imagem dos três suspeitos.  
   - Arquivo imagem: `assets/img/suspeitos.png`  
   - Informação coletada: **Três suspeitos estiveram no local do crime**  

---

5. **Delegacia (marcador final)**  
   - Aparecem os três suspeitos em 3D:  
     - **Drácula** → `assets/models/dracula.glb`  
     - **Frankenstein** → `assets/models/frankenstein.glb`  
     - **Lobisomem** → `assets/models/lobisomem.glb`  
   - Ao mirar → aparece painel flutuante com informações:  
     - **Frankenstein** → Altura: 1,90m / Sapato: 42  
     - **Drácula** → Altura: 1,70m / Sapato: 42  
     - **Lobisomem** → Altura: 1,90m / Sapato: 39  
   - Jogador deve **clicar em um suspeito** para acusá-lo.  
   - Resultado:  
     - Se acusar **Frankenstein** → vitória.  
     - Se acusar outro → erro, com sugestão de revisar pistas.  

---

## 5. Inventário (ícone 🎒)
O jogador pode abrir a mochila para ver as pistas coletadas:  
1. 👣 Pegada – Sapato nº 42  
2. 📏 Altura: 1,90m  
3. 🧤 Luva  
4. 📹 Câmera de segurança – “Três suspeitos estiveram no local”  

---

## 6. Regras de Lógica
- **Drácula** → sapato nº 42 (igual Frankenstein).  
- **Lobisomem** → altura 1,90m (igual Frankenstein).  
- **Todos os três suspeitos** → confirmados pela câmera de segurança.  
- **Frankenstein** → único com **luva faltando** → culpado.  

---

## 7. Requisitos Técnicos
- **Plataforma:** Web (HTML5, JavaScript, A-Frame, AR.js).  
- **Dispositivo:** Smartphones Android com suporte a ARCore.  
- **Navegador:** Chrome 79+ ou Edge.  
- **Conexão:** HTTPS obrigatório para WebXR.  
- **Assets:**  
  - Modelos 3D GLB → personagens, testemunhas, câmera.  
  - Imagens PNG → pegada, suspeitos, **emblema da Polícia Civil** (`assets/img/emblema.png`).  
  - Áudios MP3 → testemunhas.  

---

## 8. Interface do Usuário
- **Tela inicial**  
  - Mostra o **emblema da Polícia Civil** (`assets/img/emblema.png`).  
  - Botão: *Entrar na Investigação*.  
- **Inventário**  
  - Ícone da mochila 🎒 no canto superior direito.  
  - Mostra todas as pistas coletadas.  
- **Notificações**  
  - Sistema de *toast* para feedback (ex: “Pista coletada!”).  
- **Painéis flutuantes em AR**  
  - Mostram altura e sapato dos suspeitos na delegacia.  
- **Tela final**  
  - Mostra **resultado da investigação** (vitória ou erro).  
  - Inclui novamente o **emblema da Polícia Civil** como marca d’água.  

---

## 9. Roadmap Futuro
- [ ] Adicionar novos crimes com pistas diferentes.  
- [ ] Criar modo multiplayer cooperativo.  
- [ ] Ranking de jogadores nos eventos.  
- [ ] Suporte a PWA (rodar offline).  

---

## 10. Licenciamento e Uso
- Uso **educativo e institucional** pela Polícia Civil de SC.  
- Modelos 3D → free/CC0 ou licenciados para uso não comercial.  
- Áudios → gravados com vozes originais.  

---

✍️ **Elaborado por:** Riverlan Kaufmann Teixeira  
👮 **Projeto:** Polícia Civil de Santa Catarina – Jogo Educativo em AR
