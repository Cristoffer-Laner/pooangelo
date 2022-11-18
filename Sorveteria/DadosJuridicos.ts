export class DadosJuridicos {
    private _razao: string;
    private _cnpj: string;

    // public set razao(razao: string) {
    //     this._razao = razao;
    // }

    // public set cnpj(cnpj: string) {
    //     this._cnpj = cnpj;
    // }
    
    public get razao() : string {
        return this._razao
    }

    public get cnpj() : string {
        return this._cnpj
    }

    constructor() {
        this._razao = "Sorveteria 3 Amigos"
        this._cnpj = "14.252.687/0003.45"
    }
}