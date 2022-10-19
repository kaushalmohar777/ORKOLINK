import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  entermessage:any;
  dateTime = new Date().toLocaleString();
  public FileImage : any;
  public ImageUrl = "";

  inCommingMsg :any[] = [
   {
   'profile_img':'assets/img/profile-img.jpg',
   'text':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
   'time':'20 Nov 2022 | 11:00 am',
   'icon':'assets/img/loc.png',
   'image':''
   },
   {
    'profile_img':'assets/img/profile-img.jpg',
    'text':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'time':'20 Nov 2022 | 11:00 am',
    'icon':'assets/img/loc.png',
    'image':''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


  sendMsg(){
    let insertData = {
      'profile_img':'assets/img/profile-img.jpg',
      'text': this.entermessage,
      'time':this.dateTime,
      'icon':'assets/img/loc.png',
      'image':''
      };

      this.inCommingMsg.push(insertData);
      this.entermessage='';
  }

  public btnUploadPhoto_click() {
    document.getElementById('uploadingMsgPhoto')?.click();
  }


  public async onFileChange(event:any) {

        this.FileImage = event.target.files[0];
        var reader = new FileReader();
        reader.onload = (event:any) => {
          this.ImageUrl = event.target.result;   
       }
        reader.readAsDataURL(this.FileImage);
       

        let insertData = {
          'profile_img':'assets/img/profile-img.jpg',
          'text': '',
          'time':this.dateTime,
          'icon':'assets/img/loc.png',
          'image': this.FileImage
          };

          this.inCommingMsg.push(insertData);
          this.entermessage='';
  }
}
