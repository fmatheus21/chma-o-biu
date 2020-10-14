import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  image = 'https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg';
  name1;
  age;
  loading = false;
  buttionText = 'Submit';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  constructor(public httpService: HttpService) { }

  ngOnInit() { console.log(this.httpService.test); }

  changeImage() {
    this.httpService.test = 'changed';
    this.image =
      'https://images.pexels.com/photos/635529/pexels-photo-635529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
  }

  register() {
    alert('OK');
    this.loading = true;
    this.buttionText = 'Submiting...';
    const user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value
    };
    this.httpService.sendEmail('http://localhost:3000/sendmail', user).subscribe(
      data => {
        const res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = 'Submit';
      }, () => {
        this.loading = false;
        this.buttionText = 'Submit';
      }
    );
  }
}