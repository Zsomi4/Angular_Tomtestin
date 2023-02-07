/* 
 File: about.component.spec.ts
 Author: Gubis Zsombor Dániel
 Copyright: 2023, Gubis ZSombor Dániel
 Group: Szoft_II_N
 Date: 2023-07-07
 Github: https://github.com/Zsomi4/
 Licenc: GNU GPL
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
