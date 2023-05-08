import { Module } from "vuex"
import { RootState } from "./Types"



export interface BasketItem {
  header: string,
  price: number,
  count: number,
  img: string,
}

export interface BasketOptions {
  [key: string]: boolean | number | string
}

export interface IBasket {
  itemsBsk: Array<BasketItem>,
  optionsBsk: BasketOptions
}





export const basket: Module<IBasket, RootState> = {
  state: {
    itemsBsk: [
      {
        header: "Вытяжное устройство G2H",
        price: 12644,
        count: 2,
        img: "item1-ico.png",
      },
      {
        header: "Вытяжное устройство BXC",
        price: 12644,
        count: 1,
        img: "item2-ico.png",
      },
      {
        header: "Вытяжное устройство GHN",
        price: 7000,
        count: 7,
        img: "item3-ico.png",
      },
    ],
    optionsBsk: {
      install: true,
    }

  },
  getters: {
    basketItems(state) {
      return state.itemsBsk;
    },
    basketPrice(state) {
      if (state.itemsBsk.length <= 0) {
        return 0;
      }
      let sum = 0;
      state.itemsBsk.forEach((e) => {
        if (e.count === undefined) {
          sum += e.price;
        } else {
          sum += e.price * e.count;
        }
      });
      return sum;
    }, 
    basketCountObj(state) {
      let count = 0;
      if (state.itemsBsk?.length > 0) {
        state.itemsBsk.forEach((el) => {
          if (el.count === undefined) {
            count++;
          } else {
            count += el.count;
          }
        });
      }
      let suff;
      const d10 = count % 10;
      const d100 = count % 100;
      if (d10 === 1 && d100 !== 11) {
        suff = "товар";
      }
      else if (d10 >= 2 && d10 < 5 && d100 !== 12 && d100 !== 13 && d100 !== 14) {
        suff = "товара";
      }
      else suff = "товаров";
      
      return {
        count,
        suff
      };
    },
    basketOptions(state) {
      return {...state.optionsBsk }
    }
  },
  mutations: {
    basketDelete(state) {
      state.itemsBsk = []
    },
    basketItemDelete(state, index) {
      state.itemsBsk.splice(index, 1);
    },
    basketItemChangeQuant({itemsBsk}, {index, count}) {
      if (itemsBsk[index]) {
        itemsBsk[index].count = count;
      }
    },
    basketChangeOption(state, {opt, value}) {
      
      if (state.optionsBsk[opt] !== undefined) {
        state.optionsBsk[opt] = value;
      }
    }
  },
  actions: {
  },
  modules: {
  }
}
