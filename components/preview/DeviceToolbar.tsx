"use client";

import { useEditorStore, ViewMode } from "@/store/useEditorStore";
import { Button } from "@/components/ui/button";
import { Monitor, Tablet, Smartphone } from "lucide-react";

export default function DeviceToolbar() {
  const { config, setConfig } = useEditorStore();

  const devices: { mode: ViewMode; icon: any; label: string }[] = [
    { mode: 'desktop', icon: Monitor, label: "Masaüstü" },
    { mode: 'tablet', icon: Tablet, label: "Tablet" },
    { mode: 'mobile', icon: Smartphone, label: "Mobil" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 mb-6 bg-muted/50 p-1 rounded-lg w-fit mx-auto border">
      {devices.map((device) => {
        const Icon = device.icon;
        return (
          <Button
            key={device.mode}
            variant={config.viewMode === device.mode ? "default" : "ghost"}
            size="sm"
            onClick={() => setConfig({ viewMode: device.mode })}
            className="gap-2"
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline text-xs">{device.label}</span>
          </Button>
        );
      })}
    </div>
  );
}