<?php
declare(strict_types = 1);

namespace App\Models\Admin;

class Series extends \App\Models\Series
{
    public static function getList(): array
    {
        $items = self::query()->where([
            ["is_show", "=", 1],
        ])->get(["uid", "title"]);
        $array = [];
        foreach ($items as $value) {
            $array[$value->uid] = $value->title;
        }
        return $array;
    }
}
