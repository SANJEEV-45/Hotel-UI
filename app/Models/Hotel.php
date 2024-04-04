<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $table = "sample_hotel_data";
    use HasFactory;

    public function getAllValues()
    {
        return self::all();
    }

    public function getFilterValues($countryName = null, $city = null, $gridNumber = null, $uniqueId = null, $hotelName = null,$inputs = null ){
        
        $query = self::query();
        if ($countryName) {
           $query->where('country_name', $countryName);
       }
       if ($city) {
           $query->where('city', $city);
       }
       if ($gridNumber) {
           $query->where('grid_number', $gridNumber);
       }
       if ($uniqueId) {
           $query->where('unique_id', $uniqueId);
       }

       if ($hotelName) {
           $query->where('name',$hotelName);
       }

       if($inputs){
            $query->where('validation',$inputs);
       }

       $pages = ceil($query->count()/7);
       
       $data = $query->paginate(7);

       $result = ['pages'=>$pages,'data'=>$data];

       return $result;
    }
}
