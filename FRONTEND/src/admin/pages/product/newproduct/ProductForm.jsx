import React,{useState} from 'react'
import './productform.scss';
import toast from 'react-hot-toast';
import Admin from '../../../Admin';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        slug:'',
        file: null
      });
    const navigate =useNavigate();
    const {http}=Admin();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loading=toast.loading('Product adding...')
    http.post('/admin/products/store',{...formData})
    .then(res => {
      if(res.status==200){
        toast.dismiss(loading);
        navigate('/admin/products');
        toast.success('Product added successfully');
      }
    })
    .catch(error => {
      toast.error('Something Went Wrong');
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  return (
    <div className='productForm'>
        <form onSubmit={handleSubmit}>
            <div className="formData">
                <div>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Product title..'
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
                        placeholder='Product slug..'
                        />
                    </label>
                </div>
                
                <div>
                    <label>
                        Price:
                        <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder='Product price..'
                        className='number'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Price of The Day:
                        <input
                        type="number"
                        name="price_of_day"
                        value={formData.price_of_day}
                        onChange={handleInputChange}
                        placeholder='Product slug..'
                        className='number'
                        />
                    </label>
                </div>
                 <div>
                    <label>
                        Short Description:
                        <textarea
                        name="short_description"
                        value={formData.short_description}
                        onChange={handleInputChange}
                        placeholder='Product slug..'
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder='Product slug..'
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <select name="category" onChange={handleInputChange}>
                            <option>Select category</option>
                        </select>
                    </label>
                </div>
                
                <div>
                    <label>
                        Sub-Category:
                        <select name="sub_category" onChange={handleInputChange}>
                            <option>Select sub-category</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Brand:
                        <select name="brand" onChange={handleInputChange}>
                            <option>Select brand</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        SKU:
                        <input
                            type="text"
                            name="sku"
                            value={formData.price_of_day}
                            onChange={handleInputChange}
                            placeholder='Product slug..'
                            className='number'
                        />
                    </label>
                </div>
                <div className='radiocheck'>
                    <label className='title'>Track Quantity</label>
                    <div>
                    <div >
                        <label for="yes">Yes</label>
                        <input type='radio' id="yes" value='yes' name='track_qty'/>
                    </div>
                    <div>
                        <label for="no">No </label>
                        <input type='radio' id="no" value='no' name='track_qty'/>
                    </div>
                    </div>
                </div>
                <div>
                    <label>
                        Quantity:
                        <input
                        type="number"
                        name="qty"
                        onChange={handleInputChange}
                        className='number'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                        <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        />
                    </label>
                </div>
                <button type="submit" className='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ProductForm;