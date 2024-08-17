import { enagApi } from "@/apis";
import { uploadFile } from "@/utils";

export const updateUser=async(user:any)=>{
    try {
        let resP;
        let ID_card_url;
        if(user.photo_file!=undefined){
            resP=await uploadFile(user.photo_file)
        }

        if(user.id_card_file!=undefined){
            ID_card_url=await uploadFile(user.id_card_file)
        }

        const body={
            id:user.id,       
            username:user.username,
            password:user.password, 
            email:user.email,
            rol:user.rol,
            photo_url: (user.photo_file!=undefined)? resP?.url:user.photo_url,
            names:user.names,
            last_names:user.last_names,
            ID_card_url:(user.id_card_file!=undefined)? ID_card_url?.url:user.ID_card_url,
        }

        const res = await enagApi.put(`/users/user_id=${user.id}`,body)
        return res
    } catch (error) {
        return error
    }
}