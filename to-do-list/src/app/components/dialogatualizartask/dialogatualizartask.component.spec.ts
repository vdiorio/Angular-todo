import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogatualizartaskComponent } from './dialogatualizartask.component';

describe('DialogatualizartaskComponent', () => {
  let component: DialogatualizartaskComponent;
  let fixture: ComponentFixture<DialogatualizartaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogatualizartaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogatualizartaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
