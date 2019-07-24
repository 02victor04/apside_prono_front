import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListejoueursComponent } from './listejoueurs.component';

describe('ListejoueursComponent', () => {
  let component: ListejoueursComponent;
  let fixture: ComponentFixture<ListejoueursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListejoueursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListejoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
