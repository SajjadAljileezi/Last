<?php

namespace App\Http\Controllers;
use Storage;
use Illuminate\Support\Facades\Auth;
use App\Images;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function retreive()
    {
        $id= Auth::user()->id;
        $imgs= Images::where('user_id', $id)->get('image');
        // $imagee = $imgs->pluck('image');
        return($imgs);
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('image')){
            $filename= $request->image->getClientOriginalName();
            $imaged = time().'_'.$filename;
            $userid= Auth::user()->id;
            // $path = storage_path( $userid .'/'. $imaged);
            $request->image->storeAs($userid,$imaged, 'public');
        $data['user_id'] = Auth::user()->id;
    $data['image'] = $userid.'/'.$imaged;

    images::create($data);


    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        //
    }
}
