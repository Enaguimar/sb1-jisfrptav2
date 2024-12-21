import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Photo } from '@/types';
import { PhotoEditor } from './PhotoEditor';

interface PhotoGridProps {
  photos: Photo[];
  editingPhotoId: string | null;
  editForm: { title: string; category: string };
  onEdit: (photo: Photo) => void;
  onDelete: (photoId: string) => void;
  onSave: (photoId: string) => void;
  onCancel: () => void;
  onEditFormChange: (field: 'title' | 'category', value: string) => void;
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({
  photos,
  editingPhotoId,
  editForm,
  onEdit,
  onDelete,
  onSave,
  onCancel,
  onEditFormChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <div key={photo.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            {editingPhotoId === photo.id ? (
              <PhotoEditor
                title={editForm.title}
                category={editForm.category}
                onSave={() => onSave(photo.id)}
                onCancel={onCancel}
                onChange={onEditFormChange}
              />
            ) : (
              <>
                <h3 className="font-semibold mb-2">{photo.title}</h3>
                <p className="text-sm text-gray-600">Categoría: {photo.category}</p>
                <p className="text-sm text-gray-600">Fecha: {photo.date}</p>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => onEdit(photo)}
                    className="flex items-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <Edit2 className="h-4 w-4 mr-1" />
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(photo.id)}
                    className="flex items-center px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Eliminar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};