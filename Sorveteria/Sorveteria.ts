export class Sorveteria {
    razao: string;
    cnpj: number;
    sorvetes: Sorvete[];
    precoDeCusto: number;
    private estoqueSorvetes: number;
    mesas: number;
    private caixa: number;

    constructor(razao: string, cnpj: number, sorvetes: Sorvete[], estoqueSorvetes: number) {
        this.razao = razao
        this.cnpj = cnpj
        this.estoqueSorvetes = estoqueSorvetes
        this.sorvetes = sorvetes
        this.precoDeCusto = 10
        this.mesas = 10
        this.caixa = 0
    }

    private validarEstoque(): void {
        if(this.estoqueSorvetes <= 5) {
            console.log(`Atenção! Seu estoque está baixo!`)
        }
        if(this.estoqueSorvetes <= 0) {
            throw new Error("Você ficou sem estoque")
        }
    }

    private validarMesas(): void {
        if(this.mesas <= 0) {
            throw new Error("Você ficou sem mesas, os clientes ficaram na rua")
        }
    }

    verificarEstoque(): void {
        console.log(this.estoqueSorvetes)
    }

    darEntrada(qtd: number): void {
        this.estoqueSorvetes += qtd
        this.caixa -= (this.precoDeCusto * qtd)
    }

    venderSorvete(qtd: number): void {
        if(this.mesas === 10) {
            console.log("Não há cliente na sorveteria");
            return
        }
        this.estoqueSorvetes -= qtd
        this.validarEstoque()
        this.caixa += qtd * 20
    }

    ocuparMesa(qtd: number): void {
        this.mesas -= qtd
        this.validarMesas()
    }
    
    desocuparMesa(qtd: number): void {
        this.mesas += qtd
        this.validarMesas()
        if(this.mesas >= 10) {
            this.mesas = 10
        }
    }

}

export class Sorvete {
    sabor: string;
    preco: number;
    qtd: number;

    constructor(sabor: string, preco: number, qtd: number) {
        this.sabor = sabor
        this.preco = preco
        this.qtd = qtd
    }
}