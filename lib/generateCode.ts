
export const generateCode = (config: any) => {
  return `
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

/* NexusDash Generated Component
  Template: ${config.activeTemplate}
  Primary Color: ${config.themeColor}
*/

export default function GeneratedDashboard() {
  return (
    <div className="p-8 space-y-6 bg-background min-h-screen text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Metric Cards */}
        <Card style={{ borderRadius: '${config.borderRadius}px' }}>
          <CardHeader>
            <CardTitle className="text-sm">Performans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '${config.themeColor}' }}>
              $45,231
            </div>
          </CardContent>
        </Card>
      </div>

      ${config.showSalesChart ? `
      <Card className="p-6" style={{ borderRadius: '${config.borderRadius}px' }}>
         {/* Grafik buraya gelecek - Konfigüre edilmiş renk: ${config.themeColor} */}
         <div className="h-[300px] flex items-center justify-center bg-muted">
            Grafik Alanı (Recharts entegre edilebilir)
         </div>
      </Card>` : ''}
    </div>
  );
}
`.trim();
};