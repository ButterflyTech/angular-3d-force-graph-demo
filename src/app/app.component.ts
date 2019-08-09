import { Component, OnInit } from '@angular/core';
declare var ForceGraph3D: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  ngOnInit() {
    const elem = document.getElementById('3d-graph');
    const Graph = ForceGraph3D()(elem)
      .jsonUrl('assets/dataset/demo.json')
      .nodeAutoColorBy('user')
      .nodeLabel(node => `${node.user}: ${node.description}`)
      .onNodeHover(node => elem.style.cursor = node ? 'pointer' : null)
      .onNodeClick(node => window.open(`https://bl.ocks.org/${node.user}/${node.id}`, '_blank'));
  }
}
