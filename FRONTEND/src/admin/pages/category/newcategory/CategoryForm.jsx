import React,{useEffect, useState} from 'react';
import Admin from '../../../Admin';
import './categoryform.scss';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const CategoryForm = () => {
  const {http}=Admin();
  const navigate=useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        slug:'',
        image: null,
      });
      const[response,setResponse]=useState({
        error:'',
        message:''
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    const loading=toast.loading('Category adding...')
    http.post('/admin/categories/store',{...formData})
    .then(res => {
      if(res.status==200){
        toast.dismiss(loading);
        navigate('/admin/categories');
        toast.success('Category added successfully');
      }
    })
    .catch(error => {
      toast.error('Something Went Wrong');
    });
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
    }
  };
  
  if(response.message){
    return <h2 className='resuccess'>{response.message}</h2>
  }
  return (
    <div className='categoryForm'>
        <form onSubmit={handleSubmit} className='catform'>
            <div className="left">
                <div>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Category name..'
                        />
                    </label>
                    {response.message && <p className='success'>{response.message}</p>}
                    {response.error && <p className='error'>{response.error}</p>}
                </div>
                <div>
                    <label>
                        Slug:
                        <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        placeholder='Category slug..'
                        />
                    </label>
                    {response.message && <p className='success'>{response.message}</p>}
                    {response.error && <p className='error'>{response.error}</p>}
                </div>
                <div >                    
                    {/* <label>
                        Image:
                        <input type="file" accept="image/*" name='image' onChange={handleImageChange} />
                    </label>  
                </div>
                <div className="image"> */}
                    <button type="submit" className='submit'>Submit</button>
                    {/* {formData.image && (
                        <div className='img'>
                            <img src={formData.image} alt="Uploaded" style={{height:'9rem',width:'9rem'}}/>
                        </div>
                    )} */}
                </div>
            </div>
        </form>
    </div>
  )
}

export default CategoryForm;