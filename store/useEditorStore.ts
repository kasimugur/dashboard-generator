import { create } from 'zustand';

export type TemplateType = 'ecommerce' | 'analytics' | 'crypto';
interface DashboardConfig {
  activeTemplate: TemplateType;
  sidebarPosition: 'left' | 'right' | 'top';
  themeColor: string;
  isDarkMode: boolean;
  showSalesChart: boolean;
  showRecentOrders: boolean;
  borderRadius: number;
}


export const templatePresets: Record<TemplateType, Partial<DashboardConfig>> = {
  ecommerce: {
    themeColor: '#3b82f6', 
    showSalesChart: true,
    showRecentOrders: true,
    borderRadius: 8,
  },
  analytics: {
    themeColor: '#10b981', 
    showSalesChart: true,
    showRecentOrders: false, 
    borderRadius: 16, 
  },
  crypto: {
    themeColor: '#f59e0b', 
    showSalesChart: true,
    showRecentOrders: true,
    borderRadius: 4, 
  }
};

interface EditorState {
  config: DashboardConfig;
  
  setConfig: (newConfig: Partial<DashboardConfig>) => void;
  
  applyTemplate: (template: TemplateType) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  config: {
    activeTemplate: 'ecommerce',
    sidebarPosition: 'left',
    themeColor: '#3b82f6',
    isDarkMode: false,
    showSalesChart: true,
    showRecentOrders: true,
    borderRadius: 8,
  },
  setConfig: (newConfig) => 
    set((state) => ({
      config: { ...state.config, ...newConfig }
    })),
  
  applyTemplate: (template) => 
    set((state) => ({
      config: { ...state.config, ...templatePresets[template], activeTemplate: template }
    })),
}));