import React,{useEffect, useState} from 'react'
import './productform.scss';
import toast from 'react-hot-toast';
import Admin from '../../../Admin';
import { useNavigate } from 'react-router-dom';


const ProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        slug:'',
        price: '',
        price_of_day: '',
        short_description: '',
        description: '',
        category: '',
        subcategory: '',
        brand: '',
        sku: '',
        track_qty: '',
        qty: '',
        images:[]
      });
    const images = formData.images?.map((file) => URL.createObjectURL(file));
    const[data,setData]=useState({
        subcategories:[],
        brands:[]
    })
    const [categories,setCategory]=useState([]);
    const navigate =useNavigate();
    const {http}=Admin();
    const maxNumber = 4;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if(name=='category'){
            getSubCategory(value);
        }
    };
      const handleImage = (event) => {
        setFormData({
          ...formData,
          images: Array.from(event.target.files)
        });
      };

    const getSlug=(e)=>{
        http.post('/admin/product/getSlug/'+e.target.value).
        then(res=>{
            setFormData({ ...formData, slug: res.data.slug });
        })
    }
    const getCategory=()=>{
        http.get('/admin/categories')
        .then(res => {
            setCategory(res.data.categories)
        })
    }
    const getSubCategory=(id)=>{
        http.get('/admin/get-subcategories/'+id)
        .then(res => {
            setData({...data, subcategories:res.data.subcategories})
        })
    }
    const getBrand=()=>{
        http.get('/admin/brands')
        .then(res => {
            setData({...data, brands:res.data.brands})
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const { images} = formData;
        const loading=toast.loading('Product adding...')
        const formDataWithImages = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'images') {
                value.forEach((file, index) => {
                    formDataWithImages.append(`images[${index}]`, file);
                });
            } else {
                formDataWithImages.append(key, value);
            }
        });
        http.post('/admin/products/store',formDataWithImages)
        .then(res => {
        if(res.status==200){
            toast.dismiss(loading);
            navigate('/admin/products');
            toast.success('Product added successfully');
        }
        })
        .catch(error => {
        toast.dismiss(loading);
        toast.error('Something Went Wrong');
        });
  };

  useEffect(()=>{
    getCategory();
    getBrand();
  },[])
  return (
    <div className='productForm'>
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className="formData">
                <div>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={getSlug}
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
                        readOnly
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
                        type="text"
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
                        placeholder='Product Price of The Day..'
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
                        placeholder='Product Short Description..'
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
                        placeholder='Product Description..'
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <select name="category" onChange={handleInputChange} >
                            <option>Select category</option>
                            {
                                categories.map((curr,idx)=>{
                                    return(
                                        <option key={idx} value={curr.id}>{curr.name}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                </div>
                
                <div>
                    <label>
                        Sub-Category:
                        <select name="subcategory" onChange={handleInputChange}>
                            <option>Select sub-category</option>
                            {
                                data.subcategories.map((curr,idx)=>{
                                    return(
                                        <option key={idx} value={curr.id}>{curr.name}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Brand:
                        <select name="brand" onChange={handleInputChange} >
                            <option>Select brand</option>
                            {
                                data.brands.map((curr,idx)=>{
                                    return(
                                        <option key={idx} value={curr.id}>{curr.name}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        SKU:
                        <input
                            type="text"
                            name="sku"
                            value={formData.sku}
                            onChange={handleInputChange}
                            placeholder='Product SKU..'
                            className='number'
                        />
                    </label>
                </div>
                <div className='radiocheck'>
                    <label className='title'>Track Quantity</label>
                    <div>
                    <div >
                        <label htmlFor="yes">Yes</label>
                        <input type='radio' id="yes" value='yes' name='track_qty' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="no">No </label>
                        <input type='radio' id="no" value='no' name='track_qty'onChange={handleInputChange}/>
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
                <div className='image'> 
                    <div className='image-input'>
                        <label>
                            Image:
                            <input
                                multiple
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                                style={{ display: 'none' }}
                                id="imageInput"
                                name='images'
                            />
                        </label>
                        <label htmlFor="imageInput" className='image-button'>
                            Choose Image
                        </label>
                        <button type='submit' className='submit'>Submit</button>
                    </div>    
                    <div className='image-item'>
                        {images && images.map((curr,idx)=>{
                            return(
                                <div key={idx} className='image'>
                                    <img src={curr} alt="Selected"  />
                                </div>
                                )
                            })} 
                    </div>                              
                </div>
            </div>
        </form>
    </div>
  )
}

export default ProductForm;