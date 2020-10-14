import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private scriptService: ScriptService) { }

  ngOnInit() {
    this.scriptService.loadExternalScript('./assets/js/nav.js').then(() => { }).catch(() => { });
  }


}
