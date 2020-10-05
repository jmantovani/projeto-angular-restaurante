import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiradaContainerComponent } from './retirada-container.component';

describe('RetiradaContainerComponent', () => {
  let component: RetiradaContainerComponent;
  let fixture: ComponentFixture<RetiradaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetiradaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiradaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
