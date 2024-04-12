import { Component } from '@angular/core';
import { ServiceService } from './service/service.service';
import { PreviewComponent } from './preview/preview.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'templateproject';
  textDataList!: any[];

  constructor(private textEditorService: ServiceService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadTextData();
  }

  loadTextData(): void {
    this.textEditorService.getall().subscribe(data => {
      this.textDataList = data;
    });
  }


  getById(id:any): void {
    this.textEditorService.getById(id).subscribe(data => {
      this.textDataList = data;
    });
  }
  openPreview(template: any): void {
    const dialogRef = this.dialog.open(PreviewComponent, {
      width: '400px',
      data: template
    });
  }
}
