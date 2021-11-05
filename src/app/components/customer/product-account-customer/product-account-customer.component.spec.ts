import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAccountCustomerComponent } from './product-account-customer.component';

describe('ProductAccountCustomerComponent', () => {
  let component: ProductAccountCustomerComponent;
  let fixture: ComponentFixture<ProductAccountCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAccountCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAccountCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
