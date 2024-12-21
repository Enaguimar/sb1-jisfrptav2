import React from 'react';
import { Save, X } from 'lucide-react';

interface PhotoEditorProps {
  title: string;
  category: string;
  onSave: () => void;
  onCancel: () => void;
  onChange: (field: 'title' | 'category', value: string) => void;
}

export const PhotoEditor: React.FC<PhotoEditorProps> = ({
  title,
  category,
  onSave,
  onCancel,
  onChange,
}) => {
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={title}
        onChange={(e) => onChange('title', e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Título"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => onChange('category', e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Categoría"
      />
      <div className="flex space-x-2">
        <button
          onClick={onSave}
          className="flex items-center px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <Save className="h-4 w-4 mr-1" />
          Guardar
        </button>
        <button
          onClick={onCancel}
          className="flex items-center px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          <X className="h-4 w-4 mr-1" />
          Cancelar
        </button>
      </div>
    </div>
  );
};