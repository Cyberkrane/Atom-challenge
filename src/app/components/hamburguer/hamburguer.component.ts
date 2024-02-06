import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburguer',
  templateUrl: './hamburguer.component.html',
  styleUrls: ['./hamburguer.component.css']
})
export class HamburguerComponent {

  @Input() datoEntrada: any;
  @Output() eventoSalida: EventEmitter<any> = new EventEmitter<any>();

  dropdownVisible = false;
  isSmallScreen: boolean = false;
  mostrarBoton = true;

  private dropdownTimeout: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
    this.emitir();
    if (this.dropdownVisible) {
      this.startDropdownTimer(); 
    } else {
      this.clearDropdownTimer(); 
    }
  }

  closeDropdown() {
    this.dropdownVisible = false;
    this.clearDropdownTimer();
  }

  private checkScreenSize() {
    const isSmallScreen = window.innerWidth <= 768;
    this.mostrarBoton = window.innerWidth > 768;
    this.dropdownVisible = !isSmallScreen;
  }

  private startDropdownTimer() {
    this.clearDropdownTimer();
    this.dropdownTimeout = setTimeout(() => {
      this.dropdownVisible = false;
    }, 2000);
  }

  private clearDropdownTimer() {
    if (this.dropdownTimeout) {
      clearTimeout(this.dropdownTimeout); 
      this.dropdownTimeout = null;
    }
  }

  emitir() {
    this.eventoSalida.emit();
  }
}
