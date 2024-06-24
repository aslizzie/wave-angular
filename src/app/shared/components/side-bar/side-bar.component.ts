import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isCollapsed = false;
  headerToggleImgSrc = '../../../../assets/logos/small-logo.png';

  @Output() sidebarCollapsed: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.headerToggleImgSrc = '../../../../assets/logos/small-logo.png';
    } else {
      this.headerToggleImgSrc = '../../../../assets/logos/big-logo.png';
    }

    this.sidebarCollapsed.emit(!this.isCollapsed);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
