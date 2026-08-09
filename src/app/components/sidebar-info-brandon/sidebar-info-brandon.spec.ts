import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInfoBrandon } from './sidebar-info-brandon';

describe('SidebarInfoBrandon', () => {
  let component: SidebarInfoBrandon;
  let fixture: ComponentFixture<SidebarInfoBrandon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarInfoBrandon],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarInfoBrandon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
