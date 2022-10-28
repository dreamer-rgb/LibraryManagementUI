import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavService} from './services/nav.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit{
  title = 'librarymanagementsystem';
  @ViewChild('sidenav') sideNav: ElementRef;

  navItems =  [];

  constructor(public navService: NavService,
              private router: Router){}

  ngAfterViewInit() {
    this.navService.appDrawer = this.sideNav;
  }

  ngOnInit() {
    this.navItems=[
    {name: "Issue Books", route: '/issuebooks', icon: 'book'},
    {name: 'Return Books', route: '/returnbooks', icon: 'book'},
    {name:'Add New Book', route: '/addbooks', icon: 'book'},
    {name: 'Remove Old Book', route: '/removebooks', icon: 'delete'},
   ]
  }
}