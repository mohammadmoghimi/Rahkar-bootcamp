import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KholooseNiatTodolistComponent } from './kholoose-niat-todolist.component';

describe('KholooseNiatTodolistComponent', () => {
  let component: KholooseNiatTodolistComponent;
  let fixture: ComponentFixture<KholooseNiatTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KholooseNiatTodolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KholooseNiatTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
