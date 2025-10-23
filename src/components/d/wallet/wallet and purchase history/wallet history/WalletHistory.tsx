"use client";
import React, { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CreditCard, Ellipsis, Eye } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { createSortableColumn, DataTable } from "@/components/ui/dataTable";

type WalletHistoryItemProps = {
  id: string;
  authority: string;
  amount: number;
  paymentMethod: string;
  status: string;
  createdAt: Date;
};

const WalletHistory: React.FC = () => {
  // Badge وضعیت‌ها
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "پرداخت شده":
        return <Badge className="bg-green-600">{status}</Badge>;
      case "در انتظار پرداخت":
        return <Badge className="bg-blue-600">{status}</Badge>;
      case "لغو شده":
        return <Badge className="bg-red-600">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  // ✅ ستون‌های جدول هماهنگ با تایپ بالا
  const columns = useMemo<ColumnDef<WalletHistoryItemProps>[]>(
    () => [
      {
        accessorKey: "authority",
        header: "شناسه",
        cell: (info) => <span>{info.getValue() as string}</span>,
      },
      {
        accessorKey: "paymentMethod",
        header: "روش پرداخت",
        cell: (info) => <span>{info.getValue() as string}</span>,
      },
      {
        accessorKey: "createdAt",
        header: "تاریخ تراکنش",
        cell: (info) => {
          const date = info.getValue() as Date;
          return (
            <span>
              {date.toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          );
        },
      },

      {
        accessorKey: "status",
        header: "وضعیت",
        cell: (info) => (
          <div className="flex items-center gap-2">
            {getStatusBadge(info.getValue() as string)}
          </div>
        ),
      },
      createSortableColumn<WalletHistoryItemProps>(
        "amount",
        "مبلغ",
        (value) => `${(value as number).toLocaleString()} تومان`
      ),
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <Popover>
            <PopoverTrigger asChild>
              <button className="cursor-pointer p-2 rounded-sm hover:bg-input-color/50 transition-transform duration-200 ease-in-out">
                <Ellipsis size={20} strokeWidth={1.5} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="p-0 overflow-hidden min-w-[150px] w-[unset] border border-main-text-color/10">
              <button className="p-2 flex gap-2 cursor-pointer w-full items-center hover:bg-input-color/50 transition-transform duration-200 ease-in-out">
                <Eye size={20} strokeWidth={1.5} />
                جزئیات
              </button>
              {row.original.status === "در انتظار پرداخت" && (
                <button className="p-2 flex gap-2 cursor-pointer w-full items-center hover:bg-input-color/50 transition-transform duration-200 ease-in-out">
                  <CreditCard size={20} strokeWidth={1.5} />
                  پرداخت
                </button>
              )}
            </PopoverContent>
          </Popover>
        ),
      },
    ],
    []
  );

  // ✅ داده‌ی نمونه برای تست
  const subscriptions: WalletHistoryItemProps[] = [
    {
      id: "1",
      authority: "sd421fvc",
      amount: 120000,
      paymentMethod: "درگاه بانکی",
      status: "پرداخت شده",
      createdAt: new Date("2025-10-01T12:00:00"),
    },
    {
      id: "2",
      authority: "rb761qtc",
      amount: 80000,
      paymentMethod: "درگاه بانکی",
      status: "در انتظار پرداخت",
      createdAt: new Date("2025-09-15T10:30:00"),
    },
    {
      id: "3",
      authority: "1a454fec",
      amount: 95000,
      paymentMethod: "درگاه بانکی",
      status: "لغو شده",
      createdAt: new Date("2025-09-25T09:15:00"),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={subscriptions}
      searchable={true}
      inputSize="sm"
      searchPlaceholder="جستجو در همه ستون‌ها..."
      filterable={true}
      filters={[
        {
          columnKey: "status",
          label: "وضعیت‌ها",
          options: [
            { label: "پرداخت شده", value: "پرداخت شده" },
            { label: "در انتظار پرداخت", value: "در انتظار پرداخت" },
            { label: "لغو شده", value: "لغو شده" },
          ],
        },
      ]}
      defaultPageSize={10}
      pageSizeOptions={[10, 20, 50, 100]}
      showPagination={true}
      showRowCount={true}
      dir="rtl"
      minWidth="800px"
    />
  );
};

export default WalletHistory;
