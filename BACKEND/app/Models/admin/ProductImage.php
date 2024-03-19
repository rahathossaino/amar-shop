<?php

namespace App\Models\admin;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;
    public static function store(Request $request,$id){
            foreach ($request->file('images') as $image) {
                $productImage=new ProductImage();
                $productImage->product_id=$id;
                $ext=$image->getOriginalExtension();
                $newImage=$id.'-'.time().'.'.$ext;
                $image->move(public_path().'/upload/product/',$newImage);
                $productImage->image=public_path().'/upload/product/'.$newImage;
                $productImage->save();
            }
    }
}
