import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailjoueurComponent } from './detailjoueur.component';

describe('DetailjoueurComponent', () => {
  let component: DetailjoueurComponent;
  let fixture: ComponentFixture<DetailjoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailjoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailjoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
