import { create } from 'zustand';

interface EditorState {
  image: string | null;
  setImage: (image: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  image: null,
  setImage: (image) => set({ image }),
}));
