import { useState } from "react";

import {
    Camera,
    CameraResultType,
    CameraSource,
} from "@capacitor/camera";

// export interface UserPhoto {
//     filepath: string;
//     webviewPath?: string;
// }

export function usePhotoGallery() {
    const [photo, setPhotos] = useState();
    const [base64,setBase64] = useState("")


    const takePhoto = async () => {

    const cameraPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
    });

    setBase64(await base64FromPath(cameraPhoto.webPath));

    const fileName = new Date().getTime() + ".jpeg";
    const newPhoto = {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath,
    };
    setPhotos(newPhoto);
    };

    return {
        photo,
        base64,
        takePhoto,
    };
}

export async function base64FromPath(path: string): Promise<string> {
const response = await fetch(path);
const blob = await response.blob();

return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
    if (typeof reader.result === 'string') {
        resolve(reader.result);
    } else {
        reject('method did not return a string')
    }
    };
    reader.readAsDataURL(blob);
});
}