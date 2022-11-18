
export class DadosFinanceiros {
    private _precoDeCusto: number;
    private _caixa: number;

    public set precoDeCusto(precoDeCusto: number) {
        this._precoDeCusto = precoDeCusto;
    }

    public set caixa(caixa: number) {
        this._caixa = caixa;
    }

    public get precoDeCusto(): number {
        return this._precoDeCusto
    }

    public get caixa(): number {
        return this._caixa
    }

    constructor() {
        this._precoDeCusto = 10
        this._caixa = 0
    }
}