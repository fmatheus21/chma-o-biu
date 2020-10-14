import { Component, OnInit } from '@angular/core';
import { FaqService } from '../faq.service';
import { ScriptService } from 'src/app/script.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public arrayFaqPassageiro: any[];
  public arrayFaqMotorista: any[];

  constructor(private faqService: FaqService, private scriptService: ScriptService) { }

  ngOnInit() {
    this.loadFaqPassageiro();
    this.loadFaqMotorista();
    this.scriptService.loadExternalScript('./assets/js/active.js').then(() => { }).catch(() => { });
    this.scriptService.loadExternalScript('./assets/js/custom.js').then(() => { }).catch(() => { });
  }

  private loadFaqPassageiro() {
    this.arrayFaqPassageiro = this.faqService.faqPassageiro();
  }

  private loadFaqMotorista() {
    this.arrayFaqMotorista = this.faqService.faqMotorista();
  }


}
