import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Check, Ellipsis, Eye, History } from "lucide-react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  // Calculate pagination values
  const totalPages = Math.ceil(subscriptions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSubscriptions = subscriptions.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="col-span-12 order-3 bg-inside-box-bg-color/90  rounded-lg p-4 mt-4">
      <div className="pb-4">
        <p className="flex gap-2 font-medium">
          <History size={22} strokeWidth={1.5} /> سوابق خرید اشتراک
        </p>
      </div>
      <div className="w-full  min-h-[400px]">
        <Table className="!min-w-[800px]" dir="rtl">
          <TableHeader>
            <TableRow className="border-b border-main-text-color/40 hover:bg-transparent opacity-70">
              <TableHead className="w-[100px] pb-4 font-light">شناسه</TableHead>
              <TableHead className="pb-4 font-light">نوع اشتراک</TableHead>
              <TableHead className="pb-4 font-light">تاریخ شروع</TableHead>
              <TableHead className="pb-4 font-light">تاریخ پایان</TableHead>
              <TableHead className="pb-4 font-light">وضعیت</TableHead>
              <TableHead className="pb-4 font-light">مبلغ</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="space-y-2">
            {currentSubscriptions.map((subscription) => (
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
      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default SubscriptionHistory;
