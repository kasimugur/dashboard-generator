"use client";

import { useEditorStore } from "@/store/useEditorStore";
import EditorSidebar from "@/components/editor/EditorSidebar";
import DashboardPreview from "@/components/preview/DashboardPreview";

export default function DashboardGenerator() {
  const { config } = useEditorStore();

  return (
    <main className="flex h-screen w-full overflow-hidden bg-background">
      {/* SOL/ORTA ALAN: Canlı Önizleme */}
      <section className="flex-1 overflow-y-auto p-4 lg:p-8">
        <div className="mx-auto max-w-6xl h-full">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="bg-gray-700 p-2 rounded-xl text-white ">Nd</h1>
            <h1 className="text-2xl font-bold tracking-tight">NexusDash</h1>
            </div>

            <div className="text-sm text-muted-foreground">
              Değişiklikleri sağ panelden yönetin
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <aside className="w-80 border-l bg-card shadow-xl overflow-y-auto">
        <EditorSidebar />
      </aside>
    </main>
  );
}