// Elements to interact with Product page

// TODO - Make it extends from Global Elements
export const ELEMENTS_PRODUCT = {
  create: {
    inputName: '[data-testid="nome"]',
    inputPrice: '[data-testid="preco"]',
    inputDescription: '[data-testid="descricao"]',
    inputQuantity: '[data-testid="quantity"]',
    inputImageUpload: '[data-testid="imagem"]',
    buttonSave: '[data-testid="cadastarProdutos"]',
  },
  list: {
    listProducts: 'tbody tr',
    buttonDelete: 'button.btn-danger',
  },
};