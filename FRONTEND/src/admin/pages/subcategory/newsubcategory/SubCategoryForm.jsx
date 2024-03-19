import React,{useEffect, useState} from 'react'
import './subcategoryform.scss';
import toast from 'react-hot-toast';
import Admin from '../../../Admin';
import { useNavigate } from 'react-router-dom';



const SubCategoryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        slug:'',
        category:'',
      });
    const [categories,setCategory]=useState({});
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
        navigate('/admin/sub-categories');
        toast.success('Sub-Category added successfully');
      }
    })
    // .catch(error => {
    //   toast.dismiss(loading);
    //   toast.error(error);
    // });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };
  const category=()=>{
    http.get('/admin/categories')
    .then(res => {
      if(res.status==200){
        setCategory(res.data.categories)
      }
    })
  }
  useEffect(()=>{
    category()
  },[]);
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
                        <select name='category' onChange={handleInputChange}>
                            <option>Select a category</option>
                              {
                              Array.isArray(categories) && categories.map(curr => (
                                <option key={curr.id} value={curr.id}>{curr.name}</option>
                              ))
                            }   
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