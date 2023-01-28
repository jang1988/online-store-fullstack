import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {id:1, name: 'Холодильники'},
      {id:2, name: 'Cмартфоны'},
      {id:3, name: 'Ноутбуки'},
      {id:4, name: 'Телевизоры'},
    ]
    this._brands = [
      {id:1, name: 'Samsung'},
      {id:2, name: 'Apple'},
    ]
    this._devices = [
      {id:1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'https://www.iphones.ru/wp-content/uploads/2020/10/apple4_bionic.jpg'},
      {id:2, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'https://www.iphones.ru/wp-content/uploads/2020/10/apple4_bionic.jpg'},
      {id:3, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'https://www.iphones.ru/wp-content/uploads/2020/10/apple4_bionic.jpg'},
      {id:4, name: 'Iphone 12 pro', price: 25000, rating: 5, img:'https://www.iphones.ru/wp-content/uploads/2020/10/apple4_bionic.jpg'},
    ]
    this._selectedType = {}

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
  setSelectedType(type) {
    return this._selectedType = type
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

  get selectedType() {
    return this._selectedType
  }
}