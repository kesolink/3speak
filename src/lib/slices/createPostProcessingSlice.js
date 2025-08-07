

export const createPostProcessingSlice = (set) => ({

    isProcessing : null,
    title: "",
    processUser:"",

    updateProcessing:(permlink, title, user)=>{
        set({isProcessing: permlink,
            title:title,
            processUser:user
        })
    }
    
})
