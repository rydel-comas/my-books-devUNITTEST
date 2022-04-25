import {HomeComponent} from './home.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BookService} from '../../services/book.service';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform} from '@angular/core';
import {Book} from '../../models/book.model';
import {of} from 'rxjs';
import {DOCUMENT} from '@angular/common';


const listBook: Book[] = [
  {name: '', author: '', isbn: '', price: 15, amount: 2},
  {name: '', author: '', isbn: '', price: 20, amount: 1},
  {name: '', author: '', isbn: '', price: 8, amount: 7},
];
const bookServiceMock = {
   getBooks: () => of(listBook)
 };

@Pipe({name: 'reduceText'})
class ReduceTextPipeMock implements PipeTransform{
  transform(): string {
    return '';
  }
}

describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent, ReduceTextPipeMock],
      providers: [
        //BookService
        {
          provide: BookService,
          useValue: bookServiceMock
         },
        {
          provide: Document,
          useExisting: DOCUMENT
        }
         ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
      }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getBooks get books from subscription', () => {
     const bookService = fixture.debugElement.injector.get(BookService);
     // const listBook: Book[] = [];
     // const spy1 = spyOn(bookService, 'getBooks').and.returnValues(of(listBook));
     component.getBooks();
     // expect(spy1).toHaveBeenCalled();
     expect(component.listBook.length).toBe(3);
  });

  it('test alert', () => {
    const documentService = TestBed.inject(Document);
    const windowAngular = documentService.defaultView;
    const spy = spyOn(windowAngular, 'alert').and.callFake(() => null);
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

});
