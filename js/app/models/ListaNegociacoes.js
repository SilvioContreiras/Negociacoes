class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // return this._negociacoes;

        return [].concat(this._negociacoes); //programacao defensiva.Não alterar a lista original
    }
}