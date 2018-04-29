class MensagemView  extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';

        // se o modelo.texto espaço em branco, é diferente de 0, é diferente de null devolve <p></p> vazio...
    }

}