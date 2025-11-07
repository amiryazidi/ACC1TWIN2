import { ChangeBackgroundDirective } from './change-background.directive';
import { ElementRef } from '@angular/core';

describe('ChangeBackgroundDirective', () => {
  it('should create an instance', () => {
    const el = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new ChangeBackgroundDirective(el);
    expect(directive).toBeTruthy();
  });
});
