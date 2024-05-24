import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() value = 'Hola desde el componente title'
  @ViewChild('containerTitle') contenedorRef!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("<< Hello from ngOnChanges >>")
    console.log(changes['value'])
  }

  ngOnInit(): void {
    console.log("<< Hello from ngOnInit >>")
  }

  ngAfterViewInit(): void {
    console.log("<< Hello from AfterViewInit >>")
    console.log('contenedorRef >>> ', this.contenedorRef)
  }

  ngOnDestroy(): void {
    console.log("<< Hello from Destroy >>")
  }
}
