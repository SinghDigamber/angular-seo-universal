import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsComponent } from './songs.component';

describe('SongsComponent', () => {
  let component: SongsComponent;
  let fixture: ComponentFixture<SongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
