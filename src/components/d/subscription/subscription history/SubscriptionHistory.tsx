import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import {
  Check,
  CheckCircle,
  Clock,
  Ellipsis,
  Eye,
  History,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const subscriptions = [
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
];

const  SubscriptionHistory: React.FC = () => {
  const getStatusIcon = (status: string) => {
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

  return (
    <div className="bg-inside-box-bg-color/90 !overflow-x-scroll rounded-lg p-4 mt-4">
      <div className="pb-4">
        <p className="flex gap-2 font-medium">
          <History size={22} strokeWidth={1.5} /> سوابق خرید اشتراک
        </p>
      </div>
      <div className="!min-w-[500px] w-full border border-red-500">
        <Table dir="rtl">
          <TableHeader>
            <TableRow className="border-b border-main-text-color/40 hover:bg-transparent">
              <TableHead className="w-[100px] text-right pb-4">شناسه</TableHead>
              <TableHead className="text-right pb-4">نوع اشتراک</TableHead>
              <TableHead className="text-right pb-4">تاریخ شروع</TableHead>
              <TableHead className="text-right pb-4">تاریخ پایان</TableHead>
              <TableHead className="text-right pb-4">وضعیت</TableHead>
              <TableHead className="text-right pb-4">مبلغ</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="space-y-2">
            {subscriptions.map((subscription) => (
              <TableRow
                key={subscription.id}
                className="hover:bg-input-color/50 border-b border-main-text-color/10 rounded-lg"
              >
                <TableCell className="text-right py-4">
                  {subscription.id}
                </TableCell>
                <TableCell className="text-right py-4 font-normal">
                  {subscription.type}
                </TableCell>
                <TableCell className="text-right py-4">
                  {subscription.startDate}
                </TableCell>
                <TableCell className="text-right py-4">
                  {subscription.endDate}
                </TableCell>
                <TableCell className="flex items-center gap-2 py-4">
                  {getStatusIcon(subscription.status)}
                </TableCell>
                <TableCell className="text-right py-4">
                  {subscription.amount}
                </TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger>
                      <button className="cursor-pointer p-2 rounded-sm hover:bg-input-color/50 transition-transform duration-200 ease-in-out">
                        <Ellipsis size={20} strokeWidth={1.5} />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 overflow-hidden w-[150px] border border-main-text-color/10">
                      <button className="p-2 flex gap-2 cursor-pointer w-full items-center hover:bg-input-color/50 transition-transform duration-200 ease-in-out">
                        <Eye size={20} strokeWidth={1.5} />
                        جزئیات
                      </button>
                      {subscription.status === "رزرو" && (
                        <button className="p-2 flex gap-2 cursor-pointer w-full items-center hover:bg-input-color/50 transition-transform duration-200 ease-in-out">
                          <Check size={20} strokeWidth={1.5} />
                          فعالسازی
                        </button>
                      )}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SubscriptionHistory;
