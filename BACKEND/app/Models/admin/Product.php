<?php

namespace App\Models\admin;

use App\Models\admin\ProductImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public function product_images()
    {
        return $this->hasMany(ProductImage::class);
    }
    public function product_image()
    {
        return $this->hasOne(ProductImage::class);
    }
}
