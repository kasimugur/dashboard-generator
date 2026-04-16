"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const orders = [
  { id: "ORD-5021", customer: "Ahmet Yılmaz", amount: "$250.00", status: "Completed", date: "Today" },
  { id: "ORD-5022", customer: "Ayşe Demir", amount: "$120.50", status: "Pending", date: "Today" },
  { id: "ORD-5023", customer: "Mehmet Kaya", amount: "$850.00", status: "Cancelled", date: "Yesterday" },
  { id: "ORD-5024", customer: "Elif Şahin", amount: "$45.00", status: "Completed", date: "Yesterday" },
  { id: "ORD-5025", customer: "Can Yıldız", amount: "$320.00", status: "Completed", date: "12th Apr" },
];

export default function RecentOrders() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    order.status === "Completed" ? "default" :
                    order.status === "Cancelled" ? "destructive" : "secondary"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-right font-medium">{order.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}