import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CKEditor5({ value, onChange, placeholder, className }) {
  const config = {
    placeholder: placeholder || 'Start typing…',
    toolbar: [
      'heading', '|',
      'bold', 'italic', 'link',
      'bulletedList', 'numberedList', '|',
      'blockQuote', 'undo', 'redo'
    ],
  };

  return (
    <div className={className}>
      <CKEditor
        editor={ClassicEditor}
        data={value || ''}
        config={config}
        onChange={(_, editor) => onChange(editor.getData())}
      />
    </div>
  );
}