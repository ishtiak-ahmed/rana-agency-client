import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // const files = event.target.files
        // const formData = {
        //     file: data.image[0],
        //     service: data.service,
        //     description: data.description
        // }

        const formData = new FormData()
        formData.append('file', data.image[0])
        formData.append('service', data.service)
        formData.append('description', data.description)
        console.log(formData)

        fetch('https://ranaagency.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    };
    return (
        <div className='mainbody'>
            <div className="service-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Service Title:</p>
                    <input type="text" defaultValue='' {...register('service')} /> <br />
                    <p>Image:</p>
                    <input type='file' {...register('image', { required: true })} /> <br />
                    {errors.image && <span>This field is required</span>} <br />
                    <p>Description:</p>
                    <textarea type="text" {...register('description', { required: true })} />
                    {errors.description && <span>This field is required</span>} <br />
                    <input type="submit" value='Add Service' />
                </form>
            </div>
        </div>
    );
};

export default AddService;