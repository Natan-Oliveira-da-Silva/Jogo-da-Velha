var x_ou_o = "X";
var contadorinterno = 0;
var feito = false;
var cont = 0;
var mantem_o_mesmo = true;
var lista = ["", "", "", "", "", "", "", "", ""];
var paragrafo = "";
var cor = "red";
var alguem_venceu = false;
var vitoria = ["", "", ""];
var primeira_vitoria = true;

function mudar_quem_comeca(quem_comecou) {
  console.log("O x_ou_o vale " + x_ou_o + " antes.");
  ++contadorinterno;
  console.log("O contador interno vale é " + contadorinterno);
  if (contadorinterno % 2 === 0) {
    x_ou_o = "X";
  } else {
    x_ou_o = "O";
  }
  console.log("O x_ou_o vale " + x_ou_o + " depois.");
}

function reiniciar() {
  document.getElementById("comentario_interessante").innerHTML="Selecione uma casela.";
  for (let i = 0; i < 9; i++) {
    var p_em_questao = document.getElementById("p_" + i);
    if (p_em_questao != null) {
      p_em_questao.remove();
    }
    var casinha = document.getElementById("c_" + i);
    casinha.classList.remove("com_vitoria");
    casinha.classList.add("sem_vitoria");
  }
  alguem_venceu = false;
  primeira_vitoria = true;
  lista = ["", "", "", "", "", "", "", "", ""];
  cont = 0;
  mudar_quem_comeca();
  //alert(lista);
}

function marcar_casa(id) {
  if (mantem_o_mesmo == false) {
    if (x_ou_o == "X") {
      x_ou_o = "O";
    } else {
      x_ou_o = "X";
    }
  }
  if (lista[id] == "") {
    lista[id] = x_ou_o;
    var casela_ocupada=false;
    mantem_o_mesmo = false;
    if (x_ou_o == "X") {
      cor = "blue";
    } else {
      cor = "red";
    }
    document.getElementById(
      "c_" + id
    ).innerHTML = `<p  id="p_${id}" style="color: ${cor}">${x_ou_o}</p>`;
  } else {
    document.getElementById("comentario_interessante").innerHTML="Casela ocupada.<br>Escolha outra.";
    //console.log("Casela ocupada. Escolha outra.");
    mantem_o_mesmo = true;
    var casela_ocupada=true;
  }
  if(casela_ocupada==false){
    dizer_quem_venceu();
  };
};

function dizer_quem_venceu() {
  if (lista[0] == "X" && lista[1] == "X" && lista[2] == "X") {
    vitoria = [0, 1, 2];
    alguem_venceu = true;
  } else if (lista[3] == "X" && lista[4] == "X" && lista[5] == "X") {
    vitoria = [3, 4, 5];
    alguem_venceu = true;
  } else if (lista[6] == "X" && lista[7] == "X" && lista[8] == "X") {
    vitoria = [6, 7, 8];
    alguem_venceu = true;
  } else if (lista[0] == "X" && lista[3] == "X" && lista[6] == "X") {
    vitoria = [0, 3, 6];
    alguem_venceu = true;
  } else if (lista[1] == "X" && lista[4] == "X" && lista[7] == "X") {
    vitoria = [1, 4, 7];
    alguem_venceu = true;
  } else if (lista[2] == "X" && lista[5] == "X" && lista[8] == "X") {
    vitoria = [2, 5, 8];
    alguem_venceu = true;
  } else if (lista[0] == "X" && lista[4] == "X" && lista[8] == "X") {
    vitoria = [0, 4, 8];
    alguem_venceu = true;
  } else if (lista[2] == "X" && lista[4] == "X" && lista[6] == "X") {
    vitoria = [2, 4, 6];
    alguem_venceu = true;
  } else if (lista[0] == "O" && lista[1] == "O" && lista[2] == "O") {
    vitoria = [0, 1, 2];
    alguem_venceu = true;
  } else if (lista[3] == "O" && lista[4] == "O" && lista[5] == "O") {
    vitoria = [3, 4, 5];
    alguem_venceu = true;
  } else if (lista[6] == "O" && lista[7] == "O" && lista[8] == "O") {
    vitoria = [6, 7, 8];
    alguem_venceu = true;
  } else if (lista[0] == "O" && lista[3] == "O" && lista[6] == "O") {
    vitoria = [0, 3, 6];
    alguem_venceu = true;
  } else if (lista[1] == "O" && lista[4] == "O" && lista[7] == "O") {
    vitoria = [1, 4, 7];
    alguem_venceu = true;
  } else if (lista[2] == "O" && lista[5] == "O" && lista[8] == "O") {
    vitoria = [2, 5, 8];
    alguem_venceu = true;
  } else if (lista[0] == "O" && lista[4] == "O" && lista[8] == "O") {
    vitoria = [0, 4, 8];
    alguem_venceu = true;
  } else if (lista[2] == "O" && lista[4] == "O" && lista[6] == "O") {
    vitoria = [2, 4, 6];
    alguem_venceu = true;
  } else {
    alguem_venceu = false;


    if(x_ou_o=="X"){
      try {
        if (jog_B_input.value==""){
          document.getElementById("comentario_interessante").innerHTML="Agora é a vez do jogador A.";
        }else{
          document.getElementById("comentario_interessante").innerHTML="Agora é a vez de "+jog_A_input.value+".";
        };
      } catch (error) {
        document.getElementById("comentario_interessante").innerHTML="Agora é a vez do jogador A.";
      };
    }else{
      try {
        if (jog_A_input.value==""){
          document.getElementById("comentario_interessante").innerHTML="Agora é a vez do jogador B.";
        }else{
          document.getElementById("comentario_interessante").innerHTML="Agora é a vez de "+jog_B_input.value+".";
        };
      } catch (error) {
        document.getElementById("comentario_interessante").innerHTML="Agora é a vez do jogador B.";
      };

    };

    if(lista[0]!=""&&lista[1]!=""&&lista[2]!=""&&lista[3]!=""&&lista[4]!=""&&lista[5]!=""&&lista[6]!=""&&lista[7]!=""&&lista[8]!=""&&alguem_venceu==false){
      document.getElementById("comentario_interessante").innerHTML="Empate!";
      primeira_vitoria = false;
    };
  };
  if (alguem_venceu == true && primeira_vitoria == true) {
    if(x_ou_o=="X"){
      try {
        if (jog_B_input.value==""){
          document.getElementById("comentario_interessante").innerHTML="O jogador B venceu!";
        }else{
          document.getElementById("comentario_interessante").innerHTML=jog_B_input.value+" venceu!";
        };
      } catch (error) {
        document.getElementById("comentario_interessante").innerHTML="O jogador B venceu!";
      };
    }else{
      try {
        if (jog_A_input.value==""){
          document.getElementById("comentario_interessante").innerHTML="O jogador A venceu!";
        }else{
          document.getElementById("comentario_interessante").innerHTML=jog_A_input.value+" venceu!";
        };
      } catch (error) {
        document.getElementById("comentario_interessante").innerHTML="O jogador A venceu!";
      };
    };
    primeira_vitoria = false;
    pintar_de_verde(vitoria);
    primeira_vitoria = false;
  }
}
function pintar_de_verde(combinacao) {
  for (let i = 0; i < 3; i++) {
    var casa = document.getElementById("c_" + combinacao[i]);
    casa.classList.remove("sem_vitoria");
    casa.classList.add("com_vitoria");
  };
}
function mudar_os_nomes() {
    telinha = document.getElementById("quadro_dos_nomes").style.display = "block";
  };
  function pronto() {
      var nome1=jog_A_input.value;
      var nome2=jog_B_input.value;
      if (nome1!==""&&nome1!==undefined&&nome1!==null&&nome2!==""&&nome2!==undefined&&nome2!==null){
          telinha = document.getElementById
          ('quadro_dos_nomes').style.display = "none";
          document.getElementById("player1").innerHTML=nome1;
          document.getElementById("player2").innerHTML=nome2;
          var tem_nome=true;
      }else{
          recado=document.getElementById("recadinho").innerHTML="Digite os nomes!";
      };
  };
  let jog_A_input=document.getElementById("jogador_A");
  let jog_B_input=document.getElementById("jogador_B");
/*      CONTRA O PC

function marcar_com_o_PC(){
    for(let i=0;i<0;i++){
        if(lista[i]==""){
            marcar_casa(i);
            eh_contra_o_PC=false;
            break;
        };
    };
};

var eh_contra_o_PC=false;
var vez_do_PC=false;
function modo_contra_o_PC(){
    eh_contra_o_PC=true;
    alert("função modo_contra_o_PC() funcionou.");
    reiniciar();
};

mudar para ser contra o pc quando apertar o botão
mudar o botão quando for contra o pc
*/

function botao_de_jogar_contra_um_amigo(){
    reiniciar2();
    nome1="Jogador A";
    nome2="Jogador B";
    document.getElementById("comentario_interessante").innerHTML="Agora, você joga<br>contra seu amigo.";
    document.getElementById("player1").innerHTML=nome1;
    document.getElementById("player2").innerHTML=nome2;
    //alert("Chegou nesse ponto 2");
    nome1="Jogador A";
    nome2="Jogador B";
    modo_contra_o_PC=false;
    //alert("Chegou nesse ponto 1");
    //apaga o botao jogar contra um amigo
    botaozinho1 = document.getElementById("contraumamigo").style.display = "none";
    //ativa o botao jogar contra um amigo
    botaozinho2 = document.getElementById("contraopc").style.display = "block";
    botaozinho2 = document.getElementById("botao_que_muda_os_nomes").style.display = "block";
    
    
};

var modo_contra_o_PC=false;

function botao_de_jogar_contra_o_pc(){
    reiniciar2();
    nome1="PC";
    nome2="Você";
    document.getElementById("comentario_interessante").innerHTML="Agora, você joga contra o PC.";
    document.getElementById("player1").innerHTML=nome1;
    document.getElementById("player2").innerHTML=nome2;
    modo_contra_o_PC=true;
    //alert("A variável modo_contra_o_PC vale "+modo_contra_o_PC);
    // Apaga o botao jogar contra o PC e o de mudar os nomes
    document.getElementById("contraopc").style.display = "none";
    document.getElementById("botao_que_muda_os_nomes").style.display = "none";
    //alert("Chegou nesse ponto 5");
    // Ativa o botao jogar contra um amigo
    document.getElementById("contraumamigo").style.display = "block";
};


function reiniciar2(){
    //alert("A função reiniciar2() foi ativada.");
    for (let i = 0; i < 9; i++) {
        var p_em_questao = document.getElementById("p_" + i);
        if (p_em_questao != null) {
        p_em_questao.remove();
        };
        var casinha = document.getElementById("c_" + i);
        casinha.classList.remove("com_vitoria");
        casinha.classList.add("sem_vitoria");
    };
    //alert("chegou nesse ponto 3");
    alguem_venceu = false;
    primeira_vitoria = true;
    lista = ["", "", "", "", "", "", "", "", ""];
    cont = 0;
    //alert("chegou nesse ponto 4");
    //alert(lista);
};

function dizer_quem_venceu2() {
  if (lista[0] == "X" && lista[1] == "X" && lista[2] == "X") {
    vitoria = [0, 1, 2];
    var foi_x_ou_o="X";
    alguem_venceu = true;
  } else if (lista[3] == "X" && lista[4] == "X" && lista[5] == "X") {
    vitoria = [3, 4, 5];
    var foi_x_ou_o="X";
    alguem_venceu = true;
  } else if (lista[6] == "X" && lista[7] == "X" && lista[8] == "X") {
    vitoria = [6, 7, 8];
    var foi_x_ou_o="X";
    alguem_venceu = true;
  } else if (lista[0] == "X" && lista[3] == "X" && lista[6] == "X") {
    vitoria = [0, 3, 6];
    var foi_x_ou_o="X";
    alguem_venceu = true;
  } else if (lista[1] == "X" && lista[4] == "X" && lista[7] == "X") {
    vitoria = [1, 4, 7];
    var foi_x_ou_o="X";
    alguem_venceu = true;
  } else if (lista[2] == "X" && lista[5] == "X" && lista[8] == "X") {
    vitoria = [2, 5, 8];
    var foi_x_ou_o="X";
    alguem_venceu = true;
  } else if (lista[0] == "X" && lista[4] == "X" && lista[8] == "X") {
    vitoria = [0, 4, 8];
    var foi_x_ou_o="X";
    alguem_venceu = true;
  } else if (lista[2] == "X" && lista[4] == "X" && lista[6] == "X") {
    vitoria = [2, 4, 6];
    var foi_x_ou_o="X";
    alguem_venceu = true;
  } else if (lista[0] == "O" && lista[1] == "O" && lista[2] == "O") {
    vitoria = [0, 1, 2];
    var foi_x_ou_o="O";
    alguem_venceu = true;
  } else if (lista[3] == "O" && lista[4] == "O" && lista[5] == "O") {
    vitoria = [3, 4, 5];
    var foi_x_ou_o="O";
    alguem_venceu = true;
  } else if (lista[6] == "O" && lista[7] == "O" && lista[8] == "O") {
    vitoria = [6, 7, 8];
    var foi_x_ou_o="O";
    alguem_venceu = true;
  } else if (lista[0] == "O" && lista[3] == "O" && lista[6] == "O") {
    vitoria = [0, 3, 6];
    var foi_x_ou_o="O";
    alguem_venceu = true;
  } else if (lista[1] == "O" && lista[4] == "O" && lista[7] == "O") {
    vitoria = [1, 4, 7];
    var foi_x_ou_o="O";
    alguem_venceu = true;
  } else if (lista[2] == "O" && lista[5] == "O" && lista[8] == "O") {
    vitoria = [2, 5, 8];
    var foi_x_ou_o="O";
    alguem_venceu = true;
  } else if (lista[0] == "O" && lista[4] == "O" && lista[8] == "O") {
    vitoria = [0, 4, 8];
    var foi_x_ou_o="O";
    alguem_venceu = true;
  } else if (lista[2] == "O" && lista[4] == "O" && lista[6] == "O") {
    vitoria = [2, 4, 6];
    var foi_x_ou_o="O";
    alguem_venceu = true;
  } else {
    alguem_venceu = false;

    ++cont;
    document.getElementById("comentario_interessante").innerHTML="Selecione uma casela.";

    //Esse bloco aqui é o que eu adicionei agora
    if(lista[0]!=""&&lista[1]!=""&&lista[2]!=""&&lista[3]!=""&&lista[4]!=""&&lista[5]!=""&&lista[6]!=""&&lista[7]!=""&&lista[8]!=""&&alguem_venceu==false){
      document.getElementById("comentario_interessante").innerHTML="Empate!";
      primeira_vitoria = false;
    };


    /*
    for (let k=0;k<9;k++){
      if (lista[k]!==""){
        contador3000++;
        if(contador3000==9){
          document.getElementById("comentario_interessante").innerHTML="Empate!";
      primeira_vitoria = false;
        };
      };
    };
    contador3000=0;
    
    if (contador3000==9){
      document.getElementById("comentario_interessante").innerHTML="Empate!";
      primeira_vitoria = false;
    };
    
    */
   /*
    if (cont == 9) {
      document.getElementById("comentario_interessante").innerHTML="Empate!";
      primeira_vitoria = false;
    }
    */
  }
  if (alguem_venceu == true && primeira_vitoria == true) {
    if (foi_x_ou_o=="X"){
      document.getElementById("comentario_interessante").innerHTML=nome2 + " venceu.";
      primeira_vitoria = false;
      pintar_de_verde(vitoria);
      primeira_vitoria = false;
    }else{
      document.getElementById("comentario_interessante").innerHTML="O PC venceu.";
      primeira_vitoria = false;
      pintar_de_verde(vitoria);
      primeira_vitoria = false;
    };
  };
};
var contador3000=0;  
function pre_marcar_casa(id){
  tem_nome=false;
    if (modo_contra_o_PC==true){
      marcar_casa2(id);
    }else{
      marcar_casa(id);
    };
};
var pode_seguir=false;
function marcar_casa2(id){
    pode_seguir=false;
    if (lista[id] == "") {
        lista[id] = "X";
        document.getElementById(
        "c_" + id
        ).innerHTML = `<p  id="p_${id}" style="color: blue">X</p>`;
        pode_seguir=true;
    } else {
      document.getElementById("comentario_interessante").innerHTML="Casela ocupada.<br>Escolha outra.";
    };
    if(pode_seguir==true){
      dizer_quem_venceu2();
      for (let i=0;i<9;i++){
        if(lista[i]==""){
          lista[i]="O";
          document.getElementById(
            "c_" + i
            ).innerHTML = `<p  id="p_${i}" style="color: red">O</p>`;
          break;
        };
      };
    };
      dizer_quem_venceu2();
};