"use client";

import { useEditorStore } from "@/store/useEditorStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, Users, Bitcoin, ArrowUpRight, MousePointerClick } from "lucide-react";
import SalesChart from "./charts/SalesChart";
import RecentOrders from "./tables/RecentOrders";
import DeviceToolbar from "./DeviceToolbar";

export default function DashboardPreview() {
  const { config } = useEditorStore();


  const getMetricsData = () => {
    switch (config.activeTemplate) {
      case "crypto":
        return [
          { title: "Bitcoin (BTC)", value: "$64,230", trend: "+5.2%", icon: Bitcoin },
          { title: "Ethereum (ETH)", value: "$3,410", trend: "+2.1%", icon: Activity },
          { title: "Portföy Değeri", value: "$124,500", trend: "+12.4%", icon: DollarSign },
        ];
      case "analytics":
        return [
          { title: "Tekil Ziyaretçi", value: "45,231", trend: "+14.5%", icon: Users },
          { title: "Hemen Çıkma Oranı", value: "%42.3", trend: "-2.1%", icon: MousePointerClick },
          { title: "Aktif Oturumlar", value: "1,204", trend: "+8.2%", icon: Activity },
        ];
      case "ecommerce":
      default:
        return [
          { title: "Toplam Ciro", value: "$45,231.89", trend: "+20.1%", icon: DollarSign },
          { title: "Yeni Müşteriler", value: "+2350", trend: "+180.1%", icon: Users },
          { title: "Başarılı Satışlar", value: "+12,234", trend: "+19%", icon: CreditCard },
        ];
    }
  };

  const getWidth = () => {
    switch (config.viewMode) {
      case "mobile": return "max-w-[375px]";
      case "tablet": return "max-w-[768px]";
      default: return "max-w-full";
    }
  };
  const metrics = getMetricsData();

  return (
    <div className="flex flex-col items-center w-full">
      <DeviceToolbar />
      <div
        className={`${getWidth()} w-full bg-background shadow-2xl transition-all duration-500 border overflow-hidden`}
        style={{ borderRadius: `${config.borderRadius}px` }}
      >
        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          {/* <div className="grid gap-4 transition-all duration-500" style={{ borderRadius: `${config.borderRadius}px` }} */}
          {/* 1. DİNAMİK METRİK KARTLARI */}
          <div className="grid grid-cols-1 sm:grid-cols-3 + gap-4">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <Card key={i} style={{ borderRadius: `${config.borderRadius}px` }} className="transition-colors duration-300">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" style={{ color: config.themeColor }} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-medium flex items-center gap-1">
                        <ArrowUpRight className="h-3 w-3" /> {metric.trend}
                      </span>
                      geçen aya göre
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* 2. DİNAMİK GRAFİK ALANI */}
          {config.showSalesChart && (
            <Card className="p-6" style={{ borderRadius: `${config.borderRadius}px` }}>
              <CardHeader className="px-0 pt-0">
                <CardTitle>
                  {config.activeTemplate === "crypto" ? "Portföy Performansı" :
                    config.activeTemplate === "analytics" ? "Trafik Analizi" : "Aylık Gelir Analizi"}
                </CardTitle>
              </CardHeader>
              <SalesChart />
            </Card>
          )}

          {/* 3. DİNAMİK TABLO ALANI */}
          {/* Analitik şablonunda tabloyu gizliyoruz, diğerlerinde gösteriyoruz */}
          {config.showRecentOrders && config.activeTemplate !== "analytics" && (
            <Card style={{ borderRadius: `${config.borderRadius}px` }}>
              <CardHeader>
                <CardTitle>
                  {config.activeTemplate === "crypto" ? "Son İşlemler (Transferler)" : "Son Siparişler"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RecentOrders />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}