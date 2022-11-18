import { DadosFinanceiros } from "./DadosFinanceiros";
import { DadosFisicos } from "./DadosFisicos";
import { DadosJuridicos } from "./DadosJuridicos";
import { Jogo } from "./Jogo";
// import { Sorvete } from "./Sorvetes";

export class Sorveteria {
    private dadosJuridicos: DadosJuridicos;

    private dadosFinanceiros: DadosFinanceiros;

    private dadosFisicos: DadosFisicos;

    // private sorvetes: Sorvete[];

    private jogo: Jogo;


    constructor(estoqueSorvetes: number /*sorvetes: Sorvete[]*/) {
        this.dadosJuridicos = new DadosJuridicos()
        this.dadosFinanceiros = new DadosFinanceiros()
        this.dadosFisicos = new DadosFisicos()
        this.jogo = new Jogo()
        // this.sorvetes = [...sorvetes]
    }

    // Encapsulamento: gamificação
    private validarEstoque(): void {
        this.jogo.validarEstoque()
    }

    private validarMesas(): void {
        this.jogo.validarMesas()
    }

    // Encapsulamento: Dados físicos
    verificarEstoque(): void {
        console.log(this.dadosFisicos.estoqueSorvetes)
    }

    darEntrada(qtd: number): void {
        this.dadosFisicos.darEntrada(qtd)
    }

    venderSorvete(qtd: number, sabor: string): void {
        this.dadosFisicos.estoqueSorvetes -= qtd
        this.validarEstoque()
        this.dadosFinanceiros.caixa += qtd * 20
    }

    // aqui sucos

    ocuparMesa(qtd: number): void {
        this.dadosFisicos.mesas -= qtd
        this.validarMesas()
    }
    
    desocuparMesa(qtd: number): void {
        this.dadosFisicos.mesas += qtd
        this.validarMesas()
        if(this.dadosFisicos.mesas >= 10) {
            this.dadosFisicos.mesas = 10
        }
    }

    verificarMesas(): number {
        return this.dadosFisicos.verificarMesas()
    }

}