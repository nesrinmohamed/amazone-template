const cart = {
  state: {
    cartData: {
      products: [],
      totalPrice: 0,
      quantity: 0,
    },
  },

  getters: {
    getCard:(state) =>{
        return state.cartData

   
    },
    items: (state) => {
      return state.cartData.products.length;
    },
    cartProducts: (state) => {
      return state.cartData;
    },
    getPrice:(state) =>{
      let price = 0;
      state.cartData.products.forEach(product => (
        price += product.totalPrice
      ));
      return price
    },
    getQuantites:(state) =>{
      let quantity = 0;
      state.cartData.products.forEach(product =>(
        quantity += parseInt(product.quantity)
      ))
   return quantity
    }
    
  },
  mutations: {
    ADD_TO_CARD: (state, payload) => {
      const check = state.cartData.products.find(
        (product) => product.id === payload.id,
      );
      if (check) {
        return state;
      } else {
        payload.totalPrice = parseInt(payload.quantity) * payload.price
        state.cartData = { ...state.cartData,
         products: [...state.cartData.products, payload],
          totalPrice: state.cartData.totalPrice + payload.totalPrice,
          quantity: state.cartData.quantity + 1,
        };
      }
    },
    UPDATE_QUANTITY:(state , payload) =>{
      const product = state.cartData.products.find(product => product.id === payload.id)
     console.log(product)
      product.totalPrice = product.price * parseInt(product.quantity)
    const index = state.cartData.products.findIndex(product => product.id === payload.id)
      state.cartData.products[index] = product
  },
  DELET_PRODUCT:(state , id)=>{
   state.cartData.products =  state.cartData.products.filter(product=> product.id !== id)
  }
  },
  actions: {
    addToCard: ({ commit }, id) => {
      commit("ADD_TO_CARD", id);
      localStorage.setItem("ADD_TO_CARD" , id)
    },

    updateQuantity:({commit}, id) =>{
     commit('UPDATE_QUANTITY' , id)
    },
    deleteProduct:({commit} , id)=>{
      commit('DELET_PRODUCT' , id)
    }

  },
};

export default cart