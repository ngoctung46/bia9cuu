import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @HostBinding(`attr.class`) cssClass = `ui main container`;
  header: string;
  subHeader: string;
  address: string;
  phoneNumber: string;
  emailAddress: string;
  constructor() { }

  ngOnInit() {
    this.header = "Write Your Message";
    this.subHeader = "Please fill in the form below to contact us";
    this.address = "20 Huong Lo 2 Street, Binh Hung Hoa A Ward, Binh Tan District";
    this.phoneNumber = "01666284889";
    this.emailAddress = "dailybiaacuu@gmail.com";
  }

}
