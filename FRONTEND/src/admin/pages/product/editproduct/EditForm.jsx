import React,{useState} from 'react'
import './editform.scss';
import Admin from '../../../Admin';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';



const ProductForm = () => {
    const [categoryId,setCategoryId]=useState({});
    const{productId}=useParams();
    const [formData, setFormData] = useState({
        title: '',
        slug:'',
        price: '',
        price_of_day: '',
        short_description: '',
        description: '',
        category_id: '',
        subcategory_id: '',
        brand_id: '',
        sku: '',
        track_qty: '',
        qty: '',
        is_featured:'',
        images:[]
      });
    const images = formData.images?.map((file) => URL.createObjectURL(file));
    const navigate =useNavigate();
    const[categories,setCategory]=useState();
    const[subcategories,setSubcategory]=useState()
    const[brands,setBrand]=useState()
    const {http}=Admin();
   const handleSubmit = (e) => {
    e.preventDefault();
    const loading=toast.loading('Product updating...')
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
    http.post('/admin/products/edit/'+productId,formDataWithImages)
    .then(res => {
      if(res.status==200){
        toast.dismiss(loading);
        navigate('/admin/products');
        toast.success('Product updated successfully');
      }
    })
    .catch(error => {
        toast.dismiss(loading);
      toast.error('Something Went Wrong');
    });
  };
  const handleImage = (event) => {
    setFormData({
      ...formData,
      product_images:null,
      images: Array.from(event.target.files)
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if(name=='category'){
        getSubCategory(value);
    }
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
        setSubcategory(res.data.subcategories);
    })
}
const getBrand=()=>{
    http.get('/admin/brands')
    .then(res => {
        setBrand(res.data.brands)
    })
}
  const productData=()=>{
    try{
      http.get('/admin/products/'+productId)
      .then(res=>{
        setFormData(res.data.product);
        getSubCategory(res.data.product.category_id);
      })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    productData();
    getCategory();
    getBrand()
  },[]);
  
  return (
    <div className='productForm'>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="formData">
                <div>
                    <label>
                        Name:
                        <input
                        type="text"
                        name="title"
                        value={formData.title}
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
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Price of The Day:
                        <input
                        type="string"
                        name="price_of_day"
                        value={formData.price_of_day}
                        onChange={handleInputChange}
                        placeholder='Product price of the day..'
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
                        placeholder='Product short description..'
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
                        placeholder='Product description..'
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <select name="category_id" onChange={handleInputChange}>
                            <option>Select category</option>
                            {
                              categories &&  categories.map((curr,idx)=>{
                                    return(
                                        <option value={curr.id} selected={curr.id===formData.category_id} key={idx}>{curr.name}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                </div>
                
                <div>
                    <label>
                        Sub-Category:
                        <select name="subcategory_id" onChange={handleInputChange}>
                            <option>Select sub-category</option>
                            {
                              subcategories &&  subcategories.map((curr,idx)=>{
                                    return(
                                        <option value={curr.id} selected={curr.id===formData.subcategory_id} key={idx}>{curr.name}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Brand:
                        <select name="brand_id" onChange={handleInputChange}>
                            <option>Select brand</option>
                            {
                              brands &&  brands.map((curr,idx)=>{
                                    return(
                                        <option value={curr.id} selected={curr.id===formData.brand_id} key={idx}>{curr.name}</option>
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
                            placeholder='Product sku..'
                        />
                    </label>
                </div>
                <div className='radiocheck'>
                    <label className='title'>Featured</label>
                    <div>
                        <div >
                            <label htmlFor="yes">Yes</label>
                            <input type='radio' id="yes" value='yes' name='is_featured' checked={formData.is_featured==='yes'} onChange={handleInputChange}/>
                        </div>
                        <div>
                            <label htmlFor="no">No </label>
                            <input type='radio' id="no" value='no' name='is_featured' checked={formData.is_featured==='no'}  onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className='radiocheck'>
                    <label className='title'>Track Quantity</label>
                    <div>
                        <div >
                            <label htmlFor="yes">Yes</label>
                            <input type='radio' id="yes" value='yes' name='track_qty' checked={formData.track_qty==='yes'} onChange={handleInputChange}/>
                        </div>
                        <div>
                            <label htmlFor="no">No </label>
                            <input type='radio' id="no" value='no' name='track_qty' checked={formData.track_qty==='no'}  onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div>
                    <label>
                        Quantity:
                        <input
                        type="number"
                        name="qty"
                        value={formData.qty}
                        onChange={handleInputChange}
                        placeholder='Qty'
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
                        {
                            formData.product_images && formData.product_images.map((curr,idx)=>{
                                return(
                                    <div key={idx} className='image'>
                                        <img src={`data:image/jpeg;base64,${curr.image}`} alt="Selected"  />
                                    </div>
                                    )
                                })
                        }
                        {
                            images && images.map((curr,idx)=>{
                                return(
                                    <div key={idx} className='image'>
                                        <img src={curr} alt="Selected"  />
                                    </div>
                                    )
                                })
                        
                            }   
                    </div>                              
                </div>
            </div>
        </form>
    </div>
  )
}

export default ProductForm;