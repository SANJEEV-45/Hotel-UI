<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;
    protected $table = "sample_hotel_data";
    public $timestamps = false;

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

       $count = $query->count();

       $data = $query->paginate(7);

       $result = ['pages'=>$pages,'data'=>$data, 'count'=>$count];

       return $result;
    }

    public function UpdateHotelDbByRow($uniqueId, $id){
        $existingCount = self::where('unique_id', $uniqueId)->count();
        $message = ['message'=>'Values is already present'];
        if ($existingCount == 0) {
            if ($uniqueId == "n" || $uniqueId == "N") {
                $message = ['status' => 0, 'message' => "Value is not updated"];
                $maxValue = self::max('unique_id');
                $result = self::where('ind', $id)->update(['unique_id' => $maxValue]);
            } else {
                $result = self::where('ind', $id)->update(['unique_id' => $uniqueId]);
            }
            if($result){
                $message = ['status' => 1, 'message' => "Successfully updated"];
            }
        }
        return $message;
    }
}