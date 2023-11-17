
validationResultsDataMapping(nodes: { transformName: any; errorDetails: any }[]): any[] {
  const formattedDataArray: any[] = [];

  nodes.forEach(({ transformName, errorDetails }) => {
    let totalRows = 0;
    const formattedData = this.mapErrorDetailsToDataRow(errorDetails, transformName, totalRows);
    this.adjustLastPage(formattedData, totalRows);
    formattedDataArray.push(...formattedData);
  });

  return formattedDataArray;
}

private mapErrorDetailsToDataRow(errorDetails: any[], destinationObjectName: any, totalRows: number): ConversionErrorWarningsDataRow[] {
  return errorDetails.reduce((accumulator, { code, msg, details, rowNum }) => {
    const type = code && code.toLowerCase() === 'warn' ? 'Warning' : 'Error';
    const dataRow: ConversionErrorWarningsDataRow = {
      destinationObjectName,
      type,
      message: msg || '',
      details: details.inputData,
      rowNum: rowNum ? rowNum + 2 : 2,
    };
    accumulator.push(dataRow);
    totalRows++;

    if (totalRows % 10 === 0) {
      accumulator.push([]);
    }

    return accumulator;
  }, []);
}

private adjustLastPage(formattedData: ConversionErrorWarningsDataRow[][], totalRows: number): void {
  const remainingRows = 10 - (totalRows % 10);
  if (remainingRows !== 0) {
    formattedData.push(Array.from({ length: remainingRows }, () => ({})));
  }
}
