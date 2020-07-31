import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableComponent } from './product-table.component';

describe('ProductTableComponent', () => {
  let component: ProductTableComponent;
  let fixture: ComponentFixture<ProductTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTableComponent],
      providers: [ActivatedRoute],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
