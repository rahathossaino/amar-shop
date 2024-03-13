import React,{useState} from 'react'
import './brandform.scss';
import toast from 'react-hot-toast';
import Admin from '../../../Admin';
import { useNavigate } from 'react-router-dom';



const BarndForm = () => {
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
        const loading=toast.loading('Brand adding...')
        http.post('/admin/brands/store',{...formData})
        .then(res => {
          if(res.status==200){
            toast.dismiss(loading);
            navigate('/admin/coupons');
            toast.success('Coupon added successfully');
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
                        placeholder='Brand name..'
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
                        placeholder='Brand slug..'
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
            <div className="right">

            </div>
        </form>
    </div>
  )
}

export default BarndForm;