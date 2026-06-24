import { Phase } from '../types';

export const EXCEL_ROADMAP: Phase[] = [
  {
    phase: 'Foundation',
    color: '#22d3ee',
    topics: [
      { title: 'Interface & Navigation', done: true, desc: 'Ribbons, cells, rows, columns, named ranges' },
      { title: 'Formulas & Functions', done: true, desc: 'SUM, AVERAGE, IF, COUNTIF, VLOOKUP' },
      { title: 'Data Formatting', done: false, desc: 'Number formats, conditional formatting, styles' },
    ],
  },
  {
    phase: 'Intermediate',
    color: '#a78bfa',
    topics: [
      { title: 'PivotTables', done: false, desc: 'Aggregation, slicers, calculated fields' },
      { title: 'Charts & Dashboards', done: false, desc: 'Dynamic charts, sparklines, KPI cards' },
      { title: 'Advanced Formulas', done: false, desc: 'INDEX/MATCH, XLOOKUP, array formulas' },
    ],
  },
  {
    phase: 'Advanced',
    color: '#f472b6',
    topics: [
      { title: 'Power Query', done: false, desc: 'ETL, M language, data transformations' },
      { title: 'Power Pivot & DAX', done: false, desc: 'Data models, measures, KPIs' },
      { title: 'VBA & Macros', done: false, desc: 'Automation, custom functions, event triggers' },
    ],
  },
];

export const SQL_ROADMAP: Phase[] = [
  {
    phase: 'Core SQL',
    color: '#34d399',
    topics: [
      { title: 'SELECT & Filtering', done: true, desc: 'WHERE, LIKE, IN, BETWEEN, NULL handling' },
      { title: 'Joins', done: true, desc: 'INNER, LEFT, RIGHT, FULL OUTER, CROSS joins' },
      { title: 'Aggregation', done: false, desc: 'GROUP BY, HAVING, aggregate functions' },
    ],
  },
  {
    phase: 'Intermediate SQL',
    color: '#fb923c',
    topics: [
      { title: 'Subqueries & CTEs', done: false, desc: 'Correlated subqueries, WITH clause, recursion' },
      { title: 'Window Functions', done: false, desc: 'ROW_NUMBER, RANK, LAG, LEAD, PARTITION BY' },
      { title: 'Data Manipulation', done: false, desc: 'INSERT, UPDATE, DELETE, UPSERT patterns' },
    ],
  },
  {
    phase: 'Expert SQL',
    color: '#f43f5e',
    topics: [
      { title: 'Query Optimization', done: false, desc: 'Indexes, execution plans, query hints' },
      { title: 'Stored Procedures', done: false, desc: 'Variables, control flow, error handling' },
      { title: 'Database Design', done: false, desc: 'Normalization, ERD, constraints, transactions' },
    ],
  },
];
