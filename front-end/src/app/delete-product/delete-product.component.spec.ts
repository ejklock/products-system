import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductComponent } from './delete-product.component';

describe('DeleteProductComponent', () => {
  let component: DeleteProductComponent;
  let fixture: ComponentFixture<DeleteProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProductComponent],
      providers: [
        Router,
        Function,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'a3f5cc13-a8c6-47ff-8c47-ca7ef891ae8f', // represents the bookId
              },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
