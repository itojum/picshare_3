/**
 * 画像を圧縮する
 * マウスパッド用途を想定し、適切なサイズに圧縮します
 * 
 * @param file 元の画像ファイル
 * @returns 圧縮されたBlobオブジェクト
 */
export async function compressImage(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        // マウスパッド用途を想定した最大サイズ設定
        const MAX_WIDTH = 3000;
        const MAX_HEIGHT = 3000;
        const QUALITY = 0.82; // JPEG品質82%

        let width = img.width;
        let height = img.height;

        // アスペクト比を保ちながらサイズ調整
        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
          const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
          width = Math.floor(width * ratio);
          height = Math.floor(height * ratio);
        }

        // Canvasに描画して圧縮
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context not available'));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        // JPEG形式で圧縮（PNGよりファイルサイズが小さい）
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to compress image'));
            }
          },
          'image/jpeg',
          QUALITY
        );
      };

      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsDataURL(file);
  });
}
