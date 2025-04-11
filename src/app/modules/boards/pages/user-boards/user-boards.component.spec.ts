import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBoardsComponent } from './user-boards.component';
import { DividerModule } from 'primeng/divider';

describe('UserHomeComponent', () => {
  let component: UserBoardsComponent;
  let fixture: ComponentFixture<UserBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBoardsComponent, DividerModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
