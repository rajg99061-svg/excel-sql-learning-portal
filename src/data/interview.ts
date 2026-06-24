import { InterviewQuestion } from '../types';

export const INTERVIEW_QS: InterviewQuestion[] = [
  {
    cat: 'Excel',
    q: 'Explain the difference between VLOOKUP and INDEX/MATCH.',
    a: 'VLOOKUP only looks right and requires column numbers that break when columns are inserted. INDEX/MATCH is more flexible — it can look left, handles column insertions gracefully, and is generally faster on large datasets because INDEX/MATCH only searches one column.',
    icon: '📊',
  },
  {
    cat: 'SQL',
    q: 'What is the difference between DELETE, TRUNCATE, and DROP?',
    a: 'DELETE removes specific rows with a WHERE clause and can be rolled back (it\'s DML). TRUNCATE removes all rows faster without logging individual deletions, resets identity columns, but cannot be filtered. DROP removes the entire table structure and all its data permanently (DDL).',
    icon: '🗄️',
  },
  {
    cat: 'Excel',
    q: 'How would you build a dynamic dashboard in Excel?',
    a: 'Use PivotTables as data sources with structured table references, connect slicers across multiple pivots using Report Connections, use named ranges or OFFSET/COUNTA for dynamic chart ranges, and add form controls or dropdown validation to drive parameters. Power Query handles data refresh automation.',
    icon: '📈',
  },
  {
    cat: 'SQL',
    q: 'When would you use a CTE over a subquery?',
    a: 'CTEs improve readability and maintainability for complex multi-step logic, enable recursive queries (like hierarchy traversal), and can be referenced multiple times in a single statement without re-execution in some engines. Subqueries are fine for simple, one-off filtering but become hard to read when nested.',
    icon: '🔍',
  },
  {
    cat: 'SQL',
    q: 'Explain how indexes affect query performance.',
    a: 'Indexes speed up SELECT queries by allowing the engine to locate rows via a B-tree structure without full table scans. However, they slow INSERT/UPDATE/DELETE because the index must be maintained on every write. Use indexes on frequently filtered or joined columns, but avoid over-indexing write-heavy tables.',
    icon: '⚡',
  },
  {
    cat: 'Excel',
    q: 'What is DAX and when would you use it over regular Excel formulas?',
    a: 'DAX (Data Analysis Expressions) is used in Power Pivot and Power BI to create measures and calculated columns over relational data models. Use DAX when your dataset exceeds Excel\'s row limit, when you need relationships between multiple tables, or when you require time intelligence functions like TOTALYTD or SAMEPERIODLASTYEAR.',
    icon: '🧮',
  },
  {
    cat: 'SQL',
    q: 'What are window functions and when do you use them?',
    a: 'Window functions (OVER clause) perform calculations across a set of rows related to the current row without collapsing them into groups. Use them for running totals, moving averages, rankings within categories (RANK, DENSE_RANK), and row-over-row comparisons (LAG/LEAD) — scenarios where GROUP BY would lose row-level detail.',
    icon: '🪟',
  },
  {
    cat: 'Excel',
    q: 'How do you handle large datasets in Excel efficiently?',
    a: 'Use structured Tables (Ctrl+T) instead of plain ranges for dynamic references, load data via Power Query to avoid holding millions of rows in the grid, use Power Pivot\'s columnar store for aggregations, avoid volatile functions like OFFSET and INDIRECT in large models, and turn off automatic calculation during bulk operations.',
    icon: '🚀',
  },
];
