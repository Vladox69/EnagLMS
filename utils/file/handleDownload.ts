import axios from 'axios';
import fileDownload from 'js-file-download';
export const handleDownload = (url: string, filename: string) => {
    try {
        axios.get(url, { responseType: 'blob' }).then((res) => {
            fileDownload(res.data, filename)
        })
    } catch (error) {
        return error
    }

}