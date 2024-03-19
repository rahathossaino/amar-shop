import React,{useState} from 'react'
import './couponform.scss';
import toast from 'react-hot-toast';
import Admin from '../../../Admin';
import { useNavigate } from 'react-router-dom';

const CouponForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        code:'',
        description:'',
        max_uses:'',
        max_user:'',
        discount_amount:'',
        min_amount:'',
        discount_type:'',
        starts_at:'',
        expires_at:''
      });
    const navigate =useNavigate();
    const {http}=Admin();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const loading=toast.loading('Coupon adding...')
        http.post('/admin/coupons/store',{...formData})
        .then(res => {
          if(res.status==200){
            toast.dismiss(loading);
            navigate('/admin/coupons');
            toast.success('Coupon added successfully');
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
    <div className='couponForm'>
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
                        placeholder='Coupon name..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Code:
                        <input
                        type="text"
                        name="code"
                        value={formData.code}
                        onChange={handleInputChange}
                        placeholder='Coupon code..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder='Coupon description..'
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Maximum Uses:
                        <input
                        type="number"
                        name="max_uses"
                        value={formData.max_uses}
                        onChange={handleInputChange}
                        placeholder='Maximum Uses..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Maximum Uses Per User:
                        <input
                        type="number"
                        name="max_user"
                        value={formData.max_user}
                        onChange={handleInputChange}
                        placeholder='Maximum Uses Per User..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Discount:
                        <input
                        type="number"
                        name="discount_amount"
                        value={formData.discount_amount}
                        onChange={handleInputChange}
                        placeholder='Discount..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Minimum Amount:
                        <input
                        type="number"
                        name="min_amount"
                        value={formData.min_amount}
                        onChange={handleInputChange}
                        placeholder='Minimum Amount..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Discount Type:
                        <select name='discount_type' onChange={handleInputChange} value={formData.discount_type}>
                            <option >Select Dicount Type</option>
                            <option value="fixed">Fixed</option>
                            <option value="percentage">Percentage</option>

                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Starts at:
                        <input
                        type="datetime-local"
                        name="starts_at"
                        value={formData.starts_at}
                        onChange={handleInputChange}
                        placeholder='Starts at..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Expires at:
                        <input
                        type="datetime-local"
                        name="expires_at"
                        value={formData.expires_at}
                        onChange={handleInputChange}
                        placeholder='Expires at..'
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

export default CouponForm;