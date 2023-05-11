import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInput } from './header.component';

describe('HeaderComponent', () => {
  let component: TodoInput;
  let fixture: ComponentFixture<TodoInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInput ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
