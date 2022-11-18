import { DadosFinanceiros } from "./DadosFinanceiros";

export class DadosFisicos{
    private dadosFinanceiros: DadosFinanceiros;
    private _mesas: number;
    private _estoqueSorvetes: number;

    public set mesas(mesas: number) {
        this._mesas = mesas;
    }

    public set estoqueSorvetes(estoqueSorvetes: number) {
        this._estoqueSorvetes = estoqueSorvetes;
    }

    public get mesas(): number {
        return this._mesas
    }

    public get estoqueSorvetes(): number {
        return this._estoqueSorvetes
    }

    public darEntrada(qtd: number): void{
        this.estoqueSorvetes += qtd
        this.dadosFinanceiros.caixa -= (this.dadosFinanceiros.precoDeCusto * qtd)
    }

    public verificarMesas(): number{
        return this.mesas
    }

    constructor() {
        this.dadosFinanceiros = new DadosFinanceiros()
        this._estoqueSorvetes = 0
        this._mesas = 10
    }
}