import React,{useState} from 'react';
import Admin from '../../../Admin';
import './categoryform.scss';


const CategoryForm = () => {
  const {http}=Admin();
    const [formData, setFormData] = useState({
        name: '',
        slug:'',
        image: null,
        message:''
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    http.post('/admin/categories/store',{formData}).then(res=>{
      if(res.data.status===200){
        setFormData({ ...formData, message: res.data.result });
      }
    })
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
  if(formData.message){
    return <h2 className='success'>{formData.message}</h2>
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
                </div>
                <div >                    
                    <label>
                        Image:
                        <input type="file" accept="image/*" name='image' onChange={handleImageChange} />
                    </label>  
                </div>
                <div className="image">
                    <button type="submit" className='submit'>Submit</button>
                    {formData.image && (
                        <div className='img'>
                            <img src={formData.image} alt="Uploaded" style={{height:'9rem',width:'9rem'}}/>
                        </div>
                    )}
                </div>
            </div>
        </form>
    </div>
  )
}

export default CategoryForm;