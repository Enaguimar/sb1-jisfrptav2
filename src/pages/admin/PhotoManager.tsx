import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoUploader } from '@/components/admin/photos/PhotoUploader';
import { PhotoGrid } from '@/components/admin/photos/PhotoGrid';
import { Pagination } from '@/components/admin/photos/Pagination';
import { Photo } from '@/types';

const ITEMS_PER_PAGE = 6;

const PhotoManager = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingPhotoId, setEditingPhotoId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    category: ''
  });

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      const response = await fetch('/api/photos', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Error al cargar las fotos');
      }

      const data = await response.json();
      setPhotos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('photo', file);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/photos/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Error al subir la foto');
      }

      await fetchPhotos();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  const handleDelete = async (photoId: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta foto?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/photos/${photoId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Error al eliminar la foto');
      }

      await fetchPhotos();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  const handleEdit = (photo: Photo) => {
    setEditingPhotoId(photo.id);
    setEditForm({
      title: photo.title,
      category: photo.category
    });
  };

  const handleSave = async (photoId: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/photos/${photoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editForm)
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la foto');
      }

      await fetchPhotos();
      setEditingPhotoId(null);
      setEditForm({ title: '', category: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  if (loading) return <div className="text-center py-8">Cargando...</div>;
  if (error) return <div className="text-center text-red-600 py-8">{error}</div>;

  const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);
  const paginatedPhotos = photos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gestión de Fotografías</h1>

      <div className="mb-8">
        <PhotoUploader onUpload={handleUpload} />
      </div>

      <PhotoGrid
        photos={paginatedPhotos}
        editingPhotoId={editingPhotoId}
        editForm={editForm}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSave={handleSave}
        onCancel={() => {
          setEditingPhotoId(null);
          setEditForm({ title: '', category: '' });
        }}
        onEditFormChange={(field, value) => 
          setEditForm(prev => ({ ...prev, [field]: value }))
        }
      />

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoManager;