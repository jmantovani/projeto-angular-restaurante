import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaContainerComponent } from './entrega-container.component';

describe('EntregaContainerComponent', () => {
  let component: EntregaContainerComponent;
  let fixture: ComponentFixture<EntregaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
