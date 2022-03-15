import {Component, EventEmitter, Input, Output, ViewChildren} from "@angular/core";
import TableRow from "../interfaces/TableRow";
@Component({
  selector:'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.css']
})
export class TableComponent {
  @Input() tableData: TableRow[];
  @Input() rowHeaders: string[];
  @Input() idField: string;

  @Output() deleteRow = new EventEmitter<string>();
  @Output() addRow = new EventEmitter<any>();
  @Output() editField = new EventEmitter<TableEditOutput>();

  @ViewChildren('newRowInput') newRowInputRef;
  public isAdding: boolean;
  public editingField = {header: null, id: null};
  public editingFieldValue: string;

  handleDeleteRowClick(row: TableRow): void {
    this.deleteRow.emit(row.data[this.idField]);
  }

  handleAddNewRowCLick(): void {
    const data = {};
    this.newRowInputRef.forEach((ref) => {
      data[ref.nativeElement.id] = ref.nativeElement.value;
    });
    this.addRow.emit(data);
    this.isAdding = false;
  }

  handleEditFieldClick(row: TableRow, header: string): void {
    if (header === this.idField) {
      return;
    }
    this.editingField = {id: row.data[this.idField], header: header};
    this.editingFieldValue = row.data[header];
  }

  handleDoneEditing(): void {
    const value = {id: this.editingField.id, data: {[this.editingField.header] : this.editingFieldValue}};
    this.editField.emit(value);
    this.editingField = {id: null, header: null};
  }

}
export interface TableEditOutput {
  id: string;
  data: any;
}
