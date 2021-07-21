import { uniqueId } from 'lodash';
import filesize from 'filesize';

export function getObjectOnUploaded(uploadedFiles) {
	// code
}

export function getObjectOnDropped(droppedFiles) {
	return droppedFiles.map(droppedFile => ({
		file: droppedFile,
		id: uniqueId(),
		name: droppedFile.name,
		readableSize: filesize(droppedFile.size),
		preview: URL.createObjectURL(droppedFile),
		error: false,
		uploaded: false,
		progress: 0,
		key: '',
		url: '',
	}));
}
