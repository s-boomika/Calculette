import { saisi, options, number, operator} from './gridData.js'
import { buildRows } from './gridUtils.js'
import { buildColumns } from './gridUtils.js';

console.table(saisi)

buildRows(saisi);
buildColumns(saisi);
buildRows(options);
buildColumns(options);
buildRows(number);
buildColumns(number);
buildRows(operator);
buildColumns(operator);