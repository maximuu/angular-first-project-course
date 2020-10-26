import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
 
 @HostBinding('class.open') isOpen = false;
 
    @HostListener('click') toggleopen() {
        this.isOpen = !this.isOpen
    }

}