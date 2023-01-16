import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {id:1, name: 'Холодильники'},
      {id:1, name: 'Cмартфоны'},
    ]
    this._brands = [
      {id:1, name: 'Samsung'},
      {id:1, name: 'Apple'},
    ]
    this._devices = [
      {id:1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'https://www.iphones.ru/wp-content/uploads/2020/10/apple4_bionic.jpg'},
      {id:2, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'https://www.iphones.ru/wp-content/uploads/2020/10/apple4_bionic.jpg'},
      {id:3, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'https://www.iphones.ru/wp-content/uploads/2020/10/apple4_bionic.jpg'},
      {id:4, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'https://www.iphones.ru/wp-content/uploads/2020/10/apple4_bionic.jpg'},
    ]

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevises(devices) {
    this._devices = devices
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }
}