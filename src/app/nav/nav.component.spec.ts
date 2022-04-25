import {NavComponent} from './nav.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from "@angular/router";


class ComponentTestRoute {};

describe('Nav component', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: 'home', component: ComponentTestRoute},
        {path: 'cart', component: ComponentTestRoute},
      ])],
      declarations: [NavComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
     fixture = TestBed.createComponent(NavComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

  it('should create',  () => {
    expect(component).toBeTruthy();
  });

  it('should navigate',  () => {
    const router = TestBed.inject(Router);

    const spy1 = spyOn(router, 'navigate');
    component.navTo('home');
    expect(spy1).toHaveBeenCalledWith(['/home']);
    component.navTo('cart');
    expect(spy1).toHaveBeenCalledWith(['/cart']);
  });

});
