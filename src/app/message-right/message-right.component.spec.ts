import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRightComponent } from './message-right.component';

describe('MessageRightComponent', () => {
  let component: MessageRightComponent;
  let fixture: ComponentFixture<MessageRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
