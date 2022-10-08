export default class Util{
    static randomizar(minimo: number, maximo: number) {
        return Math.round(minimo + Math.random() * (maximo - minimo));
    }
}