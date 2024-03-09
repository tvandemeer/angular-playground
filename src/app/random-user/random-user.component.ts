import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { RandomUserService } from '../services/random-user.service';
import { FlagsService } from '../services/flags.service';

@Component({
  selector: 'app-random-user',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './random-user.component.html',
  styleUrl: './random-user.component.css'
})
export class RandomUserComponent implements OnInit {

  constructor(private userService: RandomUserService, private flagService: FlagsService) {}

  data: any;
  user: any;
  flag: any;
  natcode: string;

  ngOnInit() {
     this.userService.GetRandomUser()
     .subscribe((res) => {
      this.data = res;
      this.user = this.data.results[0];
      this.natcode = this.user.nat.toLowerCase();
      // this.flagService.GetFlag(this.user.nat)
      //   .subscribe((res) => {
      //     this.flag = res;
      //   })
     });
  }

}
