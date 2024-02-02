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
  }

  closeDropdown() {
    this.dropdownVisible = false;
  }

  private checkScreenSize() {
    const isSmallScreen = window.innerWidth <= 768;
    this.mostrarBoton = window.innerWidth > 768;
    this.dropdownVisible = !isSmallScreen;
  }
  emitir() {
    this.eventoSalida.emit();
  }

}
