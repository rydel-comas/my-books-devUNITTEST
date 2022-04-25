import {Component, Inject, OnInit} from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

import { take } from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listBook: Book[] = [];

  constructor(
    public readonly bookService: BookService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {

    this.getBooks();
    this.document.defaultView.alert('Hello');
    //window.alert('Hello');

  }

  public getBooks(): void {
    this.bookService.getBooks().pipe(take(1)).subscribe((resp: Book[]) => {
      this.listBook = resp;
    });
  }

}
