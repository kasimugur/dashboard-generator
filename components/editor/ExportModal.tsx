"use client";

import { useState } from "react";
import { useEditorStore } from "@/store/useEditorStore";
import { generateCode } from "@/lib/generateCode";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy, Code2, Terminal } from "lucide-react";

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
          <Code2 className="h-4 w-4" /> Export Code
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Code Ready to Ship!</DialogTitle>
          <div className="text-sm text-muted-foreground mt-4 space-y-3 bg-secondary/30 p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <Terminal className="h-4 w-4" />
              <span>Quick Integration Guide</span>
            </div>
            <ul className="list-disc list-inside space-y-1 ml-1 text-[13px]">
              <li>Create a new file (e.g., <code className="bg-muted px-1 rounded text-pink-500 font-mono">Dashboard.tsx</code>).</li>
              <li>Paste the generated code below into your file.</li>
              <li>Install dependencies via Shadcn CLI:</li>
            </ul>

            <div className="relative group">
              <code className="block p-3 bg-zinc-950 text-zinc-300 rounded-md text-[11px] font-mono border border-zinc-800 break-all">
                npx shadcn@latest add card table badge separator
              </code>
            </div>
          </div>
        </DialogHeader>

        {/* Code Preview Area */}
        <div className="relative mt-4 flex-1 min-h-0 w-full group">
          <pre className="h-full max-h-[45vh] p-4 bg-zinc-950 text-zinc-50 rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap break-all border border-zinc-800">
            <code>{code}</code>
          </pre>
          <Button
            size="sm"
            className="absolute top-3 right-3 gap-2 shadow-lg transition-all active:scale-95"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" /> Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copy Code
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}