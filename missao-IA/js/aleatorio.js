const nomes = ["Ana Silva", "Carlos Souza", "Beatriz Oliveira", "Daniel Santos", "Eduarda Lima", "Felipe Costa", "Gabriela Pereira", "Lucas Ferreira", "Mariana Martins", "Rafael Rodrigues"];

export function aleatorio(lista) {

    const posicao = Math.floor(Math.random() * lista.length);

    return lista[posicao];

}

export const nome = aleatorio(nomes);