<?php

namespace Database\Seeders;
use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'One Piece Fishman Island Arc',
                'slug' => 'one-piece-fishman-island-arc',
                'category' => 'Anime',
                'video_url' => 'https://www.youtube.com/watch?v=8k_grV9z2Vc&t=1s',
                'thumbnail' => 'https://www.shutterstock.com/image-illustration/one-piece-crew-go-top-2318612133',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'One Piece EggHead Arc',
                'slug' => 'one-piece-egghead-arc',
                'category' => 'Anime',
                'video_url' => 'https://www.youtube.com/watch?v=W2xLuOCvtQo',
                'thumbnail' => 'https://www.shutterstock.com/image-vector/cimahi-indonesia-june-21-2023happy-face-2320569201',
                'rating' => 9.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'One Piece Stampede',
                'slug' => 'one-piece-stampede',
                'category' => 'Anime',
                'video_url' => 'https://www.youtube.com/watch?v=c8HS5ZrMAho&pp=ygUTb25lIHBpZWNlIG9mZmljaWFsIA%3D%3D',
                'thumbnail' => 'https://www.shutterstock.com/image-illustration/one-piece-crew-go-top-2318612133',
                'rating' => 9.0,
                'is_featured' => 0,
            ],
        ];
        Movie::insert($movies);
    }
}
