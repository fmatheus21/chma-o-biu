import { Component, OnInit } from '@angular/core';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'biu';

  constructor(private scriptService: ScriptService) { }

  ngOnInit() {


    /*this.scriptService.loadExternalScript('./assets/js/jquery-2.2.4.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/popper.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/bootstrap.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/plugins.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/slick.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/sweetalert.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/footer-reveal.min.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/active.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/nav.js').then(() => { }).catch(() => { });*/

  }

}
