"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEditorStore } from "@/store/useEditorStore";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { BarChart3, ShoppingCart, Bitcoin } from "lucide-react"; // İkonlar için
import { Button } from "@/components/ui/button";
import ExportModal from "./ExportModal";

export default function EditorSidebar() {
  const { config, setConfig } = useEditorStore();
  const { theme, setTheme } = useTheme();

  const COLORS = [
    { name: "Mavi", value: "#3b82f6" },
    { name: "Mor", value: "#8b5cf6" },
    { name: "Yeşil", value: "#10b981" },
    { name: "Turuncu", value: "#f59e0b" },
    { name: "Kırmızı", value: "#ef4444" },
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">Arayüz Modu</h2>
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div className="flex items-center gap-2">
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <Label>Karanlık Tema</Label>
          </div>
          <Switch 
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
      </div>
        <Separator  />
      <div>
        <h2 className="text-lg font-semibold mb-4">Şablonlar</h2>
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant={config.activeTemplate === 'ecommerce' ? "default" : "outline"}
            className="flex flex-col items-center h-auto py-4"
            onClick={() => useEditorStore.getState().applyTemplate('ecommerce')}
          >
            <ShoppingCart className="h-5 w-5 mb-2" />
            <span className="text-xs">E-Ticaret</span>
          </Button>

          <Button
            variant={config.activeTemplate === 'analytics' ? "default" : "outline"}
            className="flex flex-col items-center h-auto py-4"
            onClick={() => useEditorStore.getState().applyTemplate('analytics')}
          >
            <BarChart3 className="h-5 w-5 mb-2" />
            <span className="text-xs">Analitik</span>
          </Button>

          <Button
            variant={config.activeTemplate === 'crypto' ? "default" : "outline"}
            className="flex flex-col items-center h-auto py-4"
            onClick={() => useEditorStore.getState().applyTemplate('crypto')}
          >
            <Bitcoin className="h-5 w-5 mb-2" />
            <span className="text-xs">Kripto</span>
          </Button>
        </div>
      </div>

      <Separator className="my-6" />
      <div>
        <h2 className="text-lg font-semibold mb-4">Düzen Ayarları</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="sales-chart">Satış Grafiği</Label>
            <Switch
              id="sales-chart"
              checked={config.showSalesChart}
              onCheckedChange={(val) => setConfig({ showSalesChart: val })}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="recent-orders">Son Siparişler Tablosu</Label>
            <Switch
              id="recent-orders"
              checked={config.showRecentOrders}
              onCheckedChange={(val) => setConfig({ showRecentOrders: val })}
            />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-lg font-semibold mb-4">Görünüm</h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>Köşe Yumuşatma ({config.borderRadius}px)</Label>
            <Slider
              value={[config.borderRadius]}
              max={24}
              step={2}
              onValueChange={(val) => setConfig({ borderRadius: val[0] })}
            />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-lg font-semibold mb-4">Tema Rengi</h2>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color) => (
            <button
              key={color.value}
              className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${config.themeColor === color.value ? "border-black scale-110" : "border-transparent"
                }`}
              style={{ backgroundColor: color.value }}
              onClick={() => setConfig({ themeColor: color.value })}
            />
          ))}
        </div>
      </div>


      <Separator className="my-6" />
      <div className="space-y-4">
        <ExportModal />
        <p className="text-[10px] text-muted-foreground text-center">
          Tasarladığın yapıyı direkt projene kopyalayabilirsin.
        </p>
      </div>


    </div>
  );
}