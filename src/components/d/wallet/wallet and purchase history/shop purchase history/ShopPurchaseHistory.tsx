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

type ShopPurchaseHistoryItemProps = {
  id: string;
  productName: string;
  amount: number;
  paymentMethod: string;
  status: string;
  createdAt: Date;
};

const ShopPurchaseHistory: React.FC = () => {
  // Badge وضعیت‌ها
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "انجام شده":
        return <Badge className="bg-green-600">{status}</Badge>;
      case "درحال انجام":
        return <Badge className="bg-blue-600">{status}</Badge>;
      case "معلق":
        return <Badge className="bg-yellow-600">{status}</Badge>;
      case "لغو شده":
        return <Badge className="bg-red-600">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  // ✅ ستون‌های جدول هماهنگ با تایپ بالا
  const columns = useMemo<ColumnDef<ShopPurchaseHistoryItemProps>[]>(
    () => [
      {
        accessorKey: "id",
        header: "شناسه",
      },
      {
        accessorKey: "productName",
        header: "نام محصول",
      },
      createSortableColumn<ShopPurchaseHistoryItemProps>(
        "amount",
        "مبلغ",
        (value) => `${(value as number).toLocaleString()} تومان`
      ),
      {
        accessorKey: "status",
        header: "وضعیت",
        cell: (info) => (
          <div className="flex items-center gap-2">
            {getStatusBadge(info.getValue() as string)}
          </div>
        ),
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
            </PopoverContent>
          </Popover>
        ),
      },
    ],
    []
  );

  // ✅ داده‌ی نمونه برای تست
  const subscriptions: ShopPurchaseHistoryItemProps[] = [
    {
      id: "sd421fvc",
      productName: "ماشین Maserati Quattroporte 2019",
      amount: 1200000,
      paymentMethod: "کیف پول",
      status: "معلق",
      createdAt: new Date("2025-10-01T12:00:00"),
    },
    {
      id: "rb761qtc",
      productName: "ماشین Tesla Model S Plaid 2021",
      amount: 500000,
      paymentMethod: "کیف پول",
      status: "درحال انجام",
      createdAt: new Date("2025-09-15T10:30:00"),
    },
    {
      id: "1a454fec",
      productName: "ماشین SL 63 AMG 2024",
      amount: 850000,
      paymentMethod: "کیف پول",
      status: "انجام شده",
      createdAt: new Date("2025-09-25T09:15:00"),
    },
    {
      id: "4a424vsc",
      productName: "ماشین 992 GT3 RS 2024",
      amount: 950000,
      paymentMethod: "کیف پول",
      status: "لغو شده",
      createdAt: new Date("2025-09-25T09:15:00"),
    },
  ];

  return (
    <div className="grid grid-cols-12 overflow-x-auto">
      <div className="col-span-12 overflow-x-auto">
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
                { label: "انجام شده", value: "انجام شده" },
                { label: "درحال انجام", value: "درحال انجام" },
                { label: "معلق", value: "معلق" },
                { label: "لغو شده", value: "لغو شده" },
              ],
            },
          ]}
          defaultPageSize={10}
          pageSizeOptions={[10, 20, 50, 100]}
          showPagination={true}
          showRowCount={true}
          dir="rtl"
        />
      </div>
    </div>
  );
};

export default ShopPurchaseHistory;
