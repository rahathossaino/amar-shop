import React,{useState} from 'react'
import './subcategoryform.scss';
import toast from 'react-hot-toast';
import Admin from '../../../Admin';
import { useNavigate } from 'react-router-dom';



const SubCategoryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        slug:'',
        category_id:'',
      });
    const navigate =useNavigate();
    const {http}=Admin();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loading=toast.loading('Sub-Category adding...')
    http.post('/admin/subcategories/store',{...formData})
    .then(res => {
      if(res.status==200){
        toast.dismiss(loading);
        navigate('/admin/subcategories');
        toast.success('Sub-Category added successfully');
      }
    })
    .catch(error => {
      toast.dismiss(loading);
      toast.error('Something Went Wrong');
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  return (
    <div className='categoryForm'>
        <form onSubmit={handleSubmit}>
            <div className="left">
                <div>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Sub-Category name..'
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
                        placeholder='Sub-Category slug..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <select name='category_id' onChange={handleInputChange}>
                            <option>Select a category</option>
                            <option value='1'>Electronics</option>
                            <option>Outfit</option>
                        </select>
                    </label>
                </div>
                <button type="submit" className='submit'>Submit</button>
            </div>
            <div className="right">

            </div>
        </form>
    </div>
  )
}

export default SubCategoryForm;