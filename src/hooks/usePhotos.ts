import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Photo } from '@/types';

export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/photos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPhotos(data);
        setError(null);
      } else if (response.status === 401) {
        navigate('/admin/login');
      } else {
        throw new Error('Error al cargar las fotos');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const uploadPhoto = async (file: File) => {
    const formData = new FormData();
    formData.append('photo', file);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/photos/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        await fetchPhotos();
      } else {
        throw new Error('Error al subir la foto');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      throw err;
    }
  };

  const deletePhoto = async (photoId: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta foto?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/photos/${photoId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        await fetchPhotos();
      } else {
        throw new Error('Error al eliminar la foto');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  const updatePhoto = async (photoId: string, data: { title: string; category: string }) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/photos/${photoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        await fetchPhotos();
      } else {
        throw new Error('Error al actualizar la foto');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      throw err;
    }
  };

  return {
    photos,
    loading,
    error,
    uploadPhoto,
    deletePhoto,
    updatePhoto,
  };
};