import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritosApresentacaoComponent } from './favoritos-apresentacao.component';


describe('FavoritosApresentacaoComponent', () => {
  let component: FavoritosApresentacaoComponent;
  let fixture: ComponentFixture<FavoritosApresentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritosApresentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
