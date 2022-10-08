import PromptSync from "prompt-sync";
import { Sorvete, Sorveteria } from "./Sorveteria";

const teclado = PromptSync();

const sorveteria: Sorveteria = new Sorveteria("Sorveteria Avenida", 32371135000150, [new Sorvete("Chocolate", 15, 2), new Sorvete("Baunilha", 10, 4), new Sorvete("Chocolate", 15, 2)], 10);

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
        sorveteria.venderSorvete(qtdVendida)
        break;
    case 4:
        const qtdOcupada = +teclado("Digite a quantidade: ")
        sorveteria.ocuparMesa(qtdOcupada)
        console.log(`Agora estão livre(s) ${sorveteria.mesas} mesas`)
        break;
    
    case 5:
      const qtdLiberada = +teclado("Digite a quantidade: ")
        sorveteria.desocuparMesa(qtdLiberada)
        console.log(`Agora estão livre(s) ${sorveteria.mesas} mesas`)
        break;
    
    case 6:
        const qtdEntrada = +teclado("Digite um numero para dar entrada: ")
        sorveteria.darEntrada(qtdEntrada)
        break;
    case 0:
        a = false

    default:
        console.log("Opção inválida!");
        break
    }
} 

  