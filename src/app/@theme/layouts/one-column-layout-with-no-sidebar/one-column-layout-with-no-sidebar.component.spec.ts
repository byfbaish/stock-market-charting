import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnLayoutWithNoSidebarComponent } from './one-column-layout-with-no-sidebar.component';

describe('OneColumnLayoutWithNoSidebarComponent', () => {
  let component: OneColumnLayoutWithNoSidebarComponent;
  let fixture: ComponentFixture<OneColumnLayoutWithNoSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneColumnLayoutWithNoSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneColumnLayoutWithNoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
