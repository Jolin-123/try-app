import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterComponent } from './master.component';
import { RolesComponent } from '../components/roles/roles.component';
import { CommonModule } from '@angular/common';

describe('MasterComponent', () => {
  let component: MasterComponent;
  let fixture: ComponentFixture<MasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterComponent,RolesComponent,CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
