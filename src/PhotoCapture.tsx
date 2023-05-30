import { THE_ENTRY, db } from './db';
import { useLiveQuery } from 'dexie-react-hooks';

export const PhotoCapture = () => {
  const photoUrl = useLiveQuery(async () => {
    const record = await db.records.get(99);

    return record?.photoBlob ? URL.createObjectURL(record.photoBlob) : null;
  }, []);

  const handleSubmitCapture = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      files: FileList;
    };
    const file = target.files[0];

    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = async () => {
      // you can keep blob or save blob to another position
      const photoBlob = new Blob([fr.result as ArrayBuffer]);
      try {
        await db.records.update(THE_ENTRY, { photoBlob });
      } catch (err) {
        console.log(err);
      }
    };
  };

  return (
    <form>
      <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
        <label htmlFor="imageFile">Add a photo</label>

        <input
          type="file"
          id="imageFile"
          capture="environment"
          accept="image/*"
          onChangeCapture={handleSubmitCapture}
        />

        {photoUrl && (
          <img src={photoUrl} style={{ width: '100%', maxWidth: 600 }} />
        )}
      </div>
    </form>
  );
};
