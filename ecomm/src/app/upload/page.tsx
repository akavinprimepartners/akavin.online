import ImageUploader from '@/components/uploader/ImageUploader';

export default function UploadPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">
        Upload Room Image
      </h1>

      <ImageUploader />
    </main>
  );
}
