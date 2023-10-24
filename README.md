addColumns(type: string): VanTableColumn<string>[] {
  const isNotWFN = type !== 'WFN';
  const columnToInsert = isNotWFN ? this.addCurrentStatesColumn() : this.addWarningsColumn();
  const indexToInsert = isNotWFN ? 1 : 5;

  this.loadStatusColumns.splice(indexToInsert, 0, columnToInsert);
  return this.loadStatusColumns;
}

