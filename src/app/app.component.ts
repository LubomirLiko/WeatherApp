import { Component } from '@angular/core';
import { NitraComponent } from "./nitra/nitra.component";
import { BratislavaComponent } from './bratislava/bratislava.component';
import { TrencinComponent } from './trencin/trencin.component';
import { PresovComponent } from './presov/presov.component';
import { BanskaBystricaComponent } from './banska-bystrica/banska-bystrica.component';
import { ZilinaComponent } from './zilina/zilina.component';
import { TrnavaComponent } from './trnava/trnava.component';
import { KosiceComponent } from './kosice/kosice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NitraComponent, BratislavaComponent, KosiceComponent, PresovComponent,
            BanskaBystricaComponent, ZilinaComponent, TrnavaComponent, TrencinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weatherapp';
}
