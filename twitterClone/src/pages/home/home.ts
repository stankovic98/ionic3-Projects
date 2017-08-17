import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
dummyTweets = [
    {
      username: 'Max Lynch',
      handle: 'maxlynch',
      likeCount: '34',
      shareCount: '15',
      text: 'Put something under the domain http://ionicjs.com  for the first time tonight...',
      date: '1485601506000',
      img: 'assets/Tesla.jpeg'
    },
        {
      username: 'Simon Reimler',
      handle: 'schlimmson',
      likeCount: '41',
      shareCount: '5',
      text: 'Really love the way of Building Layouts with Ionic 2 and the grid system!',
      date: '1485701506000',
      img: 'assets/Thomas.jpg'
    },
        {
      username: 'ionic',
      handle: 'ionicframework',
      likeCount: '42',
      shareCount: '22',
      text: 'The day has finally come!  Announcing Ionic 2.0.0 final 🎉🎊🔥  http://blog.ionic.io/announcing-ionic-2-0-0-final/ …',
      date: '1485801506000',
      img: 'assets/Thomas.jpg'
    },
            {
      username: 'Ben Sperry',
      handle: 'benjsperry',
      likeCount: '15',
      shareCount: '11',
      text: 'One of my all time favorite Ionic Meetup logos: Ionic San Francisco. ❤️',
      date: '1485901506000',
      img: 'assets/Tesla.jpeg'
    }
  ];
  constructor(public navCtrl: NavController) {

  }

}
