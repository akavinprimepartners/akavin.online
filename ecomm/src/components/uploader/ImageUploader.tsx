'use client';

import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

export default function ImageUploader() {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      toast.success('Image uploaded successfully');
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border border-dashed border-slate-600 rounded-2xl p-20 text-center cursor-pointer"
    >
      <input {...getInputProps()} />

      <p>Drag & drop room image here</p>
    </div>
  );
}
