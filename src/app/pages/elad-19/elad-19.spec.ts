import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elad19 } from './elad-19';

describe('Elad19', () => {
  let component: Elad19;
  let fixture: ComponentFixture<Elad19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elad19]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elad19);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
