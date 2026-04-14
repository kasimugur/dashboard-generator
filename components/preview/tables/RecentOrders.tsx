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

// Sahte (Mock) Veri Seti
const orders = [
  { id: "ORD-5021", customer: "Ahmet Yılmaz", amount: "$250.00", status: "Tamamlandı", date: "Bugün" },
  { id: "ORD-5022", customer: "Ayşe Demir", amount: "$120.50", status: "Beklemede", date: "Bugün" },
  { id: "ORD-5023", customer: "Mehmet Kaya", amount: "$850.00", status: "İptal", date: "Dün" },
  { id: "ORD-5024", customer: "Elif Şahin", amount: "$45.00", status: "Tamamlandı", date: "Dün" },
  { id: "ORD-5025", customer: "Can Yıldız", amount: "$320.00", status: "Tamamlandı", date: "12 Nis" },
];

export default function RecentOrders() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sipariş</TableHead>
            <TableHead>Müşteri</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Tarih</TableHead>
            <TableHead className="text-right">Tutar</TableHead>
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
                    order.status === "Tamamlandı" ? "default" :
                    order.status === "İptal" ? "destructive" : "secondary"
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