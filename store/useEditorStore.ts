import { create } from 'zustand';


interface DashboardConfig {
  sidebarPosition: 'left' | 'right' | 'top';
  themeColor: string;
  isDarkMode: boolean;
  showSalesChart: boolean;
  showRecentOrders: boolean;
  borderRadius: number;
}

interface EditorState {
  config: DashboardConfig;
  // Ayarları güncellemek için fonksiyon
  setConfig: (newConfig: Partial<DashboardConfig>) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  config: {
    sidebarPosition: 'left',
    themeColor: '#3b82f6', // Varsayılan mavi
    isDarkMode: false,
    showSalesChart: true,
    showRecentOrders: true,
    borderRadius: 8,
  },
  setConfig: (newConfig) => 
    set((state) => ({
      config: { ...state.config, ...newConfig }
    })),
}));