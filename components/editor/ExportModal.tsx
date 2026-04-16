"use client";

import { useState } from "react";
import { useEditorStore } from "@/store/useEditorStore";
import { generateCode } from "@/lib/generateCode";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy, Code2 } from "lucide-react";

export default function ExportModal() {
  const { config } = useEditorStore();
  const [copied, setCopied] = useState(false);

  const code = generateCode(config);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full gap-2" variant="secondary">
          <Code2 className="h-4 w-4" /> Kodu Dışa Aktar
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Next.js + Tailwind Kodun Hazır!</DialogTitle>
        </DialogHeader>
        <div className="relative mt-4">
          <pre className="p-4 bg-zinc-950 text-zinc-50 rounded-lg overflow-auto text-sm font-mono max-h-[50vh]">
            <code>{code}</code>
          </pre>
          <Button
            size="sm"
            className="absolute top-2 right-2 gap-2"
            onClick={copyToClipboard}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Kopyalandı" : "Kopyala"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}