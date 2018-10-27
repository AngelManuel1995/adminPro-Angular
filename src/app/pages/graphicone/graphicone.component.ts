import { Component, OnInit } from '@angular/core'

@Component({
    selector:'app-graphicone',
    templateUrl:'./graphicone.component.html'
})

export class GraphicOneComponent implements OnInit{

    titulo1="Gráfica 1"
    titulo2="Gráfica 2"
    titulo3="Gráfica 3"
    titulo4="Gráfica 4"

    public pieChartLabels1:string[] = ['Download Sales1', 'In-Store Sales1', 'Mail Sales1'];
    public pieChartData1:number[] = [100, 500, 100];

    public pieChartLabels2:string[] = ['Download Sales2', 'In-Store Sales2', 'Mail Sales2'];
    public pieChartData2:number[] = [300, 200, 100];

    public pieChartLabels3:string[] = ['Download Sales3', 'In-Store Sales3', 'Mail Sales3'];
    public pieChartData3:number[] = [300, 500, 600];

    public pieChartLabels4:string[] = ['Download Sales4', 'In-Store Sales4', 'Mail Sales4'];
    public pieChartData4:number[] = [100, 100, 100];

    constructor(){

    }

    ngOnInit(){

    }
}