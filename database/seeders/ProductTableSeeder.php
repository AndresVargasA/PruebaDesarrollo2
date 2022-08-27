<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name' => 'Vitamina C Caja Con 10 tiras de tabletas masticables c/u - sabor mandarina',
            'description' => 'ES UN MEDICAMENTO. NO EXCEDER SU CONSUMO. LEER INDICACIONES Y CONTRAINDICACIONES. SI LOS SÍNTOMAS PERSISTEN, CONSULTAR AL MÉDICO',
            'price' => 49400,
            'stock' => 10,
            'image_path' => 'vitaminaC.jpg',
            'capacity' => 'Caja con 10 tiras',
            'typeOfUse' => 'oral'
        ]);

        Product::create([
            'name' => 'Ibuprofeno + metacarbamol 200/500 mg Caja con 30 tabletas recubiertas',
            'description' => 'ES UN MEDICAMENTO. NO EXCEDER SU CONSUMO. LEER INDICACIONES Y CONTRAINDICACIONES. SI LOS SÍNTOMAS PERSISTEN, CONSULTAR AL MÉDICO',
            'price' => 30400,
            'stock' => 15,
            'image_path' => 'iboprufeno.jpg',
            'capacity' => 'Caja con 30 tabletas',
            'typeOfUse' => 'oral'
        ]);

        Product::create([
            'name' => 'Noxpirin plus caja con 12 capsulas COL',
            'description' => 'ES UN MEDICAMENTO. NO EXCEDER SU CONSUMO. LEER INDICACIONES Y CONTRAINDICACIONES. SI LOS SÍNTOMAS PERSISTEN, CONSULTAR AL MÉDICO',
            'price' => 12475,
            'stock' => 5,
            'image_path' => 'noxpirin.jpg',
            'capacity' => 'Caja con 12 capsulas',
            'typeOfUse' => 'oral'
        ]);

        Product::create([
            'name' => 'Sal de frutas lua plus polvo citrus caja con 6 sobres',
            'description' => 'ES UN MEDICAMENTO. NO EXCEDER SU CONSUMO. LEER INDICACIONES Y CONTRAINDICACIONES. SI LOS SÍNTOMAS PERSISTEN, CONSULTAR AL MÉDICO',
            'price' => 16150,
            'stock' => 20,
            'image_path' => 'sal_de_frutas_lua.jpg',
            'capacity' => 'Caja con 6 sobres',
            'typeOfUse' => 'oral'
        ]);
    }
}
