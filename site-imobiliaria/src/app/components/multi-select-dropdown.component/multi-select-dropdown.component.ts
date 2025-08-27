import { Component, ElementRef, HostListener, Input } from '@angular/core';


@Component({
  selector: 'app-multi-select-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrl: './multi-select-dropdown.component.css'
})
export class MultiSelectDropdownComponent {
  @Input() label: string = '';
  @Input() options: any[] = [];

  dropdownOpen = false;

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onCheckboxChange(option: any) {
    option.checked = !option.checked;
  }

  getSelectedOptions() {
    return this.options.filter(opt => opt.checked).map(opt => opt.label).join(', ');
  }

  getSelectedCount() {
    return this.options.filter(opt => opt.checked).length;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }
}
