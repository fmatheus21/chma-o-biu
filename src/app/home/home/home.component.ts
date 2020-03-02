import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private scriptService: ScriptService) { }

  ngOnInit() {

    this.scriptService.loadExternalScript('./assets/js/active.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom.js').then(() => { }).catch(() => { });

  }

}
