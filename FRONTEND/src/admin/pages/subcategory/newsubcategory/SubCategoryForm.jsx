import React,{useState} from 'react'
import './subcategoryform.scss';


const SubCategoryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        slug:'',
        category:'',
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
                        <select>
                            <option>Select a category</option>
                            <option>Electronics</option>
                            <option>Outfit</option>
                        </select>
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

export default SubCategoryForm;