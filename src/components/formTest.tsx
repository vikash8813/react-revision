import React, {useEffect, useState} from 'react';

function Form() {
    const [detail,updateDetail] = useState({
        name: '',
        email:''
    })


    const onsubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.warn(e.currentTarget.checkValidity())
        console.log('submit hua')
    }

    useEffect(()=>{
        console.log('run use effect')
    },[detail.name])
    return (
        <div>
            details: {detail.name}
            <form onSubmit={onsubmit} >
                <input value={detail.name} type='text' onChange={e => (
                    updateDetail(v => {
                        return {
                            ...v,
                            name: e.target.value
                        }
                    })
                )}
                />
                <input value={detail.email} type='email' required onChange={e => (
                    updateDetail(v => {
                        return {
                            ...v,
                            email: e.target.value
                        }
                    })
                )}
                />
                <button type='submit' > submit</button>
            </form>
        </div>
    );
}

export default Form;