import { DadosFisicos } from "./DadosFisicos"

export class Jogo {
    dadosFisicos: DadosFisicos;

    public validarEstoque(): void{
        if(this.dadosFisicos.estoqueSorvetes <= 5) {
            console.log(`Atenção! Seu estoque está baixo!`)
        }
        if(this.dadosFisicos.estoqueSorvetes <= 0) {
            throw new Error("Você ficou sem estoque")
        }
    }

    public validarMesas(): void{
        if(this.dadosFisicos.mesas <= 0) {
            throw new Error("Você ficou sem mesas, os clientes ficaram na rua")
        }
    }

    constructor() {
        this.dadosFisicos = new DadosFisicos()
    }
}