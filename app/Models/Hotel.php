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

    public function getHotelDbByFilter($countryName = null, $city = null, $gridNumber = null, $uniqueId = null, $hotelName = null,$inputs = null ){
        
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

    public function getHotelDbByref($uniqueId = null, $supplierId = null){

        $query = self::query();
        $baseQuery = self::query();
        $mappedQuery = self::query();
        if($uniqueId){
            $baseQuery->where('unique_id',$uniqueId);
            $mappedQuery->where('unique_id',$uniqueId);
            // $mappedData = $query->where('unique_id',$uniqueId);
        }
        if($supplierId){
           //$query->where('primary_id',$supplierId);
            // $mappedData = $query->where('primary_id',$uniqueId);
        }

        // $pages = ceil($query->where('mapping','LIKE','%Mapped%')->count()/5);

        $mappedData = $mappedQuery->where('mapping','LIKE', '%Mapped%')->get();
        $baseData = $baseQuery->where('mapping','LIKE', '%Base%')->first();


        $result = ['baseData'=>$baseData, 'mappeddata'=>$mappedData];


        return $result;
    }
}
