import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:String;
  expanded: boolean;
  state: String;
  public logged:Boolean;
  public username: String;

  constructor(public navService: NavService)
    {}

  ngOnInit(): void {
    this.title = 'Library Management System';
    this.expanded= true;
    this.state = 'collapsed';
    this.logged = true;
    this.username='Admin';

  }

  rotate(): void {
    this.state = (this.state === 'collapsed' ? 'expanded' : 'collapsed');
  }


}
