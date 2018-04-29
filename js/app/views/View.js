class View {
    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error('O métod template deve ser implementado');
    }

    update(model) {
        
        this._elemento.innerHTML = this.template(model);
    }
}