import { Module } from "vuex"
import { RootState } from './Types'
import  HistoryApi from '@/api/historyProducts'

export interface Product {
  name: string,
  about: string,
  img: string,
  alt: string,
}


export interface IHistory {
  itemsHistory: Array<Product>,
}





export const history: Module<IHistory, RootState> = {
  state: {
    // itemsHistory: [
    //   {
    //     name: "BXC",
    //     about: "Вытяжное устройство для механической системы вентиляции",
    //     img: "mw-item1-ico.png",
    //     alt: "mw-item1-ico",
    //   },
    //   {
    //     name: "G2H",
    //     about:
    //       "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
    //     img: "mw-item2-ico.png",
    //     alt: "mw-item2-ico",
    //   },
    //   {
    //     name: "GHN",
    //     about: "Вытяжное устройство с датчиком присутствия",
    //     img: "mw-item3-ico.png",
    //     alt: "mw-item3-ico",
    //   },
    //   {
    //     name: "TDA",
    //     about: "Вытяжное устройство с датчиком присутствия",
    //     img: "mw-item4-ico.png",
    //     alt: "mw-item4-ico",
    //   },
    //   {
    //     name: "BXC1",
    //     about: "Вытяжное устройство для механической системы вентиляции",
    //     img: "mw-item1-ico.png",
    //     alt: "mw-item1-ico",
    //   },
    //   {
    //     name: "G2H1",
    //     about:
    //       "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
    //     img: "mw-item2-ico.png",
    //     alt: "mw-item2-ico",
    //   },
    //   {
    //     name: "GHN1",
    //     about: "Вытяжное устройство с датчиком присутствия",
    //     img: "mw-item3-ico.png",
    //     alt: "mw-item3-ico",
    //   },
    //   {
    //     name: "TDA555",
    //     about: "Вытяжное устройство с датчиком присутствия",
    //     img: "mw-item4-ico.png",
    //     alt: "mw-item4-ico",
    //   },
    //   {
    //     name: "TDA555",
    //     about: "Вытяжное устройство с датчиком присутствия",
    //     img: "mw-item4-ico.png",
    //     alt: "mw-item4-ico",
    //   },
    //   {
    //     name: "BXC3",
    //     about: "Вытяжное устройство для механической системы вентиляции",
    //     img: "mw-item1-ico.png",
    //     alt: "mw-item1-ico",
    //   },
    //   {
    //     name: "G2H4",
    //     about:
    //       "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
    //     img: "mw-item2-ico.png",
    //     alt: "mw-item2-ico",
    //   },
    //   {
    //     name: "GHN5",
    //     about: "Вытяжное устройство с датчиком присутствия",
    //     img: "mw-item3-ico.png",
    //     alt: "mw-item3-ico",
    //   },
    //   {
    //     name: "TDA6",
    //     about: "Вытяжное устройство с датчиком присутствия",
    //     img: "mw-item4-ico.png",
    //     alt: "mw-item4-ico",
    //   },
    // ]
    itemsHistory: []
  },
  getters: {
    history(state) {
      return state.itemsHistory;
    }
  },
  mutations: {
    addHistoryProduct(state, data: Product) {
      state.itemsHistory.push(data)
    }
  },
  actions: {
    loadHistory({commit}) {
      return new Promise((resolve)=>{
        const api = new HistoryApi();
        api.loadProducts().then((res) => {

          res.data.forEach((element: { title: string; description: string; image: string; }) => {
            commit('addHistoryProduct', {
              name: element.title,
              about: element.description,
              img: element.image,
              alt: element.title,
            })
          });
          
          resolve(res);
        })
      })
    }
  },
  modules: {
  }
}
