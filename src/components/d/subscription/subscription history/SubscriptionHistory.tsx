import React, { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, Ellipsis, Eye, History } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { createSortableColumn, DataTable } from "@/components/ui/dataTable";

// Type definition
type Subscription = {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  amount: string;
};

// Data
const subscriptions: Subscription[] = [
  {
    id: "XcA4Qt6",
    type: "پرمیوم",
    startDate: "1403/02/15",
    endDate: "1403/03/15",
    status: "رزرو",
    amount: "250,000 تومان",
  },
  {
    id: "Ab8D2fG",
    type: "استاندارد",
    startDate: "1403/01/10",
    endDate: "1403/02/10",
    status: "فعال",
    amount: "150,000 تومان",
  },
  {
    id: "Kd9Lm3N",
    type: "پایه",
    startDate: "1402/12/01",
    endDate: "1403/01/01",
    status: "منقضی شده",
    amount: "75,000 تومان",
  },
  {
    id: "Pq4Rt7S",
    type: "الیت",
    startDate: "1403/02/20",
    endDate: "1403/03/20",
    status: "منقضی شده",
    amount: "500,000 تومان",
  },
  {
    id: "Xy2Za5B",
    type: "پرمیوم",
    startDate: "1402/11/05",
    endDate: "1402/12/05",
    status: "منقضی شده",
    amount: "250,000 تومان",
  },
  {
    id: "Cd7Ef9G",
    type: "استاندارد",
    startDate: "1402/10/15",
    endDate: "1402/11/15",
    status: "منقضی شده",
    amount: "150,000 تومان",
  },
  {
    id: "Hi3Jk6L",
    type: "الیت",
    startDate: "1402/09/01",
    endDate: "1402/10/01",
    status: "منقضی شده",
    amount: "500,000 تومان",
  },
  {
    id: "Jk8Le3M",
    type: "پرمیوم",
    startDate: "1402/08/10",
    endDate: "1402/09/10",
    status: "منقضی شده",
    amount: "250,000 تومان",
  },
  {
    id: "Mn5Op2Q",
    type: "استاندارد",
    startDate: "1402/07/05",
    endDate: "1402/08/05",
    status: "منقضی شده",
    amount: "150,000 تومان",
  },
  {
    id: "Rs9Tu4V",
    type: "پایه",
    startDate: "1402/06/01",
    endDate: "1402/07/01",
    status: "منقضی شده",
    amount: "75,000 تومان",
  },
  {
    id: "Wx3Yz7A",
    type: "الیت",
    startDate: "1402/05/15",
    endDate: "1402/06/15",
    status: "منقضی شده",
    amount: "500,000 تومان",
  },
  {
    id: "Bc6De9F",
    type: "پرمیوم",
    startDate: "1402/04/20",
    endDate: "1402/05/20",
    status: "منقضی شده",
    amount: "250,000 تومان",
  },
];

const SubscriptionHistory: React.FC = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "فعال":
        return <Badge className="bg-green-600">{status}</Badge>;
      case "رزرو":
        return <Badge className="bg-yellow-600">{status}</Badge>;
      case "منقضی شده":
        return <Badge className="bg-red-600">{status}</Badge>;
      default:
        return null;
    }
  };

  const columns = useMemo<ColumnDef<Subscription>[]>(
    () => [
      // استفاده از helper برای ستون‌های ساده
      createSortableColumn<Subscription>("id", "شناسه"),
      createSortableColumn<Subscription>("type", "نوع اشتراک"),
      createSortableColumn<Subscription>("startDate", "تاریخ شروع"),
      createSortableColumn<Subscription>("endDate", "تاریخ پایان"),

      // ستون وضعیت با استایل سفارشی
      {
        accessorKey: "status",
        header: ({ column }) => {
          return (
            <button
              className="flex items-center gap-2 hover:text-foreground/80"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              وضعیت
            </button>
          );
        },
        cell: (info) => (
          <div className="flex items-center gap-2">
            {getStatusBadge(info.getValue() as string)}
          </div>
        ),
        filterFn: "equalsString",
      },

      // ستون مبلغ
      {
        accessorKey: "amount",
        header: "مبلغ",
        cell: (info) => (
          <div className="text-right">{info.getValue() as string}</div>
        ),
      },

      // ستون عملیات
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          return (
            <Popover>
              <PopoverTrigger asChild>
                <button className="cursor-pointer p-2 rounded-sm hover:bg-input-color/50 transition-transform duration-200 ease-in-out">
                  <Ellipsis size={20} strokeWidth={1.5} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="p-0 overflow-hidden w-[150px] border border-main-text-color/10">
                <button className="p-2 flex gap-2 cursor-pointer w-full items-center hover:bg-input-color/50 transition-transform duration-200 ease-in-out">
                  <Eye size={20} strokeWidth={1.5} />
                  جزئیات
                </button>
                {row.original.status === "رزرو" && (
                  <button className="p-2 flex gap-2 cursor-pointer w-full items-center hover:bg-input-color/50 transition-transform duration-200 ease-in-out">
                    <Check size={20} strokeWidth={1.5} />
                    فعالسازی
                  </button>
                )}
              </PopoverContent>
            </Popover>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="col-span-12 order-3 bg-inside-box-bg-color/90 rounded-lg p-4 mt-4">
      <div className="pb-4">
        <p className="flex gap-2 font-medium">
          <History size={22} strokeWidth={1.5} /> سوابق خرید اشتراک
        </p>
      </div>

      <DataTable
        columns={columns}
        data={subscriptions}
        searchable={true}
        inputSize="sm"
        searchPlaceholder="جستجو در همه ستون‌ها..."
        filterable={true}
        // filters={[
        //   {
        //     columnKey: "status",
        //     label: "وضعیت ها",
        //     options: [
        //       { label: "فعال", value: "فعال" },
        //       { label: "رزرو", value: "رزرو" },
        //       { label: "منقضی شده", value: "منقضی شده" },
        //     ],
        //   },
        //   {
        //     columnKey: "type",
        //     label: "اشتراک ها",
        //     options: [
        //       { label: "پایه", value: "پایه" },
        //       { label: "استاندارد", value: "استاندارد" },
        //       { label: "پرمیوم", value: "پرمیوم" },
        //       { label: "الیت", value: "الیت" },
        //     ],
        //   },
        // ]}
        defaultPageSize={10}
        showPagination={true}
        showRowCount={true}
        dir="rtl"
        minWidth="800px"
      />
    </div>
  );
};

export default SubscriptionHistory;
