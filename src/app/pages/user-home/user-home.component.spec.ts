import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeComponent } from './user-home.component';
import { DividerModule } from 'primeng/divider';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHomeComponent, DividerModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
