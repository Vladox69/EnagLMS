import { enagApi } from "@/apis"
import { uploadFile } from "@/utils"


export const newUser=async(user:any)=>{
    try {
        
        const resP=await uploadFile(user.photo_file)
        let photo_url;
        if(resP.status==200){
            photo_url=resP.url
        }
        const resId=await uploadFile(user.id_card_file)
        let ID_card_url;
        if(resId.status==200){
            ID_card_url=resId.url
        }
        const body={
            id:user.id,       
            username:user.username,
            password:user.password, 
            email:user.email,
            rol:user.rol,
            photo_url,
            names:user.names,
            last_names:user.last_names,
            ID_card_url
        }

        const res= await enagApi.post(`/users`,body)
        return res
    } catch (error) {
        return error
    }
}