import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nu-non-exist',
  templateUrl: './non-exist.component.html',
  styleUrls: ['./non-exist.component.less']
})
export class NonExistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  refreshPage() {
    location.reload(true);
  }

  backHome() {
    location.href = "/dduc2020/";
  }

}
