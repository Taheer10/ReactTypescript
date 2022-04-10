import React from 'react'
type statusProps ={
    status : 'loading' | 'success' | 'success'
}

export default function Status(props : statusProps) {
    let message
    if (message ==='loading') {
        message = 'Loading...'
    }
    else if (message ==='success') {
        message = 'Data Fetched Successfully'
    }
    else if (message ==='errro') {
        message = 'Error Occured'
    }
    
   
    return <div>Status {message}</div>
  
}
