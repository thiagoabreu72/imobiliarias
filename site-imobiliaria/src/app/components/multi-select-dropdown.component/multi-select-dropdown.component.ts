import { Component, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-multi-select-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrl: './multi-select-dropdown.component.css'
})
export class MultiSelectDropdownComponent {
  options = [
    { label: 'Selecione a Opção 1', value: '1', checked: false },
    { label: 'Selecione a Opção 2', value: '2', checked: false },
    { label: 'Selecione a Opção 3', value: '3', checked: false },
    { label: 'Selecione a Opção 4', value: '4', checked: false },
    { label: 'Selecione a Opção 5', value: '5', checked: false },
    { label: 'Selecione a Opção 6', value: '6', checked: false },
    { label: 'Selecione a Opção 7', value: '7', checked: false },
    { label: 'Selecione a Opção 8', value: '8', checked: false },
    { label: 'Selecione a Opção 9', value: '9', checked: false },
    { label: 'Selecione a Opção 10', value: '10', checked: false }
  ];

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
