"use client";

import { useEditorStore } from "@/store/useEditorStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SalesChart from "./charts/SalesChart";
import RecentOrders from "./tables/RecentOrders";

export default function DashboardPreview() {
  const { config } = useEditorStore();

  return (
    <div
      className="grid gap-4 transition-all duration-300"
      style={{
        borderRadius: `${config.borderRadius}px`,
        // Burada CSS değişkeni ile tema rengini dinamik yönetebiliriz
      }}
    >
      {/* Üst Kartlar (Metrics) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} style={{ borderRadius: `${config.borderRadius}px` }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Metric {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,231.00</div>
              <p className="text-xs text-muted-foreground">+20.1% geçen aydan</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Grafik Alanı */}
      {config.showSalesChart && (
        <Card className="p-6" style={{ borderRadius: `${config.borderRadius}px` }}>
          <CardHeader className="px-0 pt-0">
            <CardTitle>Aylık Gelir Analizi</CardTitle>
          </CardHeader>
          <SalesChart />
        </Card>
      )}
      
      {config.showRecentOrders && (
        <Card style={{ borderRadius: `${config.borderRadius}px` }}>
          <CardHeader>
            <CardTitle>Son Siparişler</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrders />
          </CardContent>
        </Card>
      )}
    </div>
  );
}