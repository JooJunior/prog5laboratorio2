// 1. Funções Puras e Impuras
// "Uma função pura não causa efeitos colaterais e sempre retorna a mesma saída para a mesma entrada"
const sum = (a, b) => a + b;
console.log("Pura:", sum(2, 3));

//Uma função impura modifica um estado fora de seu escopo
let score = 10;
const addBonus = () => { score += 5; };
addBonus();
console.log("Impura:", score);


// 2. Currying
// Transforma uma função com múltiplos argumentos em uma sequência de funções
const curriedMultiply = a => b => a * b;
const double = curriedMultiply(2); //cria função especializada que dobra número
console.log("Currying (dobrar 5):", double(5));


// 3. Higher-Order Functions
// Funções que recebem ou retornam outras funções. .map é um ótimo exemplo.
const numbers = [1, 2, 3];
const mappedResult = numbers.map(num => num * 2);
console.log("Higher-Order Function (map):", mappedResult);


// 4. Closure
// A função interna "lembra" do escopo onde foi criada -> 'count'
const createCounter = () => {
  let count = 0;
  return () => {
    count++;
    console.log("Closure (contador):", count);
  };
};
const myCounter = createCounter();
myCounter();
myCounter();


// 5. Callbacks
// Uma função passada como argumento para ser executada após uma tarefa assíncrona
// Ex:buscar usuário por ID com callback
const fetchUser = (id, callback) => {
  setTimeout(() => {
    const user = { id: id, nome: "Reginaldo" };
    callback(user); // O callback é chamado com o resultado
  }, 1000);
};
fetchUser(1, (foundUser) => {
  console.log("Callback (usuário):", foundUser.nome);
});


// 6. Imutabilidade
// Em vez de modificar o objeto original, criamos uma nova cópia com os dados atualizados
//fazemos isso para evitar efeitos colaterais indesejados e manter o estado previsível.
//ex: att gols de um jogador sem modificar o original
const player = { nome: "Júnior", time: "Sport", gols: 10 };
const updatedPlayer = { ...player, gols: player.gols + 1 }; // Cria uma cópia e atualiza os gols
console.log("Imutabilidade (original):", player);
console.log("Imutabilidade (novo):", updatedPlayer);


// 7. Deep & Shallow Copy
// Shallow Copy (cópia rasa) copia a referência do objeto aninhado
//serve para criar cópias superficiais, mas não independentes de objetos complexos
//se você modificar uma propriedade aninhada, isso afetará o objeto original
const originalPerson = { nome: "Ana", endereco: { cidade: "Recife" } };
const shallowCopy = { ...originalPerson };
shallowCopy.endereco.cidade = "Olinda"; // Modificar a cópia...
console.log("Shallow Copy (original alterado):", originalPerson.endereco.cidade); //*altera o original

// Deep Copy (cópia profunda) cria uma cópia independente de tudo.
const originalPerson2 = { nome: "Carlos", endereco: { cidade: "Jaboatão" } };
const deepCopy = JSON.parse(JSON.stringify(originalPerson2));
deepCopy.endereco.cidade = "Recife"; // Modificar a cópia...
console.log("Deep Copy (original intacto):", originalPerson2.endereco.cidade); //*não altera o original!