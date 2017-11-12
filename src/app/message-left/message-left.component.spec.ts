import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLeftComponent } from './message-left.component';

describe('MessageLeftComponent', () => {
  let component: MessageLeftComponent;
  let fixture: ComponentFixture<MessageLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
