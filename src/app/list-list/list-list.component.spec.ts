import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListListComponent } from './list-list.component';

describe('ListListComponent', () => {
  let component: ListListComponent;
  let fixture: ComponentFixture<ListListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListListComponent]
    });
    fixture = TestBed.createComponent(ListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
