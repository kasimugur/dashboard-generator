import { TemplateType } from "@/store/useEditorStore";

export const generateCode = (config: any) => {
  const getIconImports = () => {
    switch (config.activeTemplate) {
      case 'crypto': return 'Bitcoin, Activity, DollarSign, ArrowUpRight';
      case 'analytics': return 'Users, MousePointerClick, Activity, ArrowUpRight';
      default: return 'DollarSign, Users, CreditCard, ArrowUpRight';
    }
  };

  const getMetricsCode = () => {
    const metrics = {
      crypto: [
        { title: "Bitcoin (BTC)", value: "$64,230", icon: "Bitcoin" },
        { title: "Ethereum (ETH)", value: "$3,410", icon: "Activity" },
        { title: "Portföy Değeri", value: "$124,500", icon: "DollarSign" }
      ],
      analytics: [
        { title: "Tekil Ziyaretçi", value: "45,231", icon: "Users" },
        { title: "Hemen Çıkma Oranı", value: "%42.3", icon: "MousePointerClick" },
        { title: "Aktif Oturumlar", value: "1,204", icon: "Activity" }
      ],
      ecommerce: [
        { title: "Toplam Ciro", value: "$45,231.89", icon: "DollarSign" },
        { title: "Yeni Müşteriler", value: "+2350", icon: "Users" },
        { title: "Başarılı Satışlar", value: "+12,234", icon: "CreditCard" }
      ]
    }[config.activeTemplate as TemplateType] || [];

    return metrics.map(m => `
        <Card style={{ borderRadius: '${config.borderRadius}px' }}>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">${m.title}</CardTitle>
            <${m.icon} className="h-4 w-4" style={{ color: '${config.themeColor}' }} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${m.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-emerald-500 font-medium inline-flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3" /> +12%
              </span>
               geçen aya göre
            </p>
          </CardContent>
        </Card>`).join('');
  };

  return `
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ${getIconImports()} } from "lucide-react";

/**
 * NexusDash Generated Component
 * Template: ${config.activeTemplate}
 * Primary Color: ${config.themeColor}
 */
export default function GeneratedDashboard() {
  return (
    <div className="p-8 space-y-6 bg-background min-h-screen text-foreground">
      
      {/* 1. Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${getMetricsCode()}
      </div>

    {/* 2. Chart Section */}
      ${config.showSalesChart ? `
      <Card className="p-6" style={{ borderRadius: '${config.borderRadius}px' }}>
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-base font-semibold">
            ${config.activeTemplate === 'crypto' ? 'Market Performance' : 'Growth Analysis'}
          </CardTitle>
        </CardHeader>
        
        {/* Visual Placeholder for Chart */}
        <div className="h-[300px] w-full mt-4 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted bg-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 flex items-end justify-around px-4 pb-8 opacity-20">
            {/* Minimalist bar chart lines to represent a chart */}
            <div className="w-8 bg-[${config.themeColor}] rounded-t" style={{ height: '40%' }}></div>
            <div className="w-8 bg-[${config.themeColor}] rounded-t" style={{ height: '70%' }}></div>
            <div className="w-8 bg-[${config.themeColor}] rounded-t" style={{ height: '50%' }}></div>
            <div className="w-8 bg-[${config.themeColor}] rounded-t" style={{ height: '90%' }}></div>
            <div className="w-8 bg-[${config.themeColor}] rounded-t" style={{ height: '60%' }}></div>
          </div>
          <div className="z-10 text-center">
            <p className="text-sm font-medium text-muted-foreground">Chart Component Placeholder</p>
            <p className="text-[11px] text-muted-foreground/70">Connect Recharts or Chart.js here</p>
          </div>
        </div>
      </Card>` : ''}

      {/* 3. Table Section */}
      ${config.showRecentOrders && config.activeTemplate !== 'analytics' ? `
      <Card style={{ borderRadius: '${config.borderRadius}px' }}>
        <CardHeader>
          <CardTitle>${config.activeTemplate === 'crypto' ? 'Son İşlemler' : 'Son Siparişler'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Müşteri</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead className="text-right">Tutar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">#5021</TableCell>
                <TableCell>Ahmet Yılmaz</TableCell>
                <TableCell><Badge className="bg-[${config.themeColor}]">Tamamlandı</Badge></TableCell>
                <TableCell className="text-right font-medium">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>` : ''}
      
    </div>
  );
}
`.trim();
};