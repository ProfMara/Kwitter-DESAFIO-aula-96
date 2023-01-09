//adicione seu link do firebase

  
// inicia o firebase
firebase.initializeApp(firebaseConfig);
// guarda na variável uma referência a função
var database  = firebase.database();

//adicione os códigos para pegar os nomes da sala e do usuário do localStorage

//adicione sua função para enviar o texto para o banco de dados.

//adicione a função logout


function mostrarMensagens() { 
    database.ref("/"+roomName).on('value', (data)=> {
        //limpar div
        document.getElementById("output").innerHTML = ""; 
        data.forEach((propriedade)=> { 
            chave  = propriedade.key; 
            valor = propriedade.val();
            if(chave != "proposito") {
                //id e valor de cada mensagem
                mensagemId = chave;
                mensagemValor = valor;

                //valores específico do banco de dados
	            nome = mensagemValor['nome'];
	            mensagem = mensagemValor['mensagem'];
                like = mensagemValor['like'];

                //linhas html com os valores
                nomeTag = "<h4> "+ nome +"<img class='user_tick' src='tick.png'></h4>";
                mensagemTag = "<h4 class='message_h4'>" + mensagem + "</h4>";
                botaoLike ="<button class='btn btn-warning' id="+mensagemId+" value="+like+" onclick='atualizarLike(this.id)'>";
                likes = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                //concatenando os elementos html
                linha = nomeTag + mensagemTag +botaoLike + likes; 
                //adicionar nas divs      
                document.getElementById("output").innerHTML += linha;
                //Fim do código
            }
        });
    });
}

mostrarMensagens();

function atualizarLike(mensagemId){
    console.log("botão de like pressionado - " + mensagemId);
	botaoId = mensagemId;
	likes = document.getElementById(botaoId).value;
	updatedLikes = Number(likes) + 1;
	console.log(updatedLikes);

	database.ref(roomName).child(mensagemId).update({
		like : updatedLikes  
	 });

}

