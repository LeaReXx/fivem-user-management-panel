"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Input from "./Input";

// تایپ برای تنظیمات جدول
export interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  // قابلیت‌های اختیاری
  searchable?: boolean;
  searchPlaceholder?: string;
  filterable?: boolean;
  filters?: {
    columnKey: string;
    label: string;
    options: { label: string; value: string }[];
  }[];
  pageSizeOptions?: number[];
  defaultPageSize?: number;
  showPagination?: boolean;
  showRowCount?: boolean;
  className?: string;
  inputSize: "sm" | "md";
  dir?: "rtl" | "ltr";
  minWidth?: string;
}

export function DataTable<TData>({
  columns,
  data,
  searchable = true,
  searchPlaceholder = "جستجو...",
  filterable = false,
  filters = [],
  pageSizeOptions = [],
  defaultPageSize = 10,
  showPagination = true,
  showRowCount = true,
  className = "",
  inputSize = "md",
  dir = "rtl",
  minWidth = "800px",
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: defaultPageSize,
      },
    },
  });

  return (
    <div className={className}>
      {/* Filters Section */}
      {(searchable || filterable) && (
        <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Global Search */}
          {searchable && (
            <div className="relative">
              <Input
                icon="search"
                inputSize={inputSize}
                placeholder={searchPlaceholder}
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                extendClassName={dir === "rtl" ? "pr-10" : "pl-10"}
              />
            </div>
          )}

          {/* Custom Filters */}
          {filterable &&
            filters.map((filter) => {
              const filterValue = table
                .getColumn(filter.columnKey)
                ?.getFilterValue() as string;
              return (
                <Select
                  key={filter.columnKey}
                  value={filterValue ?? "all"}
                  onValueChange={(value) => {
                    table
                      .getColumn(filter.columnKey)
                      ?.setFilterValue(value === "all" ? undefined : value);
                  }}
                >
                  <SelectTrigger dir="rtl" size={inputSize}>
                    <SelectValue placeholder={filter.label} />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="all">همه {filter.label}</SelectItem>
                    {filter.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            })}
        </div>
      )}

      {/* Table */}
      <div className="w-full min-h-[400px]">
        <Table style={{ minWidth: minWidth }} dir={dir}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-main-text-color/40 hover:bg-transparent opacity-70"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="pb-4 font-light">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-input-color/50 border-b border-main-text-color/10 rounded-lg"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  نتیجه‌ای یافت نشد
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {showPagination && table.getPageCount() > 0 && (
        <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
          {/* Row Count */}
          {showRowCount && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-main-text-color/70">
                نمایش{" "}
                {table.getState().pagination.pageIndex *
                  table.getState().pagination.pageSize +
                  1}{" "}
                تا{" "}
                {Math.min(
                  (table.getState().pagination.pageIndex + 1) *
                    table.getState().pagination.pageSize,
                  table.getFilteredRowModel().rows.length,
                )}{" "}
                از {table.getFilteredRowModel().rows.length} نتیجه
              </span>
            </div>
          )}

          {/* Page Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="bg-main-text-color/10 hover:bg-main-text-color/20"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronRightIcon />
              قبلی
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: table.getPageCount() }, (_, i) => i).map(
                (pageIndex) => (
                  <Button
                    key={pageIndex}
                    variant={
                      table.getState().pagination.pageIndex === pageIndex
                        ? "default"
                        : "ghost"
                    }
                    size="sm"
                    onClick={() => table.setPageIndex(pageIndex)}
                    className="w-10"
                  >
                    {pageIndex + 1}
                  </Button>
                ),
              )}
            </div>

            <Button
              variant="ghost"
              className="bg-main-text-color/10 hover:bg-main-text-color/20"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              بعدی
              <ChevronLeftIcon />
            </Button>
          </div>

          {/* Page Size Selector */}
          {pageSizeOptions.length > 0 && (
            <Select
              value={table.getState().pagination.pageSize.toString()}
              onValueChange={(value) => table.setPageSize(Number(value))}
            >
              <SelectTrigger className="w-[130px]" size={inputSize} dir="rtl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl">
                {pageSizeOptions.map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size} ردیف
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      )}
    </div>
  );
}
// هلپر برای ساخت ستون‌های قابل مرتب‌سازی
export function createSortableColumn<TData>(
  accessorKey: string,
  header: string,
  formatter?: (value: any) => string,
): ColumnDef<TData> {
  return {
    accessorKey,
    header: ({ column }) => {
      return (
        <button
          className="flex items-center gap-2 hover:text-foreground/80"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {header}
          {column.getIsSorted() === "asc" ? (
            <ArrowUp size={16} />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown size={16} />
          ) : (
            <ArrowUpDown size={16} />
          )}
        </button>
      );
    },
    cell: (info) => {
      const value = info.getValue();
      const displayValue = formatter ? formatter(value) : String(value);
      return <div className="text-right">{displayValue}</div>;
    },
  };
}
