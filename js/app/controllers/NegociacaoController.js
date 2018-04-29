class NegociacaoController {
	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes =  new ListaNegociacoes();

		this._negociacoesView =  new NegociacoesView($('#negociacoesView'));
		this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem = new Mensagem();
		this._mensagemView =  new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);
	}

	adiciona(event) {
		event.preventDefault();


		// let data =  new Date(this._inputData.value.replace(/-/g, ',')); desta forma funciona. Mas no treinamento o professor 
		// preferiu escolher um caminho mais complexo. Por ser um curso avançado
		// No ES6 os ... (3 pontos) é o spread operator.
		//Arrow Function permite que removemos a palavra reservada function substituindo por uma seta


		// let data = new Date(...
		// 	this._inputData.value
		// 		.split('-')
		// 		.map((item) => item)
		// 	);

		// let helper = new DateHelper();


		//let diaMesAno = DateHelper.dataParaTexto(negociacao.data);

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem.texto = "Negociação adicionada com sucesso";
		this._mensagemView.update(this._mensagem);
		
		this._limpaFormulario();		
	}

	_criaNegociacao() {
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limpaFormulario() {
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;

		this._inputData.focus() 
	}

} 