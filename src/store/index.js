import { createStore } from 'vuex'
const setLocalStorage = (state) => {
  const { cartList } = state;
  const cartListString = JSON.stringify(cartList);
  localStorage.cartList = cartListString
  
}

export default createStore({
  state: {
    cartList:
      {}
    // {
    //   // 第一层级是商铺的id,shopId里存放了商店的名称
    //   // shopId: {
    //   //    shopName:'沃尔玛',
    //   // 第二层是 这个商店里的所有商品列表
    //   // 第三层内容是 商品内容以及购物数量
    //   //   productList: {
    //   //      productId: {
    //   //        _id: '1',
    //   //         name: '番茄250g/份',
    //   //        imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //   //        sales: 10,
    //   //        price: 33.6,
    //   //        oldPrice: 39.6,
    //   //        count: 2
    //   //   },
    //   //}
    //   // },
    // }
  },
  // 同步修改数据
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload;
      //展示哪一个商店
      let shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      };
      //展示哪一个商品
      let product = shopInfo.productList[productId];
      if (!product) {
        productInfo.count = 0;
        product = productInfo;
      }
      product.count += payload.num;
      if (payload.num > 0) product.check = true;
      if (product.count <= 0) product.count = 0;
      //数据渲染
      shopInfo.productList[productId] = product;
      state.cartList[shopId] = shopInfo;
      setLocalStorage(state);
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
      setLocalStorage(state);
    },
    changeCartItemCheck(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId].productList[productId];
      product.check = !product.check;
      setLocalStorage(state);
    },
    clearCartItem(state, payload) {
      const { shopId} = payload;
      state.cartList[shopId].productList = {};
      setLocalStorage(state);
    },
    setCartAll(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId].productList;
      if (products) {
        for (let key in products) {
          let product = products[key];
          product.check = true;
        }
      }
      setLocalStorage(state);
    }
  },
  actions: {
  },
  modules: {
  }
})
