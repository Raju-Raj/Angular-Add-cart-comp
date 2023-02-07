import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name : "C Programming",
        author : "Darrel L. Graham",
        image : "https://m.media-amazon.com/images/I/91-l2iv-4hL._AC_UY218_.jpg",
        price : 700,
      },
      {
        name : "Python Programming",
        author : "Ramsey H amilton ",
        image : "https://m.media-amazon.com/images/I/71OOiDmOlHL._AC_UY218_.jpg",
        price : 800,
      },
      {
        name : "C Programming",
        author : "Darrel L. Graham",
        image : "https://m.media-amazon.com/images/I/91-l2iv-4hL._AC_UY218_.jpg",
        price : 700,
      },
      {
        name : "Python Programming",
        author : "Ramsey Hamilton ",
        image : "https://m.media-amazon.com/images/I/71OOiDmOlHL._AC_UY218_.jpg",
        price : 800,
      }
    ]
  }
}

