export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
  // every serve para verificar se todos os elementos de uma lista satisfazem uma condição
  return lista1.every((itemLista1) => lista2.includes(itemLista1));
}