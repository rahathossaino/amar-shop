import React,{useState} from 'react'
import './couponform.scss';


const CouponForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        slug:'',
        file: null
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
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
                        value={formData.slug}
                        onChange={handleInputChange}
                        placeholder='Coupon code..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Maximum Uses:
                        <input
                        type="number"
                        name="max_uses"
                        value={formData.name}
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
                        value={formData.slug}
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
                        name="discount"
                        value={formData.name}
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
                        value={formData.slug}
                        onChange={handleInputChange}
                        placeholder='Minimum Amount..'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Discount Type:
                        <select>
                            <option value="null">Select Dicount Type</option>
                            <option value="fixed">Fixed</option>
                            <option value="percentage">Percentage</option>

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

export default CouponForm;