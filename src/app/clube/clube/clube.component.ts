import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css']
})
export class ClubeComponent implements OnInit {

  constructor(private scriptService: ScriptService) { }

  ngOnInit() {
    this.scriptService.loadExternalScript('./assets/js/active.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom.js').then(() => { }).catch(() => { });
  }

}
