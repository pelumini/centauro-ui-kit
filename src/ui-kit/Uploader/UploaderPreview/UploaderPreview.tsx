import React from 'react';
import isNil from 'lodash/isNil';

interface IUploaderPreviewProps {
  files?: File[];
}

export const UploaderPreview: React.FC<IUploaderPreviewProps> = ({ files }) => {
  return (
    <div className="UploaderPreview">
      {!isNil(files)
        ? files.map((file, index) => <p key={index}>{file.name}</p>)
        : 'No files.'}
    </div>
  );
};
