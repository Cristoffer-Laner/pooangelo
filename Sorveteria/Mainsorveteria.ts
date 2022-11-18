import PromptSync from "prompt-sync";
import { Sorveteria } from "./Sorveteria";
import { Sorvete } from "./Sorvetes";

const teclado = PromptSync();

// A IDEIA É QUE OS SORVETES PASSADOS NO CONSTRUTOR DA SORVETERIA SEJAM VARIÁVEIS COM CLASSES DE SABORES QUE ESTÃO EXTENDENDO A CLASSE SORVETE
// O SORVETES FILHOS TERÃO CARACTERISTICAS PRÓPRIAS QUE NEM TODO SORVETE TEM
// O DE CHOCOLATE VAI COM PREFERÊNCIA DO CHOCOLATE (AMARGO, MEIO AMARGO, AO LEITE)
// O DE CREME VAI COM BISCOITO WAFFLE
// O DE MORANGO VAI COM PEDAÇOS DE MORANGO

const sorveteria: Sorveteria = new Sorveteria(10 /*, [new Sorvete("Chocolate", 15, 2), new Sorvete("Creme", 10, 4), new Sorvete("Morango", 15, 2)]*/);

let a = true

while (a) {
  console.log(" ");
  console.log("-".repeat(30));
  console.log("1. Consultar Estoque");
  console.log("2. Dados da Sorveteria");
  console.log("3. Vender Sorvete");
  console.log("4. Ocupar mesa");
  console.log("5. Liberar mesa");
  console.log("6. Dar entrada no estoque")
  console.log("0. Fechar programa")
  console.log("-".repeat(30));
  console.log(" ");

  const escolha = +teclado("Escolha uma opção: ");
  switch (escolha) {
    case 1:
      sorveteria.verificarEstoque()
        break;
    case 2:
      console.table(sorveteria);
        break;
    case 3:
        const qtdVendida = +teclado("Digite quantos vendeu: ")
        const sabor = teclado("Digite o sabor que deseja: ")
        sorveteria.venderSorvete(qtdVendida, sabor)
        break;
    case 4:
        const qtdOcupada = +teclado("Digite a quantidade: ")
        sorveteria.ocuparMesa(qtdOcupada)
        console.log(`Agora estão livre(s) ${sorveteria.verificarMesas()} mesas`)
        break;
    
    case 5:
      const qtdLiberada = +teclado("Digite a quantidade: ")
        sorveteria.desocuparMesa(qtdLiberada)
        console.log(`Agora estão livre(s) ${sorveteria.verificarMesas()} mesas`)
        break;
    
    case 6:
        const qtdEntrada = +teclado("Digite um numero para dar entrada: ")
        sorveteria.darEntrada(qtdEntrada)
        break;
    case 0:
        a = false
        break

    default:
        console.log("Opção inválida!");
        break
    }
} 

  