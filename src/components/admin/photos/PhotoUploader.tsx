import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface PhotoUploaderProps {
  onUpload: (file: File) => Promise<void>;
}

export const PhotoUploader: React.FC<PhotoUploaderProps> = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    try {
      setUploading(true);
      await onUpload(selectedFile);
      setSelectedFile(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Subir nueva foto</h2>
      <div className="flex items-center space-x-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="flex-1"
        />
        <button
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          <Upload className="h-5 w-5 mr-2" />
          {uploading ? 'Subiendo...' : 'Subir'}
        </button>
      </div>
    </div>
  );
};