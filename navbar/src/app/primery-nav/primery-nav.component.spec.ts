import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeryNavComponent } from './primery-nav.component';

describe('PrimeryNavComponent', () => {
  let component: PrimeryNavComponent;
  let fixture: ComponentFixture<PrimeryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeryNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
