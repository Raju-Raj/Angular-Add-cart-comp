import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  constructor(private booksService:BooksService){}
  

  noBooks : Book[] =[];

ngOnInit():void{
  this.noBooks=this.booksService.getBooks()
}

}
