import { Component,ViewChild} from '@angular/core';
import { Slides, NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild(Slides)
  slides: Slides;


  sampleFunction(){

    console.log("Extends Works");
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hi',
      subTitle: 'You Reached Last Slide',
      buttons: ['OK']
    });
    alert.present();
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
 
    console.log("current index is"+currentIndex);

     if (this.slides.isEnd()){
      this.showAlert();
    }
  }

constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
   
    


  }

}

