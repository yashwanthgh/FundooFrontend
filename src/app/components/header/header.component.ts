import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataservice/data.service';
import { MENU_ICON, REFRESH_ICON, LIST_VIEW_ICON, SETTING_ICON, SEARCH_ICON, OTHER_MENU_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  drawerState!:boolean;
  searchString!:string;
  subscription!:Subscription;
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dataService: DataService) {
    iconRegistry.addSvgIconLiteral("menu-icon", sanitizer.bypassSecurityTrustHtml(MENU_ICON));
    iconRegistry.addSvgIconLiteral("refresh-icon", sanitizer.bypassSecurityTrustHtml(REFRESH_ICON));
    iconRegistry.addSvgIconLiteral("list-icon", sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON));
    iconRegistry.addSvgIconLiteral('setting-icon', sanitizer.bypassSecurityTrustHtml(SETTING_ICON));
    iconRegistry.addSvgIconLiteral('search-icon', sanitizer.bypassSecurityTrustHtml(SEARCH_ICON));
    iconRegistry.addSvgIconLiteral('apps-icon', sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON));
  }
  ngOnInit(){
    this.subscription = this.dataService.currentDrawerState.subscribe((res) => this.drawerState = res)
  }
  
  handelDrawerClick(){
    this.dataService.togalDrawerState(!this.drawerState)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
